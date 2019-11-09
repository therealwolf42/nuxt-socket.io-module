# nuxt-socket.io-module

Nuxt wrapper around [Vue-Socket.io-Extended](https://github.com/probil/vue-socket.io-extended), an implementation of socket.io into Vue.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> 

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-socket.io-module` dependency to your project

```bash
yarn add nuxt-socket.io-module # or npm install nuxt-socket.io-module
```

2. Add `nuxt-socket.io-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-socket.io-module',

    // With options
    [
      'nuxt-socket.io-module',
      {
        autoConnect: false,
        url: 'http://localhost:9001',
        action: 'nuxtSocketReady'
      },
    ],
  ]
}
```

3. Put your business logic into the vuex action: `nuxtSocketReady` (or choose a custom name), which is called as soon as the module is loaded.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) therealwolf42

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-socket.io-module/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-socket.io-module

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-socket.io-module.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-socket.io-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/

[codecov-src]: https://img.shields.io/codecov/c/github/.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/nuxt-socket.io-module.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-socket.io-module
