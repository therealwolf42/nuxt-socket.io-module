const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-socket.io-module'],
    ...moduleOptions
  }

  if (!Object.keys(options).includes('autoConnect')) {
    options.autoConnect = true
  }

  if (!Object.keys(options).includes('url')) {
    options.url = 'http://localhost:9000'
  }

  if (!Object.keys(options).includes('action')) {
    options.action = 'nuxtSocketReady'
  }

  await this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-socket.io-module.js',
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
