import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        access_token: '',
        photos_zoom: 'x3'
    },
    mutations: {
        SET_ACCESS_TOKEN (state, access_token) {
            state.access_token = access_token;
        },
        SET_PHOTOS_ZOOM (state, zoom) {
            state.photos_zoom = zoom;
        }
    },
    getters: {

    }
});