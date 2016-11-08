<template>
    <div>
        <h1>Bi</h1>
        <zoom></zoom>
        <ul class="images" v-bind:class="zoom" v-cloak>
            <li v-for="img in feed.data" class="image">
                <h3 class="caption">
                    <span v-if="img.location" class="location">{{img.location.name}}</span>
                    <span v-if="img.caption" class="text">{{img.caption.text}}</span>
                    <img :src="img.user.profile_picture" class="user">
                </h3>
                <img :src="get1080(img.images.standard_resolution)" class="img">
            </li>
        </ul>
    </div>
</template>
<style>
    .page-photos h1 {
        color: #546E7A;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }


    .page-photos .images {
        overflow: hidden;
        margin: 0 auto 2rem;
    }

    .page-photos .images .image {
        position: relative;
        margin: 0 auto 2rem;
    }

    .page-photos .images .image:last-child {
        position: relative;
        margin: 0 auto;
    }

    .page-photos .images .image .img {
        width: 100%;
    }

    .page-photos .images .image .caption {
        font-size: 2rem;
        padding: 0.5rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: white;
    }

    .page-photos .images .image .caption .text {
        display: block;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    }

    .page-photos .images .image .caption .location {
        font-size: 1rem;
        display: block;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    }

    .page-photos .images .image .caption .user {
        margin: 1rem 0 0;
        width: 5rem;
        border-radius: 100%;
        box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 992px) {
        .page-photos h1 {
            font-size: 12rem;
        }
    }

    @media (min-width: 992px) {
        .page-photos .images {
            width: 480px;
            margin: 2rem auto;
        }

        .page-photos .images.x2 {
            width: 640px;
        }

        .page-photos .images.x3 {
            width: 1080px;
        }
    }

</style>
<script type="text/ecmascript-6">

    import Zoom from "./Zoom.vue";
    import store from "../store";

    export default {
        components: {
            "zoom": Zoom
        },
        data() {
            return {
                feed: {},
            };
        },
        computed: {
            zoom: () => store.state.photos_zoom
        },
        methods: {
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

            document.body.className = "page-photos";

            window._biParse = this.parse;

            let token = this.$store.state.access_token,
                    script = document.createElement("script"),
                    header = document.getElementsByTagName("head");
            script.src = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&scope=basic,public_content&callback=_biParse`;
            header[0].appendChild(script);
        }
    }
</script>
