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
  <el-container>
    <el-header>
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/form">Form</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/table">Table</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
    </el-main>
  </el-container>
  `
}).$mount('#app')