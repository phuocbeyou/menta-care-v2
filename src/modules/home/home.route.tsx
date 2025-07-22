import { HomeLayout } from '@src/layouts/home'
import { Router } from '@src/routes'
import { lazy } from 'react'
import { Cookie } from './pages/Cookie'
import Expert from './pages/Expert'
import ExpertDetail from './pages/ExpertDetail'
import Introduce from './pages/Introduce'
import { Forum } from './pages/Forum'

const HomePage = lazy(() => import('@src/modules/home/pages/Home'))
const WellBeingPage = lazy(() => import('@src/modules/home/pages/Well-Being'))

export const HOME_ROOT_PATH = 'home'
export const WELLBEING_PATH = 'wellbeing'
export const COOKIE_PATH = 'cookie'
export const EXPERT_PATH = 'expert'
export const EXPERT_DETAIL_PATH = 'expert-detail/:id'
export const INTRODUCE_PATH = 'introduce'
export const FORUM_PATH = 'forum'

export const homeRouter: Router[] = [
  {
    element: <HomeLayout />,
    children: [
      { element: <HomePage />, index: true, path: HOME_ROOT_PATH },
      { element: <WellBeingPage />, path: WELLBEING_PATH },
      { element: <Cookie />, path: COOKIE_PATH },
      { element: <Expert />, path: EXPERT_PATH },
      { element: <ExpertDetail />, path: EXPERT_DETAIL_PATH },
      { element: <Introduce />, path: INTRODUCE_PATH },
      { element: <Forum />, path: FORUM_PATH }
    ]
  }
]
