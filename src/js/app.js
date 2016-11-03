import styles from "../css/main.css";
import Vue from "vue";

new Vue({
    el: "#app",
    data() {
        return {
            feed: {},
            styles: styles
        };
    },
    computed: {
        feedLength() {
            return this.feed.data ? this.feed.data.length : "XX";
        }
    },
    methods: {
        parse(data) {
            this.feed = data;
            console.log(data.data[0].user.profile_picture);
        }
    },
    created() {
        window._bigstagramParse = this.parse;

        let script = document.createElement("script"),
            header = document.getElementsByTagName("head");

        script.src = "https://api.instagram.com/v1/users/self/media/recent/?access_token=747027774.cee9bf3.cc7ec3f8a91f485db67d82e9de688305&callback=_bigstagramParse";
        header[0].appendChild(script);
    }
});
