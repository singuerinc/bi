<template>
    <div>
        <h1>Bi
            <small>by singuerinc</small>
        </h1>
        <h2>Your Instagram™ feed,<br>but bigger!</h2>

        <div ref="login" class="login">
            <a class="login-btn" v-on:click.stop.prevent="login">Login</a>
            <a class="policy-btn" href="policy.html" target="_parent">Terms of Service and Privacy Policy</a>
        </div>
    </div>
</template>

<style>

    .page-login {
        transition: background-image 1.5s ease-in-out;
        background-image: url(../img/rails.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 40%;
    }

    .page-login .login {
        position: relative;
        width: 85vw;
        text-align: center;
        color: #607D8B;
        margin: 2rem auto 0;
        transition: color 1s;
    }

    .page-login h1 {
        color: #212121;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    .page-login h1 small {
        font-size: 0.2em;
        font-weight: lighter;
        display: block;
    }

    .page-login h2 {
        color: #212121;
        font-size: 1.5rem;
        margin: 1rem auto 2rem;
        font-weight: normal;
        text-align: center;
    }

    .page-login .login .login-btn {
        color: #212121;
        font-size: 2rem;
        margin: 2rem;
        display: inline-block;
        text-decoration: none;
        background-color: #00e971;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: all 0.5s;
    }

    .page-login .login .login-btn:hover {
        color: #00e971;
        background-color: #212121;
    }

    .page-login .login .policy-btn {
        display: block;
        color: #212121;
        text-decoration: none;
        text-align: center;
        font-size: 1.2rem;
        width: 100%;
    }

    @media (min-width: 544px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

        .page-login h1 {
            font-size: 12rem;
        }

        .page-login h1 small {
            font-size: 0.12em;
            display: block;
        }

        .page-login h2 {
            font-size: 3rem;
        }
    }

    @media (min-width: 1200px) {
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
