import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import server from './server/server'
import api from './server/api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import waterfall from 'vue-waterfall2'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$qs = qs;
Vue.prototype.$axios = server;
Vue.prototype.$api = api;

// Vue.use(waterfall)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

