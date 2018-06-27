import main from '../../view/main';
// import demolist from 'pages/list/demolist.vue';
// import carousel from 'pages/carousel/carousel.vue';
// import array from 'pages/array/array.vue';
const router = [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: main
  },
  // {
  //   path: '/list',
  //   redirect: '/list/carousel',
  //   component: demolist,
  //   children: [{
  //       path: 'carousel',
  //       component: carousel
  //     },
  //     {
  //       path: 'array',
  //       component: array
  //     },
  //   ]
  // },
];

export default router;