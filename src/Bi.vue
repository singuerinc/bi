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
    background-color: #212121;
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

.u-btn {
    color: #212121;
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
    background-color: #00e971;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: color 0.4s, background-color 0.5s;
    border: 1px solid transparent;

    &:hover {
        color: #00e971;
        background-color: #212121;
        border: 1px solid #00e971;
    }
}



@media (min-width: 544px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

</style>

<template>
    <div id="bi">
        <router-view></router-view>
    </div>
</template>