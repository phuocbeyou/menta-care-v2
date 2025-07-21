import { Box } from '@mui/material'
import { useRef, useState, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Add basic Swiper styles
const swiperStyles = `
  .swiper {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    width: auto;
  }
  .swiper-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
  }
`

interface CustomSwiperProps {
  children: ReactNode
  spaceBetween?: number
  slidesPerView?: number | 'auto'
  loop?: boolean
  direction?: 'horizontal' | 'vertical'
  className?: string
  style?: React.CSSProperties
  showNavigation?: boolean
  navigationPosition?: 'inside' | 'outside'
  onSlideChange?: (swiper: any) => void
}

export function CustomSwiper({
  children,
  spaceBetween = 10,
  slidesPerView = 'auto',
  loop = false,
  direction = 'horizontal',
  className = 'h-full',
  style = {},
  showNavigation = true,
  navigationPosition = 'outside',
  onSlideChange
}: CustomSwiperProps) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef<any>(null)

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

  const handleSlideChange = (swiper: any) => {
    console.log(swiper)
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
    onSlideChange?.(swiper)
  }

  const navigationButtons = showNavigation ? (
    <>
      <Box
        component='img'
        src='/assets/images/well-being/arrow.png'
        alt='Arrow Left'
        height={{ xs: 30, md: 48 }}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 ${
          isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={!isBeginning ? scrollUp : undefined}
        sx={{
          transform: 'rotate(180deg)',
          filter: isBeginning
            ? 'grayscale(50%) brightness(0) drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            : 'brightness(0) drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          '&:hover': !isBeginning
            ? {
                filter: 'brightness(0) drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                transform: 'rotate(180deg) scale(1.1)',
                transition: 'all 0.2s ease-in-out'
              }
            : {}
        }}
      />

      <Box
        component='img'
        src='/assets/images/well-being/arrow.png'
        alt='Arrow Right'
        height={{ xs: 30, md: 48 }}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 ${
          isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={!isEnd ? scrollDown : undefined}
        sx={{
          transform: 'rotate(0deg)',
          filter: isEnd
            ? 'grayscale(50%) brightness(0) drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            : 'brightness(0) drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          '&:hover': !isEnd
            ? {
                filter: 'brightness(0) drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                transform: 'rotate(0deg) scale(1.1)',
                transition: 'all 0.2s ease-in-out'
              }
            : {}
        }}
      />
    </>
  ) : null

  return (
    <div className='relative'>
      <style>{swiperStyles}</style>
      {navigationButtons}

      <div
        className={`w-[100%] items-center justify-center overflow-hidden ${
          navigationPosition === 'inside' ? 'px-12' : ''
        }`}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={loop}
          direction={direction}
          className={className}
          style={{
            width: '100%',
            height: 'auto',
            overflow: 'visible',
            ...style
          }}
          onSlideChange={handleSlideChange}
        >
          {children}
        </Swiper>
      </div>
    </div>
  )
}

// Export SwiperSlide for convenience
export { SwiperSlide }
