<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="Login">
        <h1>Bi</h1>
        <h2>Your Instagram™ feed,<br>but bigger!</h2>

        <a class="login-btn u-btn" v-on:click.stop.prevent="login">Sign in with Instagram</a>

        <a class="policy-btn" href="policy.html" target="_parent">Terms of Service and Privacy Policy</a>
    </div>
</template>

<style>

:root {
  --bi-green: #00e971;
  --bi-black: #212121;
}

.page-login {
    transition: background-image 1.5s ease-in-out;
    background-image: url(../img/rails.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 40%;
}

.Login {
    text-align: center;
    background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 75%);

    & h1 {
        color: var(--bi-black);
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        margin: 2rem auto 1rem auto;
        padding: 0 1.2rem;
        background-color: var(--bi-green);

        & small {
            font-size: 0.125em;
            font-weight: lighter;
            display: block;
        }
    }

    & h2 {
        color: var(--bi-black);
        font-size: 1.5rem;
        margin: 2rem auto;
        font-weight: normal;
        text-align: center;
    }

    & h3 {
        color: var(--bi-black);
        font-size: 1.4rem;
        margin: 1rem 2rem;
        font-weight: normal;
        text-align: center;
    }

    & .login-btn {
        border: 0 solid transparent;
        margin: 0 auto 1rem;
    }

    & .policy-btn {
        display: block;
        color: var(--bi-black);
        text-decoration: none;
        text-align: center;
        font-size: 1.2rem;
        width: 100%;
    }

    @media (min-width: 992px) {
        & h1 {
            font-size: 12rem;
            padding: 0 2rem;
            small {
                font-size: 0.12em;
                display: block;
            }
        }

        & h2 {
            font-size: 3rem;
        }
    }
}

</style>

<script type="ts">
    import anime from "animejs";

    export default {
        methods: {
            login(){
                const redirect_uri = location.origin + "/";
                ga('send', 'event', {
                    eventCategory: 'Login Link',
                    eventAction: 'click',
                    eventLabel: redirect_uri
                });
                //location.href = `https://api.instagram.com/oauth/authorize/?client_id=cee9bf3af8b9426ca0fbe927aaa4b785&redirect_uri=${redirect_uri}&response_type=token`;
                location.href = `https://api.instagram.com/oauth/authorize/?client_id=4c5d6651ea4a495f866cc256dcc5f87b&redirect_uri=${redirect_uri}&response_type=token`;
            }
        },
        created() {
            document.body.className = "page-login";
        },
        mounted() {
            anime({
                targets: ["h1", "h2", ".login-btn", "h3", ".policy-btn"],
                opacity: [0, 1],
                translateY: [100, 0],
                duration: 2000,
                delay: (el, i) => i * 100
            });
        }
    }
</script>
