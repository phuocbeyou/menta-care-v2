import { useEffect, useRef, useState } from 'react'
import { Box, Skeleton } from '@mui/material'
import { SlideUp } from '@src/components/animation/SlideUp'
import { ItemCategory } from './ItemCategory'
import { WriteDiary } from './WriteDiary'
import { Swiper, SwiperSlide } from 'swiper/react'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../../apis/const'
import {
  getYouTubeThumbnailWithFallback,
  isYouTubeUrl,
  getYouTubeVideoDuration
} from '@src/shared/utils/youtube-thumbnail'

const categories = [
  { id: 'music' as const, label: 'Âm nhạc' },
  { id: 'podcast' as const, label: 'Podcast' },
  { id: 'diary' as const, label: 'Viết nhật ký cảm xúc' },
  { id: 'yoga' as const, label: 'Yoga động tác thư giãn' },
  { id: 'story' as const, label: 'Truyện ngủ ngon' }
]

interface AudioContentRes {
  items: {
    created_at: string
    content_type: string
    thumbnail_uri: string
    uri: string
    content_id: string
    name: string
  }[]
}

interface AudioContentReq {
  content_type: string
  pagging: number
  amount: number
}

interface MappedAudioItem {
  title: string
  time: string
  image: string
  isPlaying: boolean
  divRef: null
  uri: string
}

const FALLBACK_IMAGE = 'https://storage.googleapis.com/a1aa/image/b5e67944-41ac-48ed-6c51-1512f815f13c.jpg'

export function CategoriesWellBeing() {
  const [selected, setSelected] = useState<'music' | 'podcast' | 'diary' | 'yoga' | 'story'>('music')
  const [list, setList] = useState<MappedAudioItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const swiperRef = useRef<any>(null)

  // Function to get video duration (supports YouTube URLs and fallback)
  const getVideoDuration = async (uri: string): Promise<string> => {
    try {
      // Check if it's a YouTube URL
      if (uri && isYouTubeUrl(uri)) {
        // Try to get real YouTube duration (without API key for now)
        const duration = await getYouTubeVideoDuration(uri)
        return duration
      }

      // For non-YouTube content, use random duration
      const minutes = Math.floor(Math.random() * 30) + 5 // Random time between 5-35 minutes
      return `${minutes} phút`
    } catch {
      return '10 phút'
    }
  }

  // Function to handle image error and fallback
  const getImageWithFallback = (thumbnailUri: string, uri: string) => {
    // Check if uri is a YouTube URL and get thumbnail from YouTube
    if (uri && isYouTubeUrl(uri)) {
      const youtubeThumbnail = getYouTubeThumbnailWithFallback(uri, 'high', FALLBACK_IMAGE)
      return youtubeThumbnail
    }

    // Use provided thumbnail_uri or fallback
    return thumbnailUri || FALLBACK_IMAGE
  }

  useEffect(() => {
    const fetching = async () => {
      try {
        setIsLoading(true)
        const response = await callingAPI<AudioContentRes, AudioContentReq>(REQUEST_TYPE.get_audio_content, {
          content_type: selected,
          pagging: 0,
          amount: 185200000
        })

        // Map API data to ItemCategory props with placeholder time
        const mappedItems: MappedAudioItem[] = (response.items || []).map((item) => ({
          title: item.name || 'Không có tiêu đề',
          time: '-- phút', // Placeholder, will be updated async
          image: getImageWithFallback(item.thumbnail_uri, item.uri),
          isPlaying: false,
          divRef: null,
          uri: item.uri
        }))

        if (selected === 'story') {
          mappedItems.sort((a, b) => {
            return a.title.localeCompare(b.title)
          })
        }

        setList(mappedItems)

        // Async update durations for each item
        mappedItems.forEach(async (item, index) => {
          try {
            const duration = await getVideoDuration(item.uri)
            setList((prevList) =>
              prevList.map((prevItem, prevIndex) => (prevIndex === index ? { ...prevItem, time: duration } : prevItem))
            )
          } catch (error) {
            console.warn('Error getting duration for item:', item.title, error)
          }
        })
      } catch (error) {
        console.error('Error fetching audio content:', error)
        setList([])
      } finally {
        setIsLoading(false)
      }
    }

    fetching()
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

  // Skeleton loading component
  const SkeletonItem = () => (
    <div className='flex items-center bg-white rounded-3xl w-full p-2 md:rounded-full h-[100px] md:h-[120px]'>
      <Skeleton variant='circular' width={70} height={70} animation='pulse' className='flex-shrink-0' />
      <div className='ml-2 flex flex-col gap-1 flex-1'>
        <Skeleton variant='text' width='80%' height={24} animation='pulse' />
        <Skeleton variant='text' width='60%' height={20} animation='pulse' />
      </div>
      <Skeleton variant='circular' width={40} height={40} animation='pulse' className='flex-shrink-0' />
    </div>
  )

  return (
    <div className='flex flex-col gap-4'>
      <SlideUp className='flex justify-center mb-4 mt-4'>
        <div className='text-center text-black text-2xl font-semibold md:text-4xl md:font-medium md:leading-normal md:w-[60%]'>
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
              {isLoading ? (
                // Skeleton Loading
                <div className='space-y-2'>
                  {[...Array(3)].map((_, index) => (
                    <SkeletonItem key={index} />
                  ))}
                </div>
              ) : list.length > 0 ? (
                // Actual Content
                <Swiper
                  ref={swiperRef}
                  direction='vertical'
                  slidesPerView={3}
                  spaceBetween={8}
                  // virtual={true}
                  // modules={[Virtual]}
                  className='h-full'
                >
                  {list.map((item, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }}>
                      <ItemCategory {...item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Empty State
                <div className='flex flex-col items-center justify-center h-full text-center'>
                  <div className='text-gray-500 text-lg mb-2'>📝</div>
                  <div className='text-gray-600 font-medium'>Không có nội dung</div>
                  <div className='text-gray-500 text-sm'>Thử chọn danh mục khác</div>
                </div>
              )}
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
