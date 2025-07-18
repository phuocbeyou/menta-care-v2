import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { LayoutSection } from '../core/layout-section'
import { Fallback } from '../components/Fallback'
import { Main } from '../dashboard/main'
import { HomeNav } from './nav'
import { CONFIG } from '@src/config-global'
import { HomeFooter } from './Footer'
import { AiBox } from '@src/modules/home/components/home/AiBox'

export const HomeLayout = () => {
  return (
    <LayoutSection headerSection={<HomeNav />}>
      <Main>
        {
          <Suspense fallback={Fallback}>
            <Box sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto' }}>
              <Outlet />
              <AiBox />
            </Box>
            <HomeFooter />
          </Suspense>
        }
      </Main>
    </LayoutSection>
  )
}
