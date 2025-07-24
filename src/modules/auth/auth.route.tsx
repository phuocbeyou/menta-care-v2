import { HomeLayout } from '@src/layouts/home'
import { Router } from '@src/routes'
import { lazy } from 'react'

export const SignInPage = lazy(() => import('@src/modules/auth/pages/SignIn.page'))
export const SignUpPage = lazy(() => import('@src/modules/auth/pages/SignUp.page'))

export const AUTH_ROOT_PATH = 'auth'

export const authRouter: Router[] = [
  {
    element: <HomeLayout />,
    children: [
      { element: <SignInPage />, index: true, path: AUTH_ROOT_PATH },
      { element: <SignUpPage />, path: AUTH_ROOT_PATH + '/sign-up' }
    ]
  }
]
