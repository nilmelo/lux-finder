<template>
  <div id="app">
    <Navbar/>

    <div class="container">
      <div class="card card-body">
        <h1>Pesquisar Usuários do GitHub</h1>
        <p class="lead">Digite um nome para encontrar usuários e repositórios</p>
        <input @keyup="getUser" id="search" type="text" class="form-control" required>
      </div>

      <div class="row mt-3" v-if="user.length !== 0">
        <div class="col-md-4">
          <Profile :user="user" />
        </div>
        <div class="col-md-8">
          <Repo v-for="(repo,index) of repos" :key="index" :repo="repo" />
        </div>
      </div>
      <div v-else>
        <p>Usuário não encontrado</p>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Profile from './components/Profile.vue';
import Repo from './components/Repo.vue';

export default {
  name: 'App',
  data() {
    return {
      github: {
        url: 'https://api.github.com/users',
        client_id: 'f787b8a1bc663c9c4a81',
        client_secret: '63128dca20479dc55c1931aae2713a600bf84200',
        count: 8,
        sort: 'created: asc'
      },
      user: [],
      repos: []
    }
  },
  components: {
    Navbar,
    Profile,
    Repo
  },
  methods: {
    getUser(e){
      const user = e.target.value;
      const { url, client_id, client_secret, count, sort } = this.github;

      this.$http.get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      ).then(({data}) => (this.user = data) );

      this.$http.get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.repos = data));
    }
  }
};
</script>

<style>
</style>
