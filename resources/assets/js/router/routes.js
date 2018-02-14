export default ({authGuard, guestGuard}) => [
  {path: '/', name: 'welcome', component: ()=>import('~/pages/welcome.vue')},

  // Authenticated routes.
  ...authGuard([
    {
      path: '/home',
      name: 'home',
      component: ()=>import('~/pages/home.vue')
    },
    {
      path: '/post',
      name: 'post.index',
      // component: require('~/pages/post/index')
      component: ()=>import('~/pages/post/index')
    },
    {
      path: '/post/create',
      name: 'post.create',
      component: ()=>import('~/pages/post/create')
    },
    {
      path: '/settings',
      component: ()=>import('~/pages/settings/index.vue'),
      children: [
        {
          path: '',
          redirect: {name: 'settings.profile'}
        },
        {
          path: 'profile',
          name: 'settings.profile',
          component: ()=>import('~/pages/settings/profile.vue')
        },
        {
          path: 'password',
          name: 'settings.password',
          component: ()=>import('~/pages/settings/password.vue')
        }
      ]
    }
  ]),

  // Guest routes.
  ...guestGuard([
    {
      path: '/login',
      name: 'login',
      component: ()=>import('~/pages/auth/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('~/pages/auth/register.vue')
    },
    {
      path: '/password/reset',
      name: 'password.request',
      component: ()=>import('~/pages/auth/password/email.vue')
    },
    {
      path: '/password/reset/:token',
      name: 'password.reset',
      component: ()=>import('~/pages/auth/password/reset.vue')
    }
  ]),

  {path: '*', component: ()=>import('~/pages/errors/404.vue')}
]
