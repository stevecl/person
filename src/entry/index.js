// // import '../assets/style/common';

import '../assets/style/main';
// // console.log('adsasd')

// import '../assets/style/common.less';
import VueRouter from 'vue-router';
import routerConfig from '../service/router/router';
import bus from '../service/bus';
/*global System Vue:true*/
import App from '../view/app';
// const App = require('../view/app.vue').default;
// const App = (resolve)=> {require(['../view/app.vue'], resolve)};

// import bubble_hint from '../view/components/bubble_hint';
// Vue.component('bubbleHint', bubble_hint);
// Vue.component('loading', () => System.import('../view/components/loading'));

import Vue from 'vue';
import axios from 'axios';
window.bus = bus;
Vue.prototype.$http = axios;

Vue.use(VueRouter);
// 创建路由实例
const router = new VueRouter({
  routes: routerConfig
});
window.bus = new Vue();

let vm = new Vue({
  router,
  render: h => h(App)
});
vm.$mount('#app');

setRem();

function setRem() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  var devWidth = height > width ? width : height;
  if (devWidth > 750) devWidth = 750; //取短后是否会大于750
  document.documentElement.style.fontSize = devWidth / (750 / 100) + 'px';
}