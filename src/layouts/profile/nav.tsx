import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
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

// function MenuLink({ children, href }: { children: React.ReactNode; href: string }) {
//   return (
//     <Typography
//       component='a'
//       href={href}
//       sx={{
//         color: 'inherit',
//         fontWeight: 500,
//         fontSize: '1.1rem',
//         textDecoration: 'none',
//         '&:hover': { textDecoration: 'underline' }
//       }}
//     >
//       {children}
//     </Typography>
//   )
// }

export function ProfileNav() {
  const [navOpen, setNavOpen] = useState(false)
  const theme = useTheme()
  const navigate = useNavigate()
  const layoutQuery: Breakpoint = 'lg'

  const toolbarStyles = {
    default: {
      ...bgBlur({ color: 'rgba(218,,222,0.8)' }),
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
        className='bg-white border-b border-gray-200 shadow-sm'
        sx={{
          // py: 2,
          top: 0,
          zIndex: 1000,
          display: { xs: 'none', lg: 'flex' }
        }}
      >
        <Box
          className='flex items-center justify-between'
          sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto' }}
        >
          <Box className='flex gap-1 py-1'>
            {/* Logo */}
            <SlideUp className=' w-35 max-w-35 border-r border-gray-200'>
              <Box
                onClick={() => navigate('/')}
                component='img'
                src='/assets/images/logo/logo.png'
                alt='MentaCare Logo'
                sx={{ height: 70 }}
                className='cursor-pointer'
                style={{ objectFit: 'cover' }}
              />
            </SlideUp>
            {/* Menu */}
            <Stack direction='row' spacing={3} alignItems='center'>
              {navData.map((item) => (
                <Button
                  key={item.title}
                  href={item.path}
                  variant='outlined'
                  color='secondary'
                  sx={{
                    color: 'black',
                    borderColor: 'black',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    borderRadius: 999
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box
            component='img'
            src='/assets/images/cv/cv-avt-tmp.jpg'
            sx={{ width: 50, height: 50, border: '1px solid #E0E0E0', objectFit: 'cover' }}
            className='rounded-full'
          />
        </Box>
      </Box>
    </Box>
  )
}
