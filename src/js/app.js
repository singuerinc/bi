import styles from "../css/main.css";
import Vue from "vue";

new Vue({
    el: "#app",
    data() {
        return {
            feed: {},
            zoom: "x2"
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
        }
    },
    created() {
        window._biParse = this.parse;

        let token;

        try {
            token = location.hash.match(/^#access_token=(.+)$/)[1];
        } catch (e){
            token = null;
        }

        if(token !== null){
            this.$nextTick(() => {
                this.$refs.login.classList.add("hide");
                this.$refs.zoom.classList.remove("hide");
            });

            let script = document.createElement("script"),
                header = document.getElementsByTagName("head");
            script.src = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&scope=basic,public_content&callback=_biParse`;
            header[0].appendChild(script);
        }

    }
});
