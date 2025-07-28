import { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { LayoutSection } from '../core/layout-section'
import { Fallback } from '../components/Fallback'
import { Main } from '../dashboard/main'
import { ProfileNav } from './nav'
import { CONFIG } from '@src/config-global'
import { isUserAuthenticated } from '@src/stores/authHelpers'

export const ProfileLayout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isUserAuthenticated()) {
      navigate('/auth/sign-in')
    }
  }, [navigate])
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
