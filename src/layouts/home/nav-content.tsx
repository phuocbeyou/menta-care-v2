import type { Theme, SxProps } from '@mui/material/styles'

import { useEffect } from 'react'

import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Drawer, { drawerClasses } from '@mui/material/Drawer'

import { usePathname } from '@routes/hooks'
import { RouterLink } from '@routes/components'

import { Scrollbar } from '@components/scrollbar'
import { Iconify } from '@src/components/iconify'

// ----------------------------------------------------------------------

export type NavContentProps = {
  data: {
    path: string
    title: string
    icon: React.ReactNode
    info?: React.ReactNode
  }[]
  slots?: {
    topArea?: React.ReactNode
    bottomArea?: React.ReactNode
  }
  sx?: SxProps<Theme>
}
// ----------------------------------------------------------------------

export function NavMobile({
  sx,
  data,
  open,
  slots,
  onClose
}: NavContentProps & { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          pt: 2.5,
          px: 2.5,
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...sx
        }
      }}
    >
      <NavContent data={data} slots={slots} />
    </Drawer>
  )
}

// ----------------------------------------------------------------------

export function NavContent({ data, slots, sx }: NavContentProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <Box component='img' src='/assets/images/logo/logo.png' alt='MentaCare Logo' sx={{ height: 97 }} />
      </Box>

      {slots?.topArea}

      <Scrollbar fillContent sx={{ mt: 4 }}>
        <Box component='nav' display='flex' flex='1 1 auto' flexDirection='column' sx={sx}>
          <Box component='ul' gap={0.5} display='flex' flexDirection='column'>
            {data.map((item) => {
              const isActived = item.path === pathname

              return (
                <ListItem disableGutters disablePadding key={item.title}>
                  <ListItemButton
                    disableGutters
                    component={RouterLink}
                    href={item.path}
                    sx={{
                      pl: 2,
                      py: 1,
                      gap: 2,
                      pr: 1.5,
                      borderRadius: 0.75,
                      typography: 'body2',
                      color: 'var(--layout-nav-item-color)',
                      minHeight: 'var(--layout-nav-item-height)',
                      ...(isActived && {
                        fontWeight: 'fontWeightSemiBold',
                        bgcolor: 'var(--layout-nav-item-active-bg)',
                        color: 'secondary.main',
                        '&:hover': {
                          bgcolor: 'var(--layout-nav-item-hover-bg)'
                        }
                      })
                    }}
                  >
                    <Box component='span' sx={{ width: 24, height: 24 }}>
                      <Iconify icon={item.icon as string} />
                    </Box>

                    <Box component='span' flexGrow={1}>
                      {item.title}
                    </Box>

                    {item.info && item.info}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </Box>
        </Box>
      </Scrollbar>

      {slots?.bottomArea}
    </>
  )
}
