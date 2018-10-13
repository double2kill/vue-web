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
      <el-menu default-active="/form" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/form">
          Form
        </el-menu-item>
        <el-menu-item index="/table">
          Table
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
    </el-main>
  </el-container>
  `,
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        path: key
      })
    }
  }
}).$mount('#app')