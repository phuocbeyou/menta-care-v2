import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SlideUp } from '@src/components/animation/SlideUp'
import { CONFIG } from '@src/config-global'
import { MenuButton } from '../components/menu-button'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Breakpoint, Toolbar } from '@mui/material'
import { navData } from './config-nav-home'
import { bgBlur } from '@src/theme/styles'
import { NavMobile } from './nav-content'
import { useNavigate } from 'react-router-dom'

function MenuLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Typography
      component='a'
      href={href}
      sx={{
        color: 'inherit',
        fontWeight: 500,
        fontSize: '1.1rem',
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' }
      }}
    >
      {children}
    </Typography>
  )
}

export function HomeNav() {
  const [navOpen, setNavOpen] = useState(false)
  const theme = useTheme()
  const navigate = useNavigate()
  const layoutQuery: Breakpoint = 'lg'

  const toolbarStyles = {
    default: {
      ...bgBlur({ color: 'rgba(218,243,222,0.8)' }),
      minHeight: 'auto',
      height: 'var(--layout-header-mobile-height)',
      transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto'
      },
      [theme.breakpoints.up(layoutQuery)]: {
        height: 'var(--layout-header-desktop-height)'
      }
    }
  }

  return (
    <Box className='sticky top-0 z-50'>
      {/* Nav Mobile  */}
      <Toolbar
        sx={{
          ...toolbarStyles.default,
          display: { xs: 'flex', lg: 'none' }
        }}
      >
        <MenuButton onClick={() => setNavOpen(true)} sx={{ ml: -1 }} />
        <NavMobile data={navData} open={navOpen} onClose={() => setNavOpen(false)} />
      </Toolbar>
      {/* Nav Desktop */}
      <Box
        className='bg-primary rounded-b-3xl'
        sx={{
          py: 2,
          top: 0,
          zIndex: 1000,
          display: { xs: 'none', lg: 'flex' }
        }}
      >
        <Box
          className='flex items-center justify-between'
          sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto', px: 4 }}
        >
          <Box className='flex gap-1'>
            {/* Logo */}
            <SlideUp>
              <Box component='img' src='/assets/images/logo/logo.png' alt='MentaCare Logo' sx={{ height: 97 }} />
            </SlideUp>
            {/* Menu */}
            <Stack direction='row' spacing={3} alignItems='center'>
              {navData.map((item) => (
                <MenuLink key={item.title} href={item.path}>
                  {item.title}
                </MenuLink>
              ))}
            </Stack>
          </Box>
          {/* Button */}
          <Button
            onClick={() => navigate('/auth/sign-up')}
            variant='contained'
            color='secondary'
            sx={{
              height: 41,
              borderRadius: 999,
              px: 4,
              fontWeight: 500,
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                opacity: 0.85,
                textDecoration: 'underline'
              }
            }}
          >
            Tài Khoản
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
