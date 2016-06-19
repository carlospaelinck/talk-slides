export const routes: Routes = [
  {
    path: '/',
    component: IndexView
  },
  {
    path: '/photos',
    guards: [ AuthenticationGuard ],
    component: PhotosCollectionView,
    children: [
      {
        path: ':uuid',
        component: PhotoView
      }
    ]
  },
  {
    path: '/pictures',
    redirectTo: '/photos'
  },
  {
    path: '/*',
    redirectTo: '/'
  },
  {
    path: '/*',
    component: NotFoundView
  }
]
