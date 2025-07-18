import { HomeLayout } from '@src/layouts/home'
import { Router } from '@src/routes'
import { lazy } from 'react'

const HomePage = lazy(() => import('@src/modules/home/pages/Home'))
const WellBeingPage = lazy(() => import('@src/modules/home/pages/Well-Being'))

export const HOME_ROOT_PATH = 'home'
export const WELLBEING_PATH = 'wellbeing'

export const homeRouter: Router[] = [
  {
    element: <HomeLayout />,
    children: [
      { element: <HomePage />, index: true, path: HOME_ROOT_PATH },
      { element: <WellBeingPage />, path: WELLBEING_PATH }
    ]
  }
]
