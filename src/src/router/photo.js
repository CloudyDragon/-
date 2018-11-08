export default {
  path: '/photo',
  component: () => import('@/pages/photo.vue'),
  children: [
    {
      path: '/photo',
      name: 'myImg',
      component: () => import('@/components/photos/MyImg.vue')
    },
    {
      path: '/imgchild',
      name: 'imgChild',
      component: () => import('@/components/photos/ImgChild.vue')
    }
  ]
}
