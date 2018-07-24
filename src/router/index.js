import Vue from 'vue'
import Router from 'vue-router'
import zHome from '@/components/container/home'
import dashboard from '@/components/page/dashboard'
import basicechart from '@/components/page/basicechart'
import todolist from '@/components/component/todolist'
import tables from '@/components/page/tables'
import formlayouts from '@/components/page/formlayouts'
import formInput from '@/components/page/formInput'
// 用户页面start
import notFind from '@/components/userpage/notFind'
import error from '@/components/userpage/error'
import forget from '@/components/userpage/forget'
import login from '@/components/userpage/login'
import reg from '@/components/userpage/reg'
// 用户页面end

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'zHome',
      component: zHome,
      children: [
        {
          path: '',
          component: dashboard
        },
        {
          path: '/dashboard',
          component: dashboard
        },
        {
          path: '/basicechart',
          component: basicechart
        },
        {
          path: '/todolist',
          component: todolist
        },
        {
          path: '/tables',
          component: tables
        },
        {
          path: '/formlayouts',
          component: formlayouts
        },
        {
          path: '/formInput',
          component: formInput
        }
      ]
    },
    // 用户页面start
    {
      path: '/notFind',
      component: notFind
    },
    {
      path: '/error',
      component: error
    },
    {
      path: '/forget',
      component: forget
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/reg',
      component: reg
    }
    // 用户页面end
  ]
})
