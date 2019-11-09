import Vue from 'vue'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

const socket = io('<%= options.url %>', {
  autoConnect: <%= Boolean(options.autoConnect) %>
})

export default async (context) => {
  if(process.browser) {
    Vue.use(VueSocketIOExt, socket, context.store)

    /**
     * This allows us to open the socket manually once it's loaded
     * Using nuxt-init-client-module should also be possible, however,
     * the order in which nuxt loads the modules is somehow a bit buggy.
     * Resulting in nuxtInitClient being loaded before this module, which
     * means the socket isn't yet loaded.
     */
    await context.store.dispatch('<%= options.action %>', context)
  }
}
