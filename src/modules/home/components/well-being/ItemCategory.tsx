import { Box, Skeleton } from '@mui/material'
import { RefObject, useState, useEffect } from 'react'
import { VideoModal } from '@src/components/video-modal'

interface ItemCategoryProps {
  title: string
  time: string
  image: string
  isPlaying: boolean
  divRef: RefObject<HTMLDivElement | null> | null
  uri: string
}

const FALLBACK_IMAGE = 'https://storage.googleapis.com/a1aa/image/b5e67944-41ac-48ed-6c51-1512f815f13c.jpg'

export function ItemCategory({ title, time, image, divRef, uri }: ItemCategoryProps) {
  const [imgSrc, setImgSrc] = useState(image)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handlePlayClick = () => {
    setIsVideoModalOpen(true)
  }

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  // Sync imgSrc with image prop when it changes
  useEffect(() => {
    setImgSrc(image)
    setIsImageLoading(true)
  }, [image])

  const handleImageLoad = () => {
    setIsImageLoading(false)
  }

  const handleImageError = () => {
    setIsImageLoading(false)
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE)
      setIsImageLoading(true) // Show loading again for fallback image
    }
  }

  return (
    <>
      <div
        className='flex items-center bg-white rounded-3xl w-full p-2 md:rounded-full h-[100px] md:h-[120px]'
        ref={divRef}
      >
        <div className='relative flex-shrink-0'>
          {isImageLoading && (
            <Skeleton
              variant='circular'
              width={90}
              height={90}
              animation='pulse'
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.11)'
              }}
            />
          )}
          <Box
            component='img'
            src={imgSrc}
            alt={title || 'Audio thumbnail'}
            height={{ xs: 50, md: 90 }}
            className='rounded-full'
            onLoad={handleImageLoad}
            onError={handleImageError}
            sx={{
              objectFit: 'cover',
              width: { xs: 50, md: 90 },
              opacity: isImageLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </div>
        <div className='ml-2 flex flex-col gap-1 flex-1'>
          <div
            className='text-black text-[1.1rem] font-[400] cursor-pointer hover:underline md:text-lg'
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {title || 'Đang tải...'}
          </div>
          <div className='flex items-center gap-1 text-secondary font-semibold select-none md:text-lg'>
            {/* clock icon */}
            <Box component='img' src='/assets/images/well-being/clock.png' alt='Clock' height={{ xs: 16, md: 20 }} />
            <span>{time || '-- phút'}</span>
          </div>
        </div>
        <Box
          component='img'
          src='/assets/images/well-being/play.png'
          alt='Play button'
          height={{ xs: 30, md: 56 }}
          className='ml-auto cursor-pointer hover:opacity-80 transition-opacity'
          onClick={handlePlayClick}
        />
      </div>

      {/* Video Modal */}
      <VideoModal open={isVideoModalOpen} onClose={handleCloseVideoModal} videoUrl={uri} title={title} />
    </>
  )
}
