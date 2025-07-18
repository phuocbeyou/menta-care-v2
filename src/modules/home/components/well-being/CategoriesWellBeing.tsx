import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { SlideUp } from '@src/components/animation/SlideUp'
import { HOPPINGS, LIST_MUSIC, LIST_PODCAST } from '../../mocks/listMusic'
import { ItemCategory } from './ItemCategory'
import { WriteDiary } from './WriteDiary'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual } from 'swiper/modules'

export function CategoriesWellBeing() {
  const [selected, setSelected] = useState<'music' | 'podcast' | 'diary' | 'personal'>('music')
  const [list, setList] = useState<any[]>([])
  const swiperRef = useRef<any>(null)

  const categories = [
    { id: 'music' as const, label: 'Âm nhạc' },
    { id: 'podcast' as const, label: 'Podcast' },
    { id: 'diary' as const, label: 'Viết nhật ký cảm xúc' },
    { id: 'personal' as const, label: 'Sở thích cá nhân' }
  ]

  useEffect(() => {
    if (selected === 'music') {
      setList(LIST_MUSIC)
    } else if (selected === 'podcast') {
      setList(LIST_PODCAST)
    } else if (selected === 'personal') {
      setList(HOPPINGS)
    } else {
      setList([])
    }
  }, [selected])

  const scrollUp = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const scrollDown = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  return (
    <div className='flex flex-col gap-4'>
      <SlideUp className='flex justify-center mb-4 mt-4'>
        <div className='text-center text-black text-2xl font-bold md:text-5xl md:font-medium md:leading-normal md:w-[60%]'>
          GÁC LẠI NHỮNG BỘN BỀ ÂU LO TRỞ VỀ GÓC BÌNH AN TÂM HỒN
        </div>
      </SlideUp>

      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-center gap-12'>
        {/* Left menu */}
        <nav className='flex flex-col gap-3 md:gap-5 w-full flex-2/3'>
          {categories.map((category) => (
            <div key={category.id} className='flex flex-col gap-3 md:gap-5'>
              <hr
                className={`border-t ${selected === category.id ? 'border-black border-[1.5px]' : 'border-gray-300'}`}
              />
              <div
                className={`text-sm md:text-3xl uppercase tracking-wide leading-none cursor-pointer hover:underline ${
                  selected === category.id ? 'text-black font-medium' : 'text-gray-400 font-light'
                }`}
                onClick={() => setSelected(category.id)}
              >
                {category.label}
              </div>
            </div>
          ))}
        </nav>

        {/* Right content */}
        {selected === 'diary' && <WriteDiary />}

        {selected !== 'diary' && (
          <div className='slider-container bg-primary rounded-3xl p-2 md:p-4 md:px-10 w-full flex flex-col gap-3 relative items-center'>
            {/* Up arrow */}
            <Box
              component='img'
              src='/assets/images/well-being/arrow.png'
              alt='Arrow Up'
              height={{ xs: 30, md: 48 }}
              className='cursor-pointer m-auto'
              onClick={scrollUp}
              sx={{
                transform: 'rotate(270deg)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                '&:hover': {
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  transform: 'rotate(270deg) scale(1.1)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            />

            {/* Swiper Slider */}
            <div className='h-[350px] md:h-[400px] overflow-hidden w-[90%]'>
              <Swiper
                ref={swiperRef}
                direction='vertical'
                slidesPerView={3}
                spaceBetween={8}
                virtual={true}
                modules={[Virtual]}
                className='h-full'
                onSlideChange={() => console.log('slide changed')}
              >
                {list.map((item, index) => (
                  <SwiperSlide key={index} style={{ height: 'auto' }}>
                    <ItemCategory {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Down arrow */}
            <Box
              component='img'
              src='/assets/images/well-being/arrow.png'
              alt='Arrow Down'
              height={{ xs: 30, md: 48 }}
              className='cursor-pointer m-auto'
              onClick={scrollDown}
              sx={{
                transform: 'rotate(90deg)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                '&:hover': {
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  transform: 'rotate(90deg) scale(1.1)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
