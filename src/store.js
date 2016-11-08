import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        access_token: '',
        feed_zoom: 'x3',
        feed: '',
    },
    mutations: {
        SET_ACCESS_TOKEN (state, access_token) {
            state.access_token = access_token;
        },
        SET_PHOTOS_ZOOM (state, zoom) {
            state.feed_zoom = zoom;
        },
        SET_FEED (state, feed) {
            state.feed = feed;
        }
    },
    actions: {
        PARSE_FEED({commit}, data){
            data.data.forEach((img) => {
                let url = img.images.standard_resolution.url;

                url = url.replace(`${img.images.standard_resolution.width}x`, "1080x");
                url = url.replace(`x${img.images.standard_resolution.width}`, "x1080");

                img.images.standard_resolution.url = url;

                return img;
            });

            commit("SET_FEED", data);
        }
    },
    getters: {

    }
});