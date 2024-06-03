const data = {
    path: '/',
    name: 'Dashboard',
    component: import(/* webpackChunkName: "user-chunk" */ '@/pages/router/WrapRouteView.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "user-chunk" */ '@/pages/dashboard/DashboardPage.vue'),
        children: [],
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  }
  
  export default data
  