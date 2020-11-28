<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="profileSide">
            <a class="navbar-brand" href="#topo">
                <span class="d-none d-lg-block">
                    <img :src="user.avatar_url" class="rounded-circle img-profile">
                </span>
            </a>
            <div class="navbar-collapse" id="profile" v-if="user.length !== 0">
                <ul class="navbar-nav">
                    <li>
                        Nome:
                        <span class="badge badge-warning">{{ user.name }}</span>
                    </li>
                    <li>
                        Organização:
                        <span class="badge badge-success">{{ user.company }}</span>
                    </li>
                    <li>
                        Localização:
                        <span class="badge badge-primary">{{ user.location }}</span>
                    </li>
                    <li>
                        Seguidores:
                        <span class="badge badge-info">{{ user.followers }}</span>
                    </li>
                    <li>
                        Repositórios:
                        <span class="badge badge-info">{{ user.public_repos }}</span>
                    </li>
                    <li>
                        Stars:
                        <span class="badge badge-info">{{ user.public_gists }}</span>
                    </li>
                    <li>
                        <a :href="user.html_url" target="_blank" class="nav-link icon-link">
                            <span class="sr-only">GitHub</span>
                            <i class="fab fa-github-square" style="font-size: 4rem;"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else class="d-none d-lg-block description">
                <p>Desafio para seleção Front-End com VueJS</p>
                <p>Nilson Melo</p>
                <p>2020</p>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: ["user"]
}
</script>