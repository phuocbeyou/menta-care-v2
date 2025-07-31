import { Box, Skeleton } from '@mui/material'
import { CustomSwiper, SwiperSlide } from '@src/components/swiper'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import ItemCompany from '../components/list-company/ItemCompany'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../apis/const'

export interface CompanyContacts {
  phone: string
  email: string
}

export interface Company {
  created_at: string
  contacts: CompanyContacts
  rating: string
  thumbnail_uri: string
  description: string
  id: string
  name: string
  software_ids: string[]
}

export interface ListCompanyRes {
  companies: Company[]
}

export interface ListCompanyReq {
  software_id: string
}

export default function ListCompany() {
  const { id } = useParams() // software_id from URL params
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true)
        const response = await callingAPI<ListCompanyRes, ListCompanyReq>(REQUEST_TYPE.get_software_companies, {
          software_id: id || ''
        })
        setCompanies(response.companies)
      } catch (error) {
        console.error('Error fetching companies:', error)
        setCompanies([])
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchCompanies()
    }
  }, [id])

  return (
    <>
      <Helmet>
        <title> {`List Company - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <div className='mt-4'>
          <CustomSwiper
            spaceBetween={10}
            slidesPerView={'auto'}
            loop={false}
            showNavigation={true}
            navigationPosition={'outside'}
          >
            {isLoading ? (
              // Skeleton for companies
              Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide
                  key={index}
                  style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
                >
                  <div className='bg-green-100 rounded-xl p-2 w-[256px] text-center h-[350px] flex flex-col justify-between'>
                    <Skeleton
                      variant='rectangular'
                      width={94}
                      height={94}
                      sx={{ borderRadius: 1, mx: 'auto', mb: 2 }}
                    />
                    <Skeleton variant='text' width='80%' height={24} sx={{ mb: 1, mx: 'auto' }} />
                    <Skeleton variant='text' width='100%' height={16} sx={{ mb: 4, mx: 'auto' }} />
                    <div>
                      <Skeleton variant='rectangular' width={120} height={20} sx={{ mb: 1, mx: 'auto' }} />
                      <Skeleton variant='rectangular' width={80} height={32} sx={{ mx: 'auto' }} />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : companies.length === 0 ? (
              <SwiperSlide style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div className='w-full text-center py-12'>
                  <div className='flex flex-col items-center gap-3'>
                    <div className='text-4xl'>🏢</div>
                    <p className='text-gray-500 text-lg'>Không có công ty nào</p>
                    <p className='text-gray-400 text-sm'>Không tìm thấy công ty sử dụng phần mềm này</p>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              companies.map((company) => (
                <SwiperSlide
                  key={company.id}
                  style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
                >
                  <ItemCompany item={company} />
                </SwiperSlide>
              ))
            )}
          </CustomSwiper>
        </div>
      </Box>
    </>
  )
}
