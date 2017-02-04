<template>
    <div class="Logout">
        <a v-on:click.stop.prevent="logout">Logout</a>
    </div>
</template>

<style>

:root {
  --bi-green: #00e971;
}

.Logout {
    position: absolute;
    color: var(--bi-green);
    margin: 2rem;
    top: 0;
    right: 0;
    font-size: 1.4rem;

    & a {
        cursor: pointer;
    }
}

</style>

<script type="text/javascript">
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
