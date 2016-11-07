import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './views/Login.vue';
import Photos from './views/Photos.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'login', component: Login},
    {path: '/photos', name: 'photos', component: Photos}
];

const router = new VueRouter({
    routes
});

export default router;