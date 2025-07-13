import { useRoutes } from 'react-router-dom'
import { getMenu } from '.'

export function Router() {
  return useRoutes(getMenu())
}
