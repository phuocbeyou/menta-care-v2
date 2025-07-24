import { Navigate, RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'
import { authRouter } from '@src/modules/auth/auth.route'
import { homeRouter } from '@src/modules/home/home.route'
import { chattingRouter } from '@src/modules/chatting/chat.route'

export const Page404 = lazy(() => import('@src/modules/error_boundary/page-not-found'))

export type Router = RouteObject & {
  icon?: React.ReactElement
  title?: string
  hiddenMenu?: boolean
  isIgnore?: boolean
  children?: Router[]
  hideChildrenInMenu?: boolean
}

export const rootRouter: Router[] = [
  {
    path: '/',
    element: <Navigate to='/home' replace />
  },
  ...authRouter,
  ...homeRouter,
  ...chattingRouter,
  {
    path: '404',
    element: <Page404 />
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />
  }
]

export const getRouterApp = (routers: Router[]) => {
  return routers.filter((route) => {
    if (route.isIgnore) return false
    if (route.children?.length) {
      route.children = getRouterApp(route.children)
    }
    return {
      ...route
    }
  })
}

export const getMenu = () => {
  const routerApp = getRouterApp(rootRouter)
  return routerApp.filter((route) => {
    if (route.hiddenMenu) return false
    if (route.children?.length) {
      route.children = route.children.filter((child) => {
        if ((child as Router).hiddenMenu) return false
        return true
      })
    }
    return {
      ...route
    }
  })
}
