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
        login(){
            const redirect_uri = location.href;
            location.href = `https://api.instagram.com/oauth/authorize/?client_id=cee9bf3af8b9426ca0fbe927aaa4b785&redirect_uri=${redirect_uri}&response_type=token`;
        },
        parse(data) {
            this.feed = data;
        },
        get1080(data){
            let url = data.url, width, height;

            ({width, height} = data);

            url = url.replace(`${width}x`, "1080x");
            url = url.replace(`x${width}`, "x1080");

            return url;
        }
    },
    created() {
        window._biParse = this.parse;

        let token;

        try {
            token = location.hash.match(/^#access_token=(.+)$/)[1];
        } catch (e) {
            token = null;
        }

        if (token !== null) {
            this.$nextTick(() => {
                document.body.classList.add("app-mode");
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
