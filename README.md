# on-page

A router for web components. Render a template when the page matches a route. When you're on a page. That's it.

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/matthewp/on-page)
[![build status](https://img.shields.io/travis/matthewp/on-page/master.svg?style=flat-square)](https://travis-ci.org/matthewp/on-page)
[![npm version](https://img.shields.io/npm/v/on-page.svg?style=flat-square)](https://www.npmjs.com/package/on-page)



## Example

This example uses [Bram](https://github.com/matthewp/bram) templates to pass the pages `params` to a few components. Support for other templating engines is coming soon.

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="./on-page.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/users/14">Matthew</a></li>
  </ul>
</nav>

<on-page route="/" default>
  <template>
    <home-page :params="{{params}}"></home-page>
  </template>
</on-page>
<on-page route="/about">
  <template>
    <about-page></about-page>
  </template>
</on-page>
<on-page route="/users/:id">
  <template>
    <user-page :params="{{params}}"></user-page>
  </template>
</on-page>

<template id="home-template">
  <h1>Home</h1>

  <p>This is home! Welcome!</p>
</template>
<template id="about-template">
  <h1>About</h1>

  <p>This is about this page!</p>
</template>
<template id="user-template">
  <h1>User</h1>
  <h2>Name</h2>

  <p>Welcome {{id}}, this is kind of cool</p>
</template>

<script>
  [
    ['home-page', '#home-template'],
    ['about-page', '#about-template'],
    ['user-page', '#user-template']
  ].forEach(([tagName, template]) => {
    class Page extends Bram.Element {
      get template() {
        return template;
      }
    }

    customElements.define(tagName, Page);
  });
</script>
```

## Install

On **npm**

```shell
npm install on-page --save
```

On **Bower**

```shell
bower install on-page2 --save
```

## License

BSD 2 Clause
