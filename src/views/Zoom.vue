<template>
    <ul ref="zoom" class="zoom">
        <li><a class="x1" v-bind:class="{active: zoom == 'x1'}" v-on:click.stop.prevent="setZoom(1)"></a></li>
        <li><a class="x2" v-bind:class="{active: zoom == 'x2'}" v-on:click.stop.prevent="setZoom(2)"></a></li>
        <li><a class="x3" v-bind:class="{active: zoom == 'x3'}" v-on:click.stop.prevent="setZoom(3)"></a></li>
    </ul>
</template>
<style>
    .page-photos .zoom {
        margin: 0 2rem 2rem 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .page-photos .zoom li {
        display: inline-block;
    }

    .page-photos .zoom li a {
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

    .page-photos .zoom li a.x1 {
        width: 24px;
        height: 24px;
        background: url(../img/ic_image_black_24px.svg);
    }

    .page-photos .zoom li a.x2 {
        width: 32px;
        height: 32px;
        background: url(../img/ic_image_black_24px.svg);
    }

    .page-photos .zoom li a.x3 {
        width: 48px;
        height: 48px;
        background: url(../img/ic_image_black_24px.svg);
    }

    .page-photos .zoom li a.active {
        opacity: 1;
        pointer-events: none;
    }
</style>
<script type="text/ecmascript-6">

    import store from "../store";

    export default {
        computed: {
           zoom: () => store.state.feed_zoom
        },
        methods: {
            setZoom(zoom){
                zoom = Math.max(0, Math.min(zoom, 3));
                store.commit("SET_PHOTOS_ZOOM", `x${zoom}`);
                ga('send', 'event', {
                    eventCategory: 'Zoom Click',
                    eventAction: 'click',
                    eventLabel: store.state.feed_zoom
                });
            }
        }
    }
</script>
