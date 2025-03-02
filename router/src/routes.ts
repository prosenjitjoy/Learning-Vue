import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import UserView from './views/UserView.vue'
import UserHome from './views/User/UserHome.vue'
import UserPosts from './views/User/UserPosts.vue'
import UserProfile from './views/User/UserProfile.vue'
import First from './views/section/First.vue'
import Second from './views/section/Second.vue'
import Third from './views/section/Third.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home/:id?',
      component: HomeView,
      props: true,
    }, {
      path: '/users/:username',
      component: UserView,
      children: [
        {
          path: '', // /users/:username/
          component: UserHome
        }, {
          path: 'profile', // /users/:username/profile
          component: UserProfile
        }, {
          path: 'posts', // users/:username/posts
          component: UserPosts
        }
      ]
    }, {
      path: '/named',
      components: {
        main: First,
        leftSidebar: Second,
        rightSidebar: Third
      }
    }, {
      path: '/other',
      components: {
        main: Second,
        leftSidebar: Third,
        rightSidebar: First
      }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router