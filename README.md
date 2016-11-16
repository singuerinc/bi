# Bi

![Bi](https://dl.dropboxusercontent.com/u/311265/bi/bi-200x200.png)

Bi is a personal experiment. Is a website that displays images from your Instagram™, but bigger!

The idea behind it is to test technologies like Vue.js, webpack, Docker, PostCSS and yarn among others.

![Bi frontend](https://dl.dropboxusercontent.com/u/311265/bi/screenshot.png)

## Run

```bash
docker-compose up -d
open http://localhost:8080/
```

## Build

```bash
docker-compose exec app yarn run build
open ./public
```