import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from './Home.vue'
import Search from './Search.vue'
import SearchForm from './SearchForm.vue'
import Weather from './Weather.vue'
import WeatherDetail from './WeatherDetail.vue'

window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};


const routes = [
  { path: '/', component: Home },  
  { path: '/weather/:woeid', component: WeatherDetail,  props: true },
  { path: '/search/:keyword', component: Search,  props: true , name : 'search' }
];


const router = new VueRouter({
  routes
});


const vm = new Vue({
  
  router,

  components: {SearchForm}

}).$mount('#app');