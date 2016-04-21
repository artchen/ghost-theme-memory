# Ghost Theme Typescript

**Typescript** is a minimal theme for [Ghost](http://ghost.org). I am working on a [Hexo](https://hexo.io/) version, too.

**Typescript**是一套极简主题，适用于[Ghost](http://ghost.org)。我正在制作适用[Hexo](https://hexo.io/)的版本。

## Production

If you are going to use **Typescript** directly, all you need is to clone this repository into the `content/themes` directory of your ghost blog.

Please keep in mind that this repository is the version of **Typescript** used on [otakism.org](http://otakism.org), my blog. There are quite a few things hard-coded into the template that you'll need to customize. Including:

* The site logo is located in `assets/img/logo.png`. Replace it with your own logo.
* Blog description, the short text under the logo, is hard-coded in `partials/header.hbs`. Replace it with yours.
* For my blog, I used [Typekit](https://typekit.com/) for web fonts. If you are not using typekit, please remove corresponding code is in `header.hbs`.
* Disqus integration in both `page.hbs` and `post.hbs`. Replace the url with yours.
* Social account links in `footer.hbs`. Replace with your SNS accounts.
* The search feature uses [swiftype](https://swiftype.com/). Please follow their instruction to setup searches.

Also, for Disqus integration and swiftype integration, you also need to inject their javascript codes using ghost Code Injection. It is accessible via `<your domain>/ghost/settings/code-injection/`.

如果你想直接使用，直接克隆这个仓库到ghost的`content/themes` 目录即可。

因为这个仓库中的主题原封不动是我的博客[宅谈](http://otakism.org)使用的版本，所以其中有一些直接写死的东西。在使用本主题前，用户应当手动做以下修改：

* 更换logo。路径: `assets/img/logo.png`。
* 更换博客说明。路径: `partials/header.hbs`。
* 我使用了Adobe Typekit提供的英文字体。如果你不用他们的服务，请在`partials/header.hbs`中删除相关代码。
* 更换Disqus集成。路径: `page.hbs`, `post.hbs`。
* 更换社交网站链接。路径: `footer.hbs`。
* 搜索功能使用[swiftype](https://swiftype.com/)实现。请自行注册并按照他们官方的教程来配置。

Disqus和Swiftype的集成需要一些嵌入一些javascript到ghost_foot，这不需要修改源代码，可以直接在ghost code injection里操作。路径：`<your domain>/ghost/settings/code-injection/`。

## Development

If you are going to develop your own features/styles/etc upon **Typescript**, you may want to set up the development environment.

如果你想自定义和拓展本主题，你可能需要配置开发环境。

I assume you already have a Ghost blog installed. Clone this repository into the `themes` folder.

克隆本仓库到`themes`。这一步和production相同。

```
cd <path-to-ghost-folder>/content/themes/
git clone https://github.com/artchen/ghost-theme-typescript.git typescript
```

**Typescript** is developed with the help of [gulp](http://gulpjs.com/), [bower](http://bower.io/) and [npm](https://www.npmjs.com/) to work. Please make sure you have all these dependencies installed on your machine before proceed.

我用到了[gulp](http://gulpjs.com/)，[bower](http://bower.io/)和[npm](https://www.npmjs.com/)来帮助开发这个主题。请安装这三样工具。

```
cd ./typescript
npm install
bower install
```

At this point your development environment is ready.

配置完成。

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






