import { Box } from '@mui/material'
import { HeaderExpertDetail } from '../components/expert_detail/header-expert'
import { CvExpert } from '../components/expert_detail/cv-expert'
import { FormBooking } from '../components/expert_detail/form-booking'

const ExpertDetail = () => {
  return (
    <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
      <HeaderExpertDetail />
      <CvExpert />
      <FormBooking />
    </Box>
  )
}

export default ExpertDetail
