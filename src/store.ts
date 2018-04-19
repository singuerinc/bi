import Vue from 'vue';
import Vuex from 'vuex';
import Storage from './api/storage';

Vue.use(Vuex);

const storage = new Storage();

const state = {
    accessToken: '',
    feedZoom: 'x3',
    feed: {
        data: [],
        pagination: {
            next_url: null,
        },
    },
};

const mutations = {
    SET_ACCESS_TOKEN(state: any, accessToken: string): void {
        state.accessToken = accessToken;
        storage.saveAccessToken(accessToken);
    },
    SET_PHOTOS_ZOOM(state: any, zoom: string): void {
        state.feedZoom = zoom;
        storage.saveFeedZoom(zoom);
    },
    ADD_FEED(state: any, feed: any): void {
        state.feed.data = state.feed.data.concat(feed.data);
        state.feed.pagination = feed.pagination;
        state.feed.meta = feed.meta;
    },
};

const actions = {
    PARSE_FEED({commit}: { commit: (key: string, value: any) => void }, data: any): any {
        data.data.forEach((img: any) => {
            let url = img.images.standard_resolution.url;

            url = url.replace(`${img.images.standard_resolution.width}x`, '1080x');
            url = url.replace(`x${img.images.standard_resolution.width}`, 'x1080');

            img.images.standard_resolution.url = url;

            return img;
        });

        commit('ADD_FEED', data);
    },
};

const getters = {};

export default new Vuex.Store({
    state: Object.assign(state, storage.json()),
    getters,
    actions,
    mutations,
});
