import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../views/Start.vue'),
    // redirect: { path: '/red' },
  },
  {
    path: '/red',
    name: 'red',
    component: () => import('../views/Red.vue'),
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: () => import('../views/Yellow.vue'),
  },
  {
    path: '/green',
    name: 'green',
    component: () => import('../views/Green.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
