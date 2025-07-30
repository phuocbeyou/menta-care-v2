import { Autocomplete, TextField, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { CustomSwiper, SwiperSlide } from '@components/swiper'
import { ItemExpert } from './ItemExpert'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../../apis/const'

export interface ExpertTypeRes {
  expert_types: {
    name: string
    expert_type_id: string
    created_at: string
  }[]
}

export interface ExpertsReq {
  request_type: string
  expert_type?: string
  pagging: number
  amount: number
}

export interface ExperienceItem {
  description: string
  title: string
  year_start: string
  year_end: string
  duration: string
  position: string
  organization: string
}

export interface ContactInfo {
  facebook_url: string
  website: string
  address: string
  instagram_url: string
  phone: string
  linkedin_url: string
  email: string
  x_url: string
}

export interface ReferenceItem {
  name: string
  company: string
  position: string
  phone: string
  email: string
}

export interface EducationItem {
  description: string
  address: string
  title: string
  year_start: string
  year_end: string
  degree: string
  institution: string
  year: string
}

export interface Expert {
  experience: ExperienceItem[]
  phone_or_email: string
  created_at: string
  contacts: ContactInfo
  rating: string
  slots: unknown[]
  expert_id: string
  certifications: string[]
  yoe: string
  name: string
  language: string[]
  reference: ReferenceItem[]
  user_id: string
  education: EducationItem[]
  expert_types: string[]
  skills: string[]
  description: string
  title: string
}

export interface ExpertsRes {
  experts: Expert[]
}

export function ListExpert() {
  const [value, setValue] = useState<number>(0) // Change to 0 for "Tất cả"
  const [expertType, setExpertType] = useState<ExpertTypeRes['expert_types']>([])
  const [experts, setExperts] = useState<ExpertsRes['experts']>([])
  const [isLoadingTypes, setIsLoadingTypes] = useState(true)
  const [isLoadingExperts, setIsLoadingExperts] = useState(true)

  useEffect(() => {
    const fetchExpertType = async () => {
      try {
        setIsLoadingTypes(true)
        const response = await callingAPI<ExpertTypeRes, object>(REQUEST_TYPE.get_expert_types, {})
        setExpertType(response.expert_types)
      } catch (error) {
        console.error('Error fetching expert types:', error)
      } finally {
        setIsLoadingTypes(false)
      }
    }
    fetchExpertType()
  }, [])

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setIsLoadingExperts(true)
        const selectedExpertType = value === 0 ? undefined : expertType[value - 1]?.name?.toLowerCase()
        const response = await callingAPI<ExpertsRes, ExpertsReq>(REQUEST_TYPE.get_experts, {
          request_type: REQUEST_TYPE.get_experts,
          expert_type: selectedExpertType,
          pagging: 0,
          amount: 180555
        })
        setExperts(response.experts)
      } catch (error) {
        console.error('Error fetching experts:', error)
      } finally {
        setIsLoadingExperts(false)
      }
    }
    fetchExperts()
  }, [value, expertType])

  // Create categories from API data
  const categories = [
    { id: 0, name: 'Tất cả' },
    ...expertType.map((type, index) => ({
      id: index + 1,
      name: type.name
    }))
  ]

  // Filter experts based on selected category
  const filteredExperts =
    value === 0
      ? experts
      : experts.filter((expert) => {
          const selectedTypeName = expertType[value - 1]?.name?.toLowerCase()
          return expert.expert_types.some((type) => type.toLowerCase() === selectedTypeName)
        })

  return (
    <div className='my-4 mb-14'>
      <div className='sm:hidden'>
        {isLoadingTypes ? (
          <Skeleton variant='rectangular' width='100%' height={56} sx={{ borderRadius: 1 }} />
        ) : categories.length === 0 ? (
          <div className='text-center py-4'>
            <p className='text-gray-500'>Không có danh mục nào</p>
          </div>
        ) : (
          <Autocomplete
            disablePortal
            options={categories}
            renderInput={(params) => <TextField {...params} label='Chọn lĩnh vực' />}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            clearIcon={false}
            value={categories.find((item) => item.id === value)}
            onChange={(_, newValue) => {
              setValue(newValue?.id || 0)
            }}
          />
        )}
      </div>

      {/* <!-- Button group for tablet and above --> */}
      <div className='hidden sm:flex flex-wrap gap-2'>
        {isLoadingTypes ? (
          // Skeleton for categories
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} variant='rectangular' width={120} height={40} sx={{ borderRadius: '16px', mb: 1 }} />
          ))
        ) : categories.length === 0 ? (
          <div className='w-full text-center py-4'>
            <p className='text-gray-500'>Không có danh mục nào</p>
          </div>
        ) : (
          categories.map((item) => (
            <button
              key={item.id}
              className={`border cursor-pointer border-secondary text-secondary rounded-2xl text-1xl py-2 px-4 whitespace-nowrap ${
                value === item.id ? 'bg-secondary text-white font-semibold' : ''
              }`}
              onClick={() => setValue(item.id)}
            >
              {item.name}
            </button>
          ))
        )}
      </div>

      <div className='mt-4'>
        <CustomSwiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          showNavigation={true}
          navigationPosition={'outside'}
        >
          {isLoadingExperts ? (
            // Skeleton for experts
            Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide
                key={index}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <div className='bg-primary rounded-xl w-25 md:w-30 p-1 flex flex-col items-center h-[360px]'>
                  <Skeleton variant='rectangular' width={120} height={120} sx={{ borderRadius: 1, mb: 2 }} />
                  <Skeleton variant='text' width={100} height={24} sx={{ mb: 1 }} />
                  <Skeleton variant='text' width={80} height={16} sx={{ mb: 1 }} />
                  <Skeleton variant='text' width={60} height={16} sx={{ mb: 1 }} />
                  <Skeleton variant='rectangular' width={100} height={20} sx={{ borderRadius: 1, mb: 1 }} />
                  <Skeleton variant='rectangular' width={80} height={32} sx={{ borderRadius: 1 }} />
                </div>
              </SwiperSlide>
            ))
          ) : filteredExperts.length === 0 ? (
            <SwiperSlide style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className='w-full text-center py-12'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='text-4xl'>👨‍⚕️</div>
                  <p className='text-gray-500 text-lg'>Không có chuyên gia nào</p>
                  <p className='text-gray-400 text-sm'>Thử chọn danh mục khác hoặc quay lại sau</p>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            filteredExperts.map((expert) => (
              <SwiperSlide
                key={expert.expert_id}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <ItemExpert item={expert} />
              </SwiperSlide>
            ))
          )}
        </CustomSwiper>
      </div>
    </div>
  )
}
