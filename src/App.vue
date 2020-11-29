<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <div class="input mt-lg-2">
        <h1>Pesquisar Usuários do GitHub</h1>
        <p class="lead">Digite um nome para encontrar usuários e repositórios</p>
        <input @keyup="getUser" id="search" type="text" class="form-control" required>
      </div>
      <Profile :user="user" />
      <div class="row mt-3" v-if="user.length !== 0">
        <div class="col-md-12">
          <Repo v-for="(repo,index) of repos" :key="index" :repo="repo" />
        </div>
      </div>
      <div v-else style="text-align: center;">
        <p>Digite um usuário válido</p>
      </div>
    </div>
  </div>
</template>

<script>
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
    Profile,
    Repo
  },
  methods: {
    getUser(e){
      const user = e.target.value;
      const { url, client_id, client_secret, count, sort } = this.github;

      this.$http.get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
        .then(({data}) => (this.user = data) )
        .then(response => {
        }, response => {
          switch (response.status) {
            case 403:
              if(!(this.$router.currentRoute.path === '/erro')){
                this.$router.push('erro');
              }
              break;
            case 404:
              this.user = [];
              break;
          }
        });

      this.$http.get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.repos = data))
        .then(response => {
        }, response => {
          switch (response.status) {
            case 403:
              if(!(this.$router.currentRoute.path === '/erro')){
                this.$router.push('erro');
              }
              break;
            case 404:
              this.repos = [];
              break;
          }
        });

    }
  }
};
</script>

<style>
body {
    background-color: #fff;
    padding-top: 3.75rem;
    font-family: "Open Sans", Helvetica, sans-serif;
    color: #787878;
}
#profileSide {
    background-color: #3a3431;
}
.input {
  margin-top: 10%;
}
@media screen and (min-width: 992px) {
    body {
        padding-top: 0;
        padding-left: 35%;
    }
    .input {
      margin-top: 12rem;
    }
    #profileSide{
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 33.33%;
        height: 100vh;
        background-image: url(assets/img/overlay.png), url(assets/img/bg.jpg);
        background-attachment: scrool;
        background-position: top left;
        background-repeat: repeat, no-repeat;
        background-size: auto, cover;
        color: rgba(255,255,255,.5);
        text-align: center;
    }
    .img-profile {
        max-width: 100%;
        max-height: auto;
        margin: 2rem auto;
    }
    #profileSide .navbar-collapse {
        display: flex;
        align-items: flex-start;
        width: 100%;
        margin-bottom: auto;
    }
    #profileSide .navbar-nav {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .description {
      padding-top: 10%;
    }
}
</style>
