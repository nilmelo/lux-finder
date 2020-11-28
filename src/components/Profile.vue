<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img :src="user.avatar_url" alt="" class="card-img-top">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Organização:
                            <span class="badge badge-success">{{ user.company }}</span>
                        </li>
                        <li class="list-group-item">
                            Localização:
                            <span class="badge badge-primary">{{ user.location }}</span>
                        </li>
                        <li class="list-group-item">
                            Seguidores:
                            <span class="badge badge-info">{{ user.followers }}</span>
                        </li>
                        <li class="list-group-item">
                            Repositórios:
                            <span class="badge badge-info">{{ user.public_repos }}</span>
                        </li>
                        <li class="list-group-item">
                            Stars:
                            <span class="badge badge-info">{{ user.public_gists }}</span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <a :href="user.html_url" target="_blank" class="btn btn-success btn-block">Ver perfil</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["user"]
}
</script>