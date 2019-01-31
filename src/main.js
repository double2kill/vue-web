import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/element.js'
import Form from './components/Form'
import Table from './components/Table'
import Tabs from "./components/TabsTable/tabs.vue"

Vue.config.productionTip = false

const routes = [{
    path: '/table/:id',
    name: 'table',
    component: Form
  }, {
    path: '/tableAdd',
    component: Form
  },
  {
    path: '/table',
    component: Table
  },
  {
    path: '/tabs',
    component: Tabs
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
      <el-menu :default-active="defaultMenu" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
  data() {
    const {
      path
    } = this.$router.history.current
    return {
      defaultMenu: path
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({
        path: key
      })
    }
  }
}).$mount('#app')