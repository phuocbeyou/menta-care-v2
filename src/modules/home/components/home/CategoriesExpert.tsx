import { Box } from '@mui/material'
import HorizontalScrollItems from '@src/components/animation/HorizontalScrollItems'
import { SlideUp } from '@src/components/animation/SlideUp'

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
  return (
    <div className='mt-10'>
      <SlideUp className='text-center mb-1 flex flex-col items-center'>
        <h2 className='text-black text-4xl font-semibold leading-tight'>LỰA CHỌN HẠNG MỤC CHUYÊN GIA</h2>
      </SlideUp>
      <HorizontalScrollItems>
        {categories.map((category) => (
          <div
            className={`rounded-3xl md:rounded-4xl w-[150px] h-[120px] md:w-[260px] md:h-[230px] relative flex flex-col justify-center items-center p-1 md:p-3 ${
              category.color === 1 ? 'bg-primary' : 'bg-white'
            } ${category.color === 0 && 'border-secondary border'}`}
          >
            <a
              href={category.url}
              className='text-secondary text-[22px] md:text-[32.4px] md:leading-[44px] font-sans font-medium underline text-center'
            >
              {category.title}
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
