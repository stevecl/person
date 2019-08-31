import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/user',
          component: () => import('../views/user'),
          meta: { title: '用户列表' }
        },
        {
          path: '/user/edit/:id',
          component: () => import('../views/user/user_edit.vue'),
          meta: { title: '新增用户' }
        },
        {
          path: '/house',
          component: () => import('../views/house'),
          meta: { title: '意向房源' }
        },
        {
          path: '/house/house_add',
          component: () => import('../views/house/house_add.vue'),
          meta: { title: '录入房源' }
        },
        {
          path: '/customer',
          component: () => import('../views/customer'),
          meta: { title: '入驻客户列表' }
        },
        {
          path: '/customer/detail',
          component: () => import('../views/customer/index_detail.vue'),
          meta: { title: '入驻客户详情' }
        },
        {
          path: '/announcement',
          component: () => import('../views/announcement'),
          meta: { title: '公告列表' }
        },
        {
          path: '/announcement/detail',
          component: () => import('../views/announcement/index_detail.vue'),
          meta: { title: '公告详情' }
        },
        {
          path: '/notice',
          component: () => import('../views/notice'),
          meta: { title: '通知列表' }
        },
        {
          path: '/notice/detail',
          component: () => import('../views/notice/index_detail.vue'),
          meta: { title: '通知详情' }
        },
        {
          path: '/crawlerData',
          component: () => import('../views/crawlerData'),
          meta: { title: '爬虫数据' }
        },
        {
          path: '/dataInfo',
          component: () => import('../views/dataInfo'),
          meta: { title: '数据统计' }
        },
        {
          path: '/banner',
          component: () => import('../views/banner'),
          meta: { title: 'banner管理' }
        },

        {
          path: '/icon',
          component: () => import('../components/page/Icon.vue'),
          meta: { title: '自定义图标' }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: () => import('../components/page/BaseCharts.vue'),
          meta: { title: 'schart图表' }
        },
        {
          path: '/404',
          component: () => import('../components/page/404.vue'),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: () => import('../components/page/403.vue'),
          meta: { title: '403' }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
