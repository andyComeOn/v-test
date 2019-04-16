import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/views/Login/Login'
import NoFound from '@/views/NoFound'

import LayoutOne from '@/views/LayoutOne'
import LayoutTwo from '@/views/LayoutTwo'
import { resolve } from 'path';

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
  linkActiveClass: 'ivu-menu-item-selected',
  routes: constantRouterMap,
  // mode: 'history'
})

export const asyncRouterMap = [
  {
    path: '/', 
    redirect: '/business-manage/room-state',
    name: 'shouye', 
    component: LayoutOne,
    // resolve => require([LayoutOne], resolve),
    meta: {
      title: '首页'
    },
    children: [
      // 在住客人列表（一级）
      {
        path: '/guest',
        name: 'guest',
        meta: {
          title: '在住客人列表'
        },
        component: () => import('@/views/Guest/Guest'),
      },
      // 营业管理
      {
        path: '/business-manage',
        name: 'businessManage',
        meta: {
          title: '营业管理'
        },
        component: { render (c) { return c('router-view') } },
        // component: () => import('<router-view></router-view>'),
        children: [
          {
            path: 'room-state',
            name: 'roomState',
            meta: {title: '房态'},
            component: () => import('@/views/RoomState/RoomState')
          },
          {
            path: 'book-manage',
            name: 'bookManage',
            meta: {
              title: '预定管理'
            },
            component: () => import('@/views/BookManage/BookManage')
          }
        ]
      },
      // 订单
      {
        path: '/order',
        name: 'order',
        meta: {
          title: '订单'
        },
        component: { render (c) { return c('router-view') }},
        children: [
          {
            path: 'order-list',
            // redirect: '/order-list/old-order-list',
            name: 'orderList',
            meta: {
              title: '订单列表'
            },
            component: {render (c) { return c('router-view') }},
            children: [
              {
                path: 'old-order-list',
                name: 'oldOrderList',
                meta: {
                  title: '历史订单列表'
                },
                component: () => import('@/views/Order/OrderList/OldOrderList'),
              },
              {
                path: 'new-order-list',
                name: 'newOrderList',
                meta: {
                  title: '新订单列表'
                },
                component: () => import('@/views/Order/OrderList/NewOrderList'),
              },
            ]
          },
          {
            path: 'order-query',
            name: 'orderQuery',
            meta: {
              title: '订单查询'
            },
            component: () => import('@/views/Order/OrderQuery/OrderQuery'),
          }
        ]
      }
    ]
  },
  {
    path: '/layout2',
    redirect: '/group',
    name: 'shouye2',
    meta: {title: '集团'},
    component: LayoutTwo,
    children: [
      {
        path: '/group',
        name: 'group',
        meta: {title: '集团设置'},
        component: () => import('@/views/Group/GroupSet')
      },
      
    ]

  }
  

      

    
  
]
