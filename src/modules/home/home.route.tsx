import { DashboardLayout } from '@src/layouts/dashboard'
import { Router } from '@src/routes'
import { lazy } from 'react'

const HomePage = lazy(() => import('@src/modules/home/pages/Home'))
const UserPage = lazy(() => import('@src/modules/home/pages/user'))
const ProductsPage = lazy(() => import('@src/modules/home/pages/products'))
const BlogPage = lazy(() => import('@src/modules/home/pages/blog'))

export const HOME_ROOT_PATH = 'home'
export const USER_PATH = 'user'
export const PRODUCTS_PATH = 'products'
export const BLOG_PATH = 'blog'

export const homeRouter: Router[] = [
  {
    element: <DashboardLayout />,
    children: [
      { element: <HomePage />, index: true, path: HOME_ROOT_PATH },
      { path: USER_PATH, element: <UserPage /> },
      { path: PRODUCTS_PATH, element: <ProductsPage /> },
      { path: BLOG_PATH, element: <BlogPage /> }
    ]
  }
]
