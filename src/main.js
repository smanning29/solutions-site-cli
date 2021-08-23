import Vue from 'vue'
import App from './App.vue'
import router from './router'
import css from './index.css'

Vue.config.productionTip = false

new Vue({
  router,
  css,
  render: h => h(App)
}).$mount('#app')
