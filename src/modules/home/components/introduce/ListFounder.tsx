import { ItemFounder } from './ItemFounder'
import { CustomSwiper, SwiperSlide } from '@src/components/swiper'

export function ListFounder() {
  return (
    <section className='bg-[#eff9f5] py-2 rounded-3xl'>
      <div className='text-center mb-4'>
        <h2 className='text-center text-black font-semibold text-3xl leading-tight uppercase'>đội ngũ sáng lập</h2>
      </div>

      <CustomSwiper
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={false}
        showNavigation={true}
        navigationPosition={'outside'}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} style={{ paddingTop: 60 }}>
            <ItemFounder key={index} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  )
}
