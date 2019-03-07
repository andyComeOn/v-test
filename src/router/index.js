import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/views/Login/Login'
import NoFound from '@/views/NoFound'

import LayoutOne from '@/views/LayoutOne'
import LayoutTwo from '@/views/LayoutTwo'


// component: () => import('@/views/Login/')
// component: () => import('@/views/NoFound')



Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: () => import('@/views/NoFound'), hidden: true }
] 

export default new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  // mode: 'history'
})

export const asyncRouterMap = [
  {
    path: '/', 
    redirect: '/guest',
    name: 'shouye', 
    component: LayoutOne,
    children: [
      {
        path: '/guest',
        name: 'guest',
        meta: {
          title: '在住客人列表'
        },
        component: () => import('@/views/Guest/Guest'),
      },
      {
        path: '/business-manage',
        name: 'businessManage',
        meta: {
          title: '营业管理'
        },
        redirect: '/business-manage/room-state',
        component: {render (c) { return c('router-view') }},
        children: [
          {
            path: 'room-state',
            name: 'roomState',
            meta: {
              title: '房态'
            },
            component: () => import('@/views/RoomState/RoomState'),
          },
          {
            path: 'book-manage',
            name: 'bookManage',
            meta: {
              title: '预定管理'
            },
            component: () => import('@/views/BookManage/BookManage'),
          },
        ]
      }

    ]
  }
]
