<template>
    <div class="Login">
        <h1>Bi
            <small>by singuerinc</small>
        </h1>
        <h2>Your Instagram™ feed,<br>but bigger!</h2>

        <a class="login-btn u-btn" v-on:click.stop.prevent="login">Login</a>
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

    & h1 {
        color: var(--bi-black);
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        margin: 0;

        & small {
            font-size: 0.2em;
            font-weight: lighter;
            display: block;
        }
    }

    & h2 {
        color: var(--bi-black);
        font-size: 1.5rem;
        margin: 1rem auto;
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

<script type="text/ecmascript-6">
    export default {
        methods: {
            login(){
                const redirect_uri = location.origin + "/";
                ga('send', 'event', {
                    eventCategory: 'Login Link',
                    eventAction: 'click',
                    eventLabel: redirect_uri
                });
                location.href = `https://api.instagram.com/oauth/authorize/?client_id=cee9bf3af8b9426ca0fbe927aaa4b785&redirect_uri=${redirect_uri}&response_type=token`;
            },
        },
        created() {
            document.body.className = "page-login";
        }
    }
</script>
