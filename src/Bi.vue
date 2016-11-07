<style>

[v-cloak] {
	visibility: hidden;
}

* {
	margin: 0;
	padding: 0;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
}

img {
	vertical-align: top;
}

html {
	font-size: 10px;
}

html, body {
	background-color: #ECEFF1;
	height: 100%;
}

body {
	font-family: -apple-system, BlinkMacSystemFont,
	"Segoe UI", "Roboto", "Oxygen",
	"Ubuntu", "Cantarell", "Fira Sans",
	"Droid Sans", "Helvetica Neue", sans-serif;
	font-size: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.zoom {
	display: none;
	margin: 0 2rem 2rem 0;
	text-align: center;
	position: fixed;
	bottom: 0;
	right: 0;
}

.zoom.hide {
	display: none;
}

.zoom li {
	display: inline-block;
}

.zoom li a {
	color: #78909C;
	font-size: 3rem;
	font-weight: lighter;
	text-decoration: none;
	margin: 0 0 0 0.5rem;
	transition: opacity 0.2s;
	opacity: 0.3;
	cursor: pointer;
    display: block;
	vertical-align: bottom;
}

.zoom li a.x1 {
	width: 24px;
	height: 24px;
	background: url(img/ic_image_black_24px.svg);
}

.zoom li a.x2 {
	width: 32px;
	height: 32px;
	background: url(img/ic_image_black_24px.svg);
}

.zoom li a.x3 {
	width: 48px;
	height: 48px;
	background: url(img/ic_image_black_24px.svg);
}

.zoom li a.active {
	opacity: 1;
	pointer-events: none;
}

.images {
	overflow: hidden;
	margin: 0 auto 2rem;
}

.images .image {
	position: relative;
	margin: 0 auto 2rem;
}

.images .image:last-child {
	position: relative;
	margin: 0 auto;
}

.images .image .img {
	width: 100%;
}

.images .image .caption {
	font-size: 2rem;
	padding: 0.5rem;
	position: absolute;
	top: 1rem;
	left: 1rem;
	color: white;
}

.images .image .caption .text {
	display: block;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.images .image .caption .location {
	font-size: 1rem;
	display: block;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.images .image .caption .user {
	margin: 1rem 0 0;
	width: 5rem;
	border-radius: 100%;
	box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
}

footer {
	display: block;
	text-align: center;
	padding: 3rem 0 5rem;
	font-size: 1.2rem;
	position: absolute;
	bottom: 0;
	width: 100%;
}

.app-mode footer {
	position: relative;
	bottom: auto;
}

footer a {
	color: white;
	text-decoration: none;
}

.app-mode footer a {
	color: #37474F;
}
</style>

<template>
    <div id="bi">
        <router-view></router-view>


        <ul ref="zoom" class="zoom hide">
            <li>
                <a class="x1" v-bind:class="{active: zoom == 'x1'}" v-on:click="setZoom(1)"></a>
            </li>
            <li>
                <a class="x2" v-bind:class="{active: zoom == 'x2'}" v-on:click="setZoom(2)"></a>
            </li>
            <li>
                <a class="x3" v-bind:class="{active: zoom == 'x3'}" v-on:click="setZoom(3)"></a>
            </li>
        </ul>

        <ul class="images" v-bind:class="zoom" v-cloak>
            <li v-for="img in feed.data" class="image">
                <h3 class="caption">
                    <span v-if="img.location" class="location">{{img.location.name}}</span>
                    <span v-if="img.caption" class="text">{{img.caption.text}}</span>
                    <!--<img :src="img.user.profile_picture" class="user">-->
                </h3>
                <img :src="get1080(img.images.standard_resolution)" class="img">
            </li>
        </ul>

        <footer>
            <p><a href="policy.html" target="_parent">Terms of Service and Privacy Policy</a></p>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "Bi",
        data() {
            return {
                feed: {},
                zoom: "x2"
            };
        },
        methods: {
            setZoom(zoom){
                zoom = Math.max(0, Math.min(zoom, 3));
                this.zoom = `x${zoom}`;
                ga('send', 'event', {
                    eventCategory: 'Zoom Click',
                    eventAction: 'click',
                    eventLabel: this.zoom
                });
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

            // try {
            //     history.pushState("", document.title, window.location.pathname);
            // } catch (e) {
            // }

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
    }
</script>
