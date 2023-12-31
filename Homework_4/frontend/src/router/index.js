import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import APostView from "../views/APostView.vue";
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import auth from "../auth";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/loginview')
      } else {
        next();
      }
    }
  },
  {
    path: '/signupview',
    name: 'signupview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path: "/loginview",
    name: "loginview",
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: "/apostview/:id",
    name: "apostview",
    component: () => import(/* webpackChunkName: "about" */ '../views/APostView.vue'),
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/loginview')
      } else {
        next();
      }
    }
},
  {
    path: '/contactusview',
    name: 'contactusview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
