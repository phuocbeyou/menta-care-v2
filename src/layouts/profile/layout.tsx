import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { LayoutSection } from '../core/layout-section'
import { Fallback } from '../components/Fallback'
import { Main } from '../dashboard/main'
import { ProfileNav } from './nav'
import { CONFIG } from '@src/config-global'

export const ProfileLayout = () => {
  return (
    <LayoutSection headerSection={<ProfileNav />}>
      <Main>
        {
          <Suspense fallback={Fallback}>
            <Box sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto', backgroundColor: 'white' }}>
              <Outlet />
            </Box>
          </Suspense>
        }
      </Main>
    </LayoutSection>
  )
}
