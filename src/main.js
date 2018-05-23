// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import axios from 'axios'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import 'animate.css'  //全局引用css

Vue.prototype.$http = axios  //全局使用axios

router.afterEach((to, from) => { //监听页面路由发生变化
    let path = to.path
    console.log(path)
})

Vue.config.productionTip = false //关闭生产模式下给出的提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
