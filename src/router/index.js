import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //用于去除url后面的#
  base: '/ciyuanjie/', //用于在前面加个基路径
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('@/components/Bg.vue')
        },
        {
          path: '/photo',
          component: () => import('@/pages/photo.vue'),
          children: [
            {
              path: '/photo',
              name: 'myImg',
              component: () => import('@/components/photos/MyImg.vue')
            },
            {
              path: '/imgchild/:name',
              name: 'imgChild',
              component: () => import('@/components/photos/ImgChild.vue')
            }
          ]
        }
      ]
    }
  ]
})
