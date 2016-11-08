<template>
    <div>
        <div class="logout">
            <a v-on:click.stop.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<style>

    .logout {
        position: absolute;
        color: #00e971;
        margin: 2rem;
        top: 0;
        right: 0;
        font-size: 1.4rem;
    }

    .logout a {
        cursor: pointer;
    }

    @media (min-width: 992px) {

    }

</style>

<script type="text/ecmascript-6">
    export default {
        methods: {
            logout(){
                ga('send', 'event', {
                    eventCategory: 'Logout Link',
                    eventAction: 'click',
                    eventLabel: ''
                });
                this.$router.push("logout");
            },
        }
    }
</script>
