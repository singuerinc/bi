import Vue from "vue";
import Bi from "./Bi.vue";
import store from "./store";
import router from "./router";

/* eslint-disable no-new */
const v = new Vue({
    el: "#bi",
    store,
    router,
    render: (h: any) => h(Bi)
});