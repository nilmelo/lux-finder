import Vue from 'vue';
import Router from 'vue-router';
import Erro from './components/Erro';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/erro',
            name: 'Erro',
            component: Erro
        }
    ]
})