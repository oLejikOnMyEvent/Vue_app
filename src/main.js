// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  VueRouter from 'vue-router'
import todolist from './components/todolist'
import  filter from './components/filter'
import about from './components/about'
import hello from './components/hello'



Vue.use(VueRouter);

const routes = [
  {path: '/', component:hello},
  {path: '/about', component: about},
  {path: '/todolist', component: todolist},
  {path: '/filter', component: filter}
  ];

const router = new VueRouter({
  routes,
});
//const userData = require('countries.json');

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');

