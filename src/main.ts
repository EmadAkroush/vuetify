import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from '../src/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'
import Routes from '../src/router/index'



Vue.use(VueCompositionAPI)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : Routes
})



const app = createApp({
  vuetify,
  pinia: createPinia(),
  router:router,
  render: () => h(App),
  
})

app.use(PiniaVuePlugin)

app.mount('#app')
function createWebHistory() {
  throw new Error('Function not implemented.')
}

