import { useEffect, useState } from 'react'
import { ItemSoftware } from './ItemSoftware'
import { CustomSwiper, SwiperSlide } from '@src/components/swiper'
import { REQUEST_TYPE } from '../../apis/const'
import { callingAPI } from '@src/configs/axios/api'
import { Skeleton } from '@mui/material'

export interface SoftwareGroupRes {
  software_groups: {
    id: string
    name: string
    created_at: string
  }[]
}

export interface SoftwareRes {
  software: {
    created_at: string
    description: string
    id: string
    name: string
    thumbnail_uri: string
    group_id: string
  }[]
}

export interface SoftwareReq {
  group_id: string
}

export function SoftwareCompany() {
  const [selectedMenu, setSelectedMenu] = useState<string>('')
  const [softwareGroups, setSoftwareGroups] = useState<SoftwareGroupRes['software_groups']>([])
  const [software, setSoftware] = useState<SoftwareRes['software']>([])
  const [isLoadingGroups, setIsLoadingGroups] = useState(true)
  const [isLoadingSoftware, setIsLoadingSoftware] = useState(false)

  useEffect(() => {
    const fetchSoftwareGroups = async () => {
      try {
        setIsLoadingGroups(true)
        const response = await callingAPI<SoftwareGroupRes, object>(REQUEST_TYPE.get_software_groups, {})
        setSoftwareGroups(response.software_groups)
        // Set first group as default
        if (response?.software_groups?.length > 0) {
          setSelectedMenu(response.software_groups[0].id)
        }
      } catch (error) {
        console.error('Error fetching software groups:', error)
      } finally {
        setIsLoadingGroups(false)
      }
    }
    fetchSoftwareGroups()
  }, [])

  useEffect(() => {
    if (selectedMenu) {
      const fetchSoftware = async () => {
        try {
          setIsLoadingSoftware(true)
          const response = await callingAPI<SoftwareRes, SoftwareReq>(REQUEST_TYPE.get_softwares, {
            group_id: selectedMenu
          })
          setSoftware(response.software)
        } catch (error) {
          console.error('Error fetching software:', error)
          setSoftware([])
        } finally {
          setIsLoadingSoftware(false)
        }
      }
      fetchSoftware()
    }
  }, [selectedMenu])

  const handleMenuClick = (groupId: string) => {
    setSelectedMenu(groupId)
  }

  return (
    <div id='software-company' className='pt-10 pb-16'>
      <h2 className='text-center text-black text-4xl font-semibold mb-8'>CÁC PHẦN MỀM CHO DOANH NGHIỆP</h2>

      <div className='flex flex-wrap gap-4'>
        {isLoadingGroups ? (
          // Skeleton for groups
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} variant='rectangular' width={170} height={60} sx={{ borderRadius: '24px' }} />
          ))
        ) : softwareGroups?.length === 0 ? (
          <div className='w-full text-center py-4'>
            <p className='text-gray-500'>Không có danh mục nào</p>
          </div>
        ) : (
          softwareGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => handleMenuClick(group.id)}
              className={`rounded-3xl px-3 py-3 text-center text-xs sm:text-sm leading-relaxed font-normal max-w-[170px] whitespace-normal transition-all duration-200 ${
                selectedMenu === group.id
                  ? 'bg-secondary text-white'
                  : 'bg-white text-black border-2 border-secondary hover:bg-secondary hover:text-white'
              }`}
            >
              {group.name}
            </button>
          ))
        )}
      </div>

      <div className='bg-primary rounded-3xl p-4 mt-2'>
        <CustomSwiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          showNavigation={true}
          navigationPosition={'outside'}
        >
          {isLoadingSoftware ? (
            // Skeleton for software
            Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide
                key={index}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <div className='bg-white rounded-2xl p-4 w-64 h-32'>
                  <Skeleton variant='text' width='80%' height={24} sx={{ mb: 1 }} />
                  <Skeleton variant='text' width='100%' height={16} sx={{ mb: 1 }} />
                  <Skeleton variant='text' width='60%' height={16} />
                </div>
              </SwiperSlide>
            ))
          ) : software?.length === 0 ? (
            <SwiperSlide style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className='w-full text-center py-12'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='text-4xl'>💻</div>
                  <p className='text-gray-500 text-lg'>Không có phần mềm nào</p>
                  <p className='text-gray-400 text-sm'>Thử chọn danh mục khác hoặc quay lại sau</p>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            software?.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <ItemSoftware title={item.name} description={item.description} id={item.id} />
              </SwiperSlide>
            ))
          )}
        </CustomSwiper>
      </div>
    </div>
  )
}
