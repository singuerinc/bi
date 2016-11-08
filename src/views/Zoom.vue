<template>
    <ul ref="zoom" class="zoom">
        <li><a class="x1" v-bind:class="{active: zoom == 'x1'}" v-on:click="setZoom(1)"></a></li>
        <li><a class="x2" v-bind:class="{active: zoom == 'x2'}" v-on:click="setZoom(2)"></a></li>
        <li><a class="x3" v-bind:class="{active: zoom == 'x3'}" v-on:click="setZoom(3)"></a></li>
    </ul>
</template>
<style>

</style>
<script type="text/ecmascript-6">

    import store from "../store";

    export default {
        computed: {
           zoom: () => store.state.photos_zoom
        },
        methods: {
            setZoom(zoom){
                zoom = Math.max(0, Math.min(zoom, 3));
                store.commit("SET_PHOTOS_ZOOM", `x${zoom}`);
                ga('send', 'event', {
                    eventCategory: 'Zoom Click',
                    eventAction: 'click',
                    eventLabel: this.zoom
                });
            }
        }
    }
</script>
