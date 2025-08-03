import { Box } from '@mui/material'
import { HeaderExpertDetail } from '../components/expert_detail/header-expert'
import { CvExpert } from '../components/expert_detail/cv-expert'
import { Helmet } from 'react-helmet-async'
import { CONFIG } from '@src/config-global'
// import { useParams } from 'react-router-dom' // For future API integration
import { Expert } from '../components/expert/ListExpert'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../apis/const'
import { OrderExpert } from './OrderExpert'

export interface ExpertDetailReq {
  expert_id: string
}

export interface ExpertDetailRes {
  experts: Expert[]
}

const ExpertDetail = () => {
  const { id } = useParams() // For future API integration
  const [expert, setExpert] = useState<Expert | undefined>(undefined)

  useEffect(() => {
    const fetchExpert = async () => {
      const response = await callingAPI<ExpertDetailRes, ExpertDetailReq>(REQUEST_TYPE.expert_details, {
        expert_id: id || ''
      })
      setExpert(response.experts[0])
    }
    fetchExpert()
  }, [id])

  return (
    <>
      <Helmet>
        <title> {`Chuyên gia - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderExpertDetail expert={expert} />
        <CvExpert expert={expert} />
        {/* <FormBooking /> */}
        <div className='mt-10' id='form-booking-expert'>
          <OrderExpert expert={expert} />
        </div>
      </Box>
    </>
  )
}

export default ExpertDetail
