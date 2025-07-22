import { Box } from '@mui/material'
import { HeaderExpertDetail } from '../components/expert_detail/header-expert'
import { CvExpert } from '../components/expert_detail/cv-expert'
import { FormBooking } from '../components/expert_detail/form-booking'
import { Helmet } from 'react-helmet-async'
import { CONFIG } from '@src/config-global'

const ExpertDetail = () => {
  return (
    <>
      <Helmet>
        <title> {`Chuyên gia - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderExpertDetail />
        <CvExpert />
        <FormBooking />
      </Box>
    </>
  )
}

export default ExpertDetail
