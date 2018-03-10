export const navigation = [
  {
    name: 'Requests',
    url: '/dashboard/requests',
    icon: 'icon-speedometer'
  },
  {
    name: 'Filters',
    url: '/dashboard/filters',
    icon: 'icon-pencil'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Auth',
    url: '',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star'
      }
    ]
  },
];
