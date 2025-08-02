import { Box } from '@mui/material'
import HorizontalScrollItems from '@src/components/animation/HorizontalScrollItems'
import { SlideUp } from '@src/components/animation/SlideUp'
import { useEffect, useState } from 'react'
import { ExpertTypeRes } from '../expert/ListExpert'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '@src/modules/chatting/api/const'
import { useNavigate } from 'react-router-dom'

const categories = [
  {
    title: 'Tư vấn doanh nghiệp',
    color: 1,
    url: '#'
  },
  {
    title: 'Life Coaching.',
    color: 0,
    url: '#'
  },
  {
    title: 'Well-Being',
    color: 1,
    url: '#'
  },
  {
    title: 'Hướng nghiệp',
    color: 0,
    url: '#'
  },
  {
    title: 'Đào tạo kỹ năng',
    color: 1,
    url: '#'
  },
  {
    title: 'Cố vấn chiến lược',
    color: 0,
    url: '#'
  }
]

export default function CategoriesExpert() {
  const [expertType, setExpertType] = useState<ExpertTypeRes['expert_types']>([])
  const [isLoadingTypes, setIsLoadingTypes] = useState(true)
  const navigate = useNavigate()
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

  return (
    <div className='mt-10'>
      <SlideUp className='text-center mb-1 flex flex-col items-center'>
        <h2 className='text-black text-4xl font-semibold leading-tight'>LỰA CHỌN HẠNG MỤC CHUYÊN GIA</h2>
      </SlideUp>
      <HorizontalScrollItems>
        {expertType.map((category, index) => (
          <div
            onClick={() => navigate(`/expert?type=${category.expert_type_id}`)}
            className={`rounded-3xl md:rounded-4xl w-[150px] cursor-pointer h-[120px] md:w-[260px] md:h-[230px] relative hover:underline flex flex-col justify-center items-center p-1 md:p-3 ${
              index % 2 === 0 ? 'bg-primary' : 'bg-white'
            } ${index % 2 !== 0 && 'border-secondary border'}`}
          >
            <a className='text-secondary text-[22px] md:text-[32.4px] md:leading-[44px] font-medium text-center '>
              {category.name}
            </a>

            <Box
              className='absolute top-1 right-1'
              component='img'
              src='/assets/images/components/next.png'
              alt='Arrow'
              height={{ xs: 16, md: 41 }}
              sx={{ filter: 'brightness(0)' }}
            />
          </div>
        ))}
      </HorizontalScrollItems>
    </div>
  )
}
