import Vue from "vue";
import Bi from "./Bi.vue";
import store from "./store";
import router from "./router";

new Vue({
    el: "#bi",
    store,
    router,
    render: (h: any) => h(Bi)
});