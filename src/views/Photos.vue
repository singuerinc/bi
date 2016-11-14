<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="Photos">
        <h1>Bi</h1>
        <h2>Your Instagram™ feed, but bigger!</h2>
        <logout/>
        <zoom/>
        <ul class="images" v-bind:class="zoom" v-cloak>
            <li v-for="img in feed.data" class="image">
                <div class="caption">
                    <span v-if="img.location" class="location">{{img.location.name}}</span>
                    <span v-if="img.caption" class="text">{{img.caption.text}}</span>
                    <img :src="img.user.profile_picture" class="user" src="">
                </div>
                <img :src="img.images.standard_resolution.url" class="img">
            </li>
        </ul>
        <div class="pagination">
            <a class="u-btn more-btn" v-show="feed.pagination.next_url" v-on:click.stop.prevent="nextPage()">More</a>
        </div>
        <footer>
            <a href="policy.html" target="_parent">Terms of Service and Privacy Policy</a>
        </footer>
    </div>
</template>

<style>

:root {
  --bi-green: #00e971;
  --bi-black: #212121;
}

.Photos {
    text-align: center;

    & h1 {
        color: var(--bi-black);
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        margin: 2rem auto 1rem auto;
        padding: 0 1.2rem;
        background-color: var(--bi-green);
    }

    & h2 {
        color: #777;
        font-size: 1.5rem;
        margin: 1rem auto 2rem;
        font-weight: normal;
        text-align: center;
    }

    & .images {
        list-style: none;
        margin: 0 auto 2rem;

        & .image {
            position: relative;
            margin: 0 auto 2rem;

            &:last-child {
                position: relative;
                margin: 0 auto;
            }

            & .img {
                width: 100%;
            }

            & .caption {
                display: none;
                font-size: 2rem;
                font-weight: bold;
                padding: 0.5rem;
                position: absolute;
                top: 1rem;
                left: 1rem;
                color: #212121;

                & .text {
                    display: block;
                }

                & .location {
                    font-size: 1rem;
                    display: block;
                }

                & .user {
                    display: none;
                    margin: 1rem 0 0;
                    width: 5rem;
                    border-radius: 100%;
                    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
                }
            }
        }
    }

    & footer {
        display: block;
        text-align: center;
        font-size: 1.2rem;
        padding: 3rem;

        & a {
            color: white;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    & .pagination {
        display: block;
        text-align: center;

        & .more-btn {
            margin: 2rem;
        }
    }
}

.page-photos {
    transition: background-image 1.5s ease-in-out;
    background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
}

@media (min-width: 992px) {
.Photos {

    & h1 {
        font-size: 12rem;
        padding: 0 2rem;
    }

    & .images {
        width: 64rem;
        margin: 2rem auto;

        &.x2 {
            width: 108rem;
        }

        &.x3 {
            width: 128rem;
        }

        & .image {
            border: 2rem solid white;
            box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
        }
    }
}
}

</style>
<script type="text/ecmascript-6">

    import Logout from "./Logout.vue";
    import Zoom from "./Zoom.vue";
    import store from "../store";

    export default {
        components: {
            "logout": Logout,
            "zoom": Zoom
        },
        computed: {
            zoom: () => store.state.feedZoom,
            feed: () => store.state.feed
        },
        methods: {
            loadPage(url){
                window._biParse = (data) => store.dispatch('PARSE_FEED', data);

                let script = document.createElement("script"),
                        header = document.getElementsByTagName("head");
                script.src = url;
                header[0].appendChild(script);
            },
            nextPage(){
                this.loadPage(this.$store.state.feed.pagination.next_url);
            }
        },
        created() {
            document.body.className = "page-photos";

            let token = this.$store.state.accessToken;

            this.loadPage(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&scope=basic,public_content&callback=_biParse`);
        }
    }
</script>
