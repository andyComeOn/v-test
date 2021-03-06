// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './icons'
import './mock/mock'
import './permission'

Vue.use(iView)
Vue.config.productionTip = false

import { getCookie, setCookie } from "@/utils/util";
setCookie("userInfoTel", "1");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
