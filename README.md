# on-page

A router for web components. Render a template when the page matches a route. When you're on a page. That's it.

## Example

This example uses [Bram](https://github.com/matthewp/bram) templates to pass the pages `params` to a few components. Support for other templating engines is coming soon.

```html
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
