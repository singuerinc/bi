import Vue from "vue";
import Bi from "./Bi.vue";
import store from "./store";
import router from "./router";

/* eslint-disable no-new */
new Vue({
    el: "#bi",
    store,
    router,
    render: (h) => h(Bi)
});
