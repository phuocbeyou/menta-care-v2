import { Label } from '@components/label'
import { SvgColor } from '@components/svg-color'
import { AUTH_ROOT_PATH } from '@src/modules/auth/auth.route'
import { BLOG_PATH, PRODUCTS_PATH, USER_PATH } from '@src/modules/home/home.route'

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor width='100%' height='100%' src={`/assets/icons/navbar/${name}.svg`} />

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics')
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user')
  },
  {
    title: 'Product',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color='error' variant='inverted'>
        +3
      </Label>
    )
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: icon('ic-blog')
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock')
  }
]
