# Ghost Theme Memory

Update: this theme is no longer maintained.

Memory is a minimal theme for [Ghost](https://ghost.org).

This theme is also available on:

Hexo version: [hexo-theme-memory](https://github.com/artchen/hexo-theme-memory)

## Production

If you are going to use Memory directly (without customization).

```
cd <path-to-ghost-folder>/content/themes/
git clone https://github.com/artchen/ghost-theme-memory.git memory
```

Since Memory was a private theme used on [otakism.org](http://otakism.org), my blog, there are quite a lot of things hard-coded into the template that you'll need to change. Here is a checklist for (most of) them:

* Site logo: `assets/img/logo.png`
* Short text under the logo: `partials/header.hbs`
* Social network: `partials/footer.hbs`
* Search integration: support [Google Custom Search Engine](https://cse.google.com), please replace the api key and engine id in `assets/js/app.js` with yours. If you don't intend to use CSE, please set the corresponding option to false.
* Excerpt generation: the theme generates supports `<!--more-->` excerpt with front-end regex. If you don't like this feature, please set the corresponding option to false in `assets/js/app.js`.
* Fonts: the default English fonts are from [Typekit](https://typekit.com/). If you are using Typekit like me, please replace the embedded Javascript code in `default.hbs`, else you can delete the code.
* Disqus integration: I no longer hardcode the integration code into `post.hbs` and `page.hbs`, please copy and paste the following code into Ghost code injection.

```html
<script>  
  (function() {
    var disqus_username = 'YOUR_DISQUS_USERNAME'; // Don't forget to replace
    var d = document, s = d.createElement('script');
    s.src = '//' + disqus_username + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    if ($('body').hasClass('post-template')) {
      (d.head || d.body).appendChild(s);
    }
  })();
</script>  
```

## Development

Clone the repository.

```
cd <path-to-ghost-folder>/content/themes/
git clone https://github.com/artchen/ghost-theme-memory.git memory
```

Install [gulp](http://gulpjs.com/) and [npm](https://www.npmjs.com/) before proceed.

Install and build the app:

```
cd ./memory
npm install
gulp
```

At this point the development environment should be good to go.

## Update

```
cd <path-to-ghost>/content/themes/memory/
git pull
```

## Demo

Please visit my blog (in Chinese) for a demo of this theme. [https://otakism.com](https://otakism.com).

Here is a screenshot for quick preview:

![Memory Demo](https://cdn.otakism.com/assets/hexo-theme-memory/demo/ghost-theme-memory-screenshot.jpg)

## Copyright

Public resources used in this theme:

* [icomoon](https://icomoon.io/)
* [normalize.css](https://necolas.github.io/normalize.css/)

Copyright © Art Chen

Please do not remove the "Theme Memory designed by Art Chen" text and links.

请不要删除页面底部的作者信息和链接。

