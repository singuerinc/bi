import styles from "./css/bi.css";
import Vue from 'vue';
import Bi from './Bi.vue';

new Vue({
    el: "#bi",
    render: h => h(Bi)
});
