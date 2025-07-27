import { Router } from '@src/routes'

import Profile from './pages/Profile'
import { ProfileLayout } from '@src/layouts/profile'

export const PROFILE_PATH = 'profile'

export const profileRouter: Router[] = [
  {
    element: <ProfileLayout />,
    children: [{ element: <Profile />, path: PROFILE_PATH }]
  }
]
