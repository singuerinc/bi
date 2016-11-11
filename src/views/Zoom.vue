<template>
    <ul class="Zoom" ref="zoom">
        <li><a class="x1" v-bind:class="{active: zoom == 'x1'}" v-on:click.stop.prevent="setZoom(1)"> </a></li>
        <li><a class="x2" v-bind:class="{active: zoom == 'x2'}" v-on:click.stop.prevent="setZoom(2)"> </a></li>
        <li><a class="x3" v-bind:class="{active: zoom == 'x3'}" v-on:click.stop.prevent="setZoom(3)"> </a></li>
    </ul>
</template>

<style>

.Zoom {
    display: none;
    margin: 0 2rem 2rem 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;

    & li {
        display: inline-block;

        & a {
            margin: 0 0 0 0.5rem;
            transition: opacity 0.2s;
            opacity: 0.3;
            cursor: pointer;
            display: block;
            vertical-align: bottom;

            &.x1 {
                width: 18px;
                height: 18px;
                background: url(../img/ic_image_black_24px.svg);
            }

            &.x2 {
                width: 27px;
                height: 27px;
                background: url(../img/ic_image_black_24px.svg);
            }

            &.x3 {
                width: 36px;
                height: 36px;
                background: url(../img/ic_image_black_24px.svg);
            }

            &.active {
                opacity: 1;
                pointer-events: none;
            }
        }
    }
}

@media (min-width: 992px) {
    .Zoom {
        display: block;
    }
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
