import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(Element);

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')