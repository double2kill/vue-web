import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/element.js'
import Form from './components/Form'
import Table from './components/Table'

Vue.config.productionTip = false

const routes = [{
    path: '/form',
    component: Form
  },
  {
    path: '/table',
    component: Table
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  template: `
  <div>
    <p>
      <router-link to="/form">Go to Form</router-link>
      <router-link to="/table">Go to Table</router-link>
    </p>
    <router-view class="view"></router-view>
  </div>
  `
}).$mount('#app')