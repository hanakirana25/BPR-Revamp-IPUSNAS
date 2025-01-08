import type { RouteRecordRaw } from 'vue-router';

// Components
import AppBaseWrapper from '@/app/components/base/AppBaseWrapper.vue';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: AppBaseWrapper,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.DEFAULT,
        },
      },
    ],
  },
];

export default routes;
