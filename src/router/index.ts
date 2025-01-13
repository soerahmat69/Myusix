import { createRouter, createWebHistory } from 'vue-router';
import HeroDashboard from '@/components/HeroDashboard.vue';
import MusicList from '@/components/MusicList.vue';
import ArtistCoupons from '@/components/ArtistCoupons.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroDashboard
    },
    {
      path: '/library',
      name: 'library',
      component: MusicList
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: ArtistCoupons
    }
  ]
});

export default router;