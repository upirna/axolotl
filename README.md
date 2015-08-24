# Dashboarder breaths fast

- Less Backbone on Coffee
- No backend communication
- [Dashboard backbone conventions](doc/backbone_conventions.md)
- [Dashboard testing conventions](doc/testing_conventions.md)

```sh
npm install
npm start
open http://localhost:8080/
```

For details look into `package.json` `scripts`.

## Why?

- we can play with new stuff faster
- try leaner; less Backbone inheritance
- change / simplify build process

Now edit newly created `index.html` and `package.json` scripts.

## Deploy to Github pages

```sh
./deploy-to-gh-pages
```

Open on [Gihtub](http://celtra.github.io/dashboarder/public/audience_builder/)

## Deploy to `mab` (assumption that you have `mab` in same directory as `dashboarder`)

```sh
./deploy-to-mab
```
