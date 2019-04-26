import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
  {
    path: '/login/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/homepage/homepage'),
        meta: {title: '首页'}
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    meta: {
      icon: 'tickets',
      title: '个人中心'
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/user/profile'),
        // icon是怎么通过神仙指定的?
        meta: {icon: 'warning', title: '个人中心'}
      },
      {
        path: 'avatar',
        name: 'Avatar',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'warning', title: '修改头像'}
      }
    ]
  },
  {
    path: '/hospital',
    component: Layout,
    redirect: '/hospital/index',
    meta: {
      icon: 'question',
      title: '医院管理'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/hospital/profile'),
        meta: {title: '医院列表'}
      }
    ]
  },
  {
    path: '/bxCompany',
    component: Layout,
    redirect: '/bxCompany/index',
    meta: {
      icon: 'question',
      title: '保险公司'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/bxCompany/profile'),
        meta: {title: '合作公司列表'}
      }
    ]
  },
  {
    path: '/h5',
    component: Layout,
    redirect: '/h5/index',
    // alwaysShow: true,
    meta: {
      icon: 'question',
      title: 'h5'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/h5/info'),
        meta: {icon: 'question', title: 'h5保单'}
      },
      {
        path: 'claim',
        name: 'Claim',
        component: () => import('@/views/h5/profile'),
        meta: {icon: 'question', title: 'h5理赔'}
      },
      {
        path: 'visit',
        name: 'Visit',
        component: () => import('@/views/h5/profile'),
        meta: {icon: 'question', title: 'h5访问量'}
      }
    ]
  },
  {
    path: '/mini',
    component: Layout,
    redirect: '/mini/index',
    // alwaysShow: true,
    meta: {
      icon: 'question',
      title: '小程序'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'question', title: '小程序保单'}
      },
      {
        path: 'claim',
        name: 'Claim',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'question', title: '小程序理赔'}
      },
      {
        path: 'visit',
        name: 'Visit',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'question', title: '小程序访问量'}
      }
    ]
  }
]
// 以上定义了路由表,声明路由
export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    alwaysShow: true,
    meta: {
      title: '表格',
      icon: 'edit'
    },
    children: [
      {
        path: 'export-excel',
        name: '导出表格',
        component: () => import('@/views/excel/export-excel'),
        meta: {icon: 'arrow-left', title: 'exportExcel'}
      },
      {
        path: 'upload-excel',
        name: '上传表格',
        component: () => import('@/views/excel/upload-excel'),
        meta: {icon: 'minus', title: 'uploadExcel'}
      }
    ]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'index',
    meta: {
      icon: 'document',
      title: '剪切板'
    },
    children: [
      {
        path: 'index',
        name: 'clipBoard',
        component: () => import('@/views/clipboard'),
        meta: {title: '剪切板示例', icon: 'document'}
      }
    ]
  }
]
