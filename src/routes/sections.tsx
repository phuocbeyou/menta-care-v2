import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { AuthLayout } from '@src/layouts/auth'
import { DashboardLayout } from '@src/layouts/dashboard'

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('@src/pages/home'))
export const BlogPage = lazy(() => import('@src/pages/blog'))
export const UserPage = lazy(() => import('@src/pages/user'))
export const SignInPage = lazy(() => import('@src/pages/sign-in'))
export const ProductsPage = lazy(() => import('@src/pages/products'))
export const Page404 = lazy(() => import('@src/pages/page-not-found'))

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> }
      ]
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      )
    },
    {
      path: '404',
      element: <Page404 />
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
}
