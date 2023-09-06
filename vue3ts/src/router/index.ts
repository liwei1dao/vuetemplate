import { createRouter,createWebHashHistory} from "vue-router";
import Layout from '@/layout/Layout.vue'

const routes = [
    {
      path: "/",
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'index',
          meta: { title: 'Wrok', icon: 'mdi-home' },
          component: () => import('@/views/index.vue'),
        },
        {
          path: 'video',
          name: 'video',
          meta: { title: 'New', icon: 'mdi-home' },
          component: () => import('@/views/video.vue'),
        },
      ]
    }
  ]

  export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})