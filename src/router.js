import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './views/Login.vue';
import Photos from './views/Photos.vue';

import store from "./store";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'photos',
        component: Photos,
        beforeEnter: (to, from, next) => {
            if(store.state.access_token == ""){
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: '/access_token*',
        beforeEnter: (to, from, next) => {
            let token;
            try {
                token = to.path.match(/^\/access_token=(.+)$/)[1];
                store.commit("SET_ACCESS_TOKEN", token);
                next("/");
            } catch (e) {
                next("/login");
            }

        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    routes
});

export default router;