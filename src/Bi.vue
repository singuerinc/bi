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


footer {
	display: block;
	text-align: center;
	padding: 3rem 0 5rem;
	font-size: 1.2rem;
	position: absolute;
	bottom: 0;
	width: 100%;
}

.page-photos footer {
	position: relative;
	bottom: auto;
}

footer a {
	color: white;
	text-decoration: none;
}

footer a {
	color: #37474F;
}

/* Small devices (landscape phones, 544px and up)*/
@media (min-width: 544px) {

}

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {

}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {

	.zoom {
		display: block;
	}

}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
	footer a {
		color: #37474F;
		text-decoration: none;
	}
}

</style>

<template>
    <div id="bi">
        <router-view></router-view>

        <footer>
            <p><a href="policy.html" target="_parent">Terms of Service and Privacy Policy</a></p>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {

    }
</script>
