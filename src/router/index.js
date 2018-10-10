import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Bg from '@/components/Bg.vue'

import Photo from '@/pages/photo.vue'
import Img from '@/components/photos/Img.vue'
import ImgChild from '@/components/photos/ImgChild.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'index',
          component: Bg
        },
        {
          path: '/photo',
          component: Photo,
          children: [
            {
              path: '/photo',
              name: 'img',
              component: Img
            },
            {
              path: '/imgchild',
              name: 'imgChild',
              component: ImgChild
            }
          ]
        }
      ]
    }
  ]
})
