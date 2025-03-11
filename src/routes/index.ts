import { RouteObject } from 'react-router-dom'

type Router = RouteObject & {
  icon?: React.ReactElement
  title: string
  isDisplayMenu?: boolean
  isIgnore?: boolean
}

export const rootRouter: Router[] = []
