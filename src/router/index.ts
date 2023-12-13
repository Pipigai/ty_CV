import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import Self from '../components/self.vue';
import Project from '../components/project.vue';
import Hobbies from '../components/hobbies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/self',
    name: 'self',
    component: Self,
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: Hobbies,
    // component: () => import(/* webpackChunkName: "about" */ '../views/FAQ/Update_standardqa')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;