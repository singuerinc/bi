<template>
    <div>
        <h1>Bi
            <small>by singuerinc</small>
        </h1>
        <h2>Your Instagram feed,<br>but bigger!</h2>

        <div ref="login" class="login">
            <a v-on:click="login">Login</a>
            <p>Log in in order to display your photos.</p>
            <p>Bi does not store any information.</p>
        </div>
    </div>
</template>

<style>

    body {
        background-size: cover;
        background-position-y: 0;
        background-position-x: 50%;
        background: url(../img/rails.jpg) no-repeat;
    }

    .login {
        width: 85vw;
        text-align: center;
        color: #607D8B;
        margin: 2rem auto 0;
        transition: color 1s;
    }

    h1 {
        color: white;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    h1 small {
        font-size: 0.2em;
        font-weight: lighter;
        display: block;
    }

    .app-mode h1 {
        color: #546E7A;
    }


    .app-mode h1 small {
        display: none;
    }

    h2 {
        color: #37474F;
        font-size: 1.5rem;
        margin: 1rem auto 2rem;
        font-weight: normal;
        text-align: center;
    }

    .app-mode h2 {
        display: none;
    }

    .login {
        position: relative;
    }

    .login a {
        color: #CFD8DC;
        font-size: 2rem;
        margin: 2rem;
        display: inline-block;
        text-decoration: none;
        background-color: #37474F;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: all 0.5s;
    }

    .login a:hover {
        color: #37474F;
        background-color: white;
    }

    .login p {
        color: white;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
        font-size: 1.2rem;
        margin: 0;
    }

    .login.hide {
        display: none;
    }

    /* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
	h1 {
		font-size: 12rem;
	}

	h1 small {
		font-size: 0.12em;
		display: block;
	}

	h2 {
		font-size: 3rem;
	}

}

</style>

<script>
    export default{
        methods: {
            login(){
                const redirect_uri = location.origin;
                ga('send', 'event', {
                    eventCategory: 'Login Link',
                    eventAction: 'click',
                    eventLabel: redirect_uri
                });
                location.href = `https://api.instagram.com/oauth/authorize/?client_id=cee9bf3af8b9426ca0fbe927aaa4b785&redirect_uri=${redirect_uri}&response_type=token`;
            },
        }
    }
</script>
