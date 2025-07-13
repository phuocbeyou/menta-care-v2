import { AuthLayout } from '@src/layouts/auth'
import { Router } from '@src/routes'
import { lazy } from 'react'

export const SignInPage = lazy(() => import('@src/modules/auth/pages/SignIn.page'))

export const AUTH_ROOT_PATH = 'auth'

export const authRouter: Router[] = [
  {
    path: AUTH_ROOT_PATH,
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    )
  }
]
