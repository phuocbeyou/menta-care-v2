import { Box } from '@mui/material'
import HorizontalScrollItems from '@src/components/animation/HorizontalScrollItems'
import { SlideUp } from '@src/components/animation/SlideUp'

const categories = [
  {
    name: 'Nguyễn Mạnh Hùng',
    title: 'Chuyên gia AI',
    description: 'Từng nhận ACM SIGAI Industry Award (2021), báo cáo tại InterSpeech.',
    image: '/assets/images/avatar/ai-manhdung.png'
  },
  {
    name: 'TS Hồng Duyên ',
    title: 'Chuyên gia Quản trị',
    description: 'Gần 25 năm công tác tại các Tập đoàn lớn như Vingroup, Doji, ...',
    image: '/assets/images/avatar/ts-hongduyen.png'
  },
  {
    name: 'TS Hoàng Huệ',
    title: 'Tư vấn Chuyên môn',
    description: 'Phân tích nguyên nhân, những yếu tố tác động đến sức khỏe tinh thần và các giải pháp',
    image: '/assets/images/avatar/ts-hoanghue.png'
  }
]

export default function TeamExpert() {
  return (
    <div>
      <SlideUp className='text-center mb-1 flex flex-col items-center'>
        <h2 className='text-black text-5xl font-semibold leading-tight md:w-[60%]'>
          Đội Ngũ Chuyên Gia hàng đầu Được Chứng Nhận
        </h2>
      </SlideUp>
      <HorizontalScrollItems>
        {categories.map((category) => (
          <div className='max-w-xs w-full border border-secondary rounded-xl p-2 flex flex-col items-center relative'>
            <div className='w-full rounded-lg overflow-hidden bg-primary ' style={{ height: 165 }}>
              <Box
                component='img'
                src={category.image}
                alt={category.name}
                height={235}
                sx={{ objectFit: 'cover', margin: 'auto' }}
              />
            </div>
            <p className='mt-4 text-center text-sm text-black'>{category.title}</p>
            <h2 className='mt-1 text-center text-secondary font-semibold text-xl leading-tight'>{category.name}</h2>
            <p className='mt-2 text-center text-gray-800 text-mm leading-3'>{category.description}</p>
            <div className='w-full flex justify-end mt-auto text-secondary text-3xl'>
              <Box
                component='img'
                src='/assets/images/components/next.png'
                alt='Arrow'
                height={41}
                sx={{ filter: 'brightness(0)', cursor: 'pointer' }}
              />
            </div>
          </div>
        ))}
      </HorizontalScrollItems>
    </div>
  )
}
