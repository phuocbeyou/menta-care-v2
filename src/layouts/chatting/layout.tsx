import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { LayoutSection } from '../core/layout-section'
import { Fallback } from '../components/Fallback'
import { Main } from '../dashboard/main'
import { CONFIG } from '@src/config-global'
import { HomeNav } from '../home/nav'

export const ChattingLayout = () => {
  return (
    <LayoutSection headerSection={<HomeNav />}>
      <Main>
        {
          <Suspense fallback={Fallback}>
            <Box sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto' }}>
              <Outlet />
            </Box>
          </Suspense>
        }
      </Main>
    </LayoutSection>
  )
}
