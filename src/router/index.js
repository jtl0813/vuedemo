import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProcessManager from '@/components/ProcessManager'
import LogManager from '@/components/LogManager'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/processmanager',
      name: 'ProcessManager',
      component: ProcessManager
    },
    {
      path: '/logmanager',
      name: 'LogManager',
      component: LogManager
    }
  ]
})
