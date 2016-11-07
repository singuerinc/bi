import styles from "./css/bi.css";
import Vue from 'vue';
import Bi from './Bi.vue';
import router from './router';

new Vue({
    el: "#bi",
    router,
    render: h => h(Bi)
});
