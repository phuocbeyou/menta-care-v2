import { Box } from '@mui/material'
import { HeaderIntroduce } from '../components/introduce/header-introduce'
import { CoreValue } from '../components/introduce/CoreValue'
import { About } from '../components/introduce/About'
import { ListFounder } from '../components/introduce/ListFounder'
import { Helmet } from 'react-helmet-async'
import { CONFIG } from '@src/config-global'

export default function Introduce() {
  return (
    <>
      <Helmet>
        <title> {`Introduce - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderIntroduce />

        <CoreValue />

        <About />

        <ListFounder />
      </Box>
    </>
  )
}
