import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'

export default function Profile() {
  return (
    <>
      <Helmet>
        <title> {`Profile - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'></Box>
    </>
  )
}
