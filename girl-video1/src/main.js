import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios.interceptors.request.use((config) => {// 获取token
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(Element);

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')