import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 

import App from './App.vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
