import ProductDetail from '../components/ProductDetail.vue';
import ProductsList from '../components/ProductsList.vue';
import { createWebHistory, createRouter } from 'vue-router';

export interface RouteParams {
  id: string;
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: ProductsList,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
      props: true,
    },
  ],
});

export default router;
