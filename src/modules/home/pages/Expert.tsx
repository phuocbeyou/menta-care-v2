import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { HeaderExpert } from '../components/expert/header-expert'
import { ProcessInformation } from '../components/expert/ProcessInformation'
import { ProcessStep } from '../components/expert/ProcessStep'
import { Form } from '../components/expert/Form'
import { ListExpert } from '../components/expert/ListExpert'
export default function Expert() {
  return (
    <>
      <Helmet>
        <title> {`Chuyên gia - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderExpert />
        <ListExpert />
        <ProcessInformation />
        <ProcessStep />
        <Form />
      </Box>
    </>
  )
}
