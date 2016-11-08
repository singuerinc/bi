<template>
    <div>
        <h1>Bi</h1>
        <h2>Your Instagram™ feed, but bigger!</h2>
        <zoom></zoom>
        <ul class="images" v-bind:class="zoom" v-cloak>
            <li v-for="img in feed.data" class="image">
                <div class="caption">
                    <span v-if="img.location" class="location">{{img.location.name}}</span>
                    <span v-if="img.caption" class="text">{{img.caption.text}}</span>
                    <img :src="img.user.profile_picture" class="user">
                </div>
                <img :src="img.images.standard_resolution.url" class="img">
            </li>
        </ul>
    </div>
</template>
<style>
    .page-photos h1 {
        color: #00e971;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    .page-photos h2 {
        color: #777;
        font-size: 1.5rem;
        margin: 1rem auto 2rem;
        font-weight: normal;
        text-align: center;
    }

    .page-photos .images {
        list-style: none;
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
        display: none;
        font-size: 2rem;
        font-weight: bold;
        padding: 0.5rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #212121;
    }

    .page-photos .images .image .caption .text {
        display: block;
    }

    .page-photos .images .image .caption .location {
        font-size: 1rem;
        display: block;
    }

    .page-photos .images .image .caption .user {
        display: none;
        margin: 1rem 0 0;
        width: 5rem;
        border-radius: 100%;
        box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 992px) {
        .page-photos h1 {
            font-size: 12rem;
        }

        .page-photos .images {
            width: 64rem;
            margin: 2rem auto;
        }

        .page-photos .images .image {
            border: 2rem solid white;
            box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
        }


        .page-photos .images.x2 {
            width: 108rem;
        }

        .page-photos .images.x3 {
            width: 128rem;
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
        computed: {
            zoom: () => store.state.feed_zoom,
            feed: () => store.state.feed
        },
        created() {

            document.body.className = "page-photos";

            window._biParse = (data) => store.dispatch('PARSE_FEED', data);

            let token = this.$store.state.access_token,
                    script = document.createElement("script"),
                    header = document.getElementsByTagName("head");
            script.src = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&scope=basic,public_content&callback=_biParse`;
            header[0].appendChild(script);
        }
    }
</script>
