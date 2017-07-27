import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './views/Login.vue';
import Photos from './views/Photos.vue';

import store from './store';

Vue.use(VueRouter);

const routes: VueRouter.RouteConfig[] = [
    {
        path: '/',
        name: 'photos',
        component: Photos,
        beforeEnter: (to: VueRouter.Route, from: VueRouter.Route, next: (path?: string) => void) => {
            if (store.state.accessToken === '') {
                next('/login');
            } else {
                next();
            }
        },
    },
    {
        path: '/access_token*',
        beforeEnter: (to: VueRouter.Route, from: VueRouter.Route, next: (path?: string) => void) => {
            try {
                const match: RegExpMatchArray | null = to.path.match(/^\/access_token=(.+)$/);
                const token = (match as RegExpMatchArray)[1];

                store.commit('SET_ACCESS_TOKEN', token);
                next('/');
            } catch (e) {
                next('/login');
            }
        },
    },
    {
        path: '/logout',
        beforeEnter: (to: VueRouter.Route, from: VueRouter.Route, next: (path?: string) => void) => {
            store.commit('SET_ACCESS_TOKEN', '');
            next('/login');
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
