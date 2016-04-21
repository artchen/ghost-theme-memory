# Ghost Theme Typescript

Typescript is a minimal theme for [Ghost](http://ghost.org). I am working on a [Hexo](https://hexo.io/) version, too.

## Production

If you are going to use Typescript directly (without much customization).

```
cd <path-to-ghost-folder>/content/themes/
git clone https://github.com/artchen/ghost-theme-typescript.git typescript
```

This is the version of Typescript used on [otakism.org](http://otakism.org), my blog. There are quite a few things hard-coded into the template that you'll need to customize. Including:

* The site logo: `assets/img/logo.png`
* The short text under the logo: `partials/header.hbs`
* Disqus integration: `page.hbs`, `post.hbs`
* Social account links: `footer.hbs`

The search feature uses [swiftype](https://swiftype.com/). Please follow their instruction to setup your own searches.

The fonts are from [Typekit](https://typekit.com/). If you are not using typekit, please remove corresponding code is in `header.hbs`.


## Development

If you are going to develop your own features/styles/etc upon Typescript, here is how to set up the development environment.

Clone the repository.

```
cd <path-to-ghost-folder>/content/themes/
git clone https://github.com/artchen/ghost-theme-typescript.git typescript
```

Install [gulp](http://gulpjs.com/), [bower](http://bower.io/) and [npm](https://www.npmjs.com/) before proceed.

Install the app:

```
cd ./typescript
npm install
bower install
```

At this point your development environment is ready.

## Update

```
cd <path-to-ghost>/content/themes/typescript/
git pull
```

## Demo

Visit my blog (in Chinese) for a demo of tis theme. [http://otakism.org](http://otakism.org).

## Copyright

Public resources used in this theme:

* [icomoon](https://icomoon.io/)
* [normalize.css](https://necolas.github.io/normalize.css/)

Copyright © Art Chen

Please do not remove the "Theme Typescript designed by Hermit" text and links.

请不要删除页面底部的作者信息和链接。






