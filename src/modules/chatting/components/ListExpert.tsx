import { Skeleton } from '@mui/material'
import { CustomSwiper, SwiperSlide } from '@components/swiper'
import { ItemExpert } from '@src/modules/home/components/expert/ItemExpert'

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
  avatar_url: string
}

interface ListExpertProps {
  experts: Expert[]
  isLoading?: boolean
}

export function ListExpert({ experts, isLoading = false }: ListExpertProps) {
  return (
    <div>
      <CustomSwiper
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={false}
        showNavigation={true}
        navigationPosition={'outside'}
      >
        {isLoading ? (
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
        ) : experts.length === 0 ? (
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
          experts.map((expert) => (
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
  )
}
