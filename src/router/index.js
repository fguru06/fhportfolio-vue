const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue'),
  },
];

export { routes };
export default routes;
