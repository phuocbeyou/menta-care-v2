import { Box, Skeleton } from '@mui/material'
import { BlogDetailRes } from '../../pages/BlogDetail'
import dayjs from 'dayjs'

export const Header = ({ data, isLoading }: { data?: BlogDetailRes; isLoading?: boolean }) => {
  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
        {/* Left Column - Content */}
        <div className='flex flex-col justify-start'>
          {isLoading ? (
            <Skeleton variant='text' width='90%' height={48} sx={{ mb: 2 }} />
          ) : (
            <h1 className='text-secondary font-semibold text-2xl lg:text-3xl leading-[1.3] mb-3'>
              {data?.title || 'Tiêu đề bài viết'}
            </h1>
          )}

          {isLoading ? (
            <>
              <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
              <Skeleton variant='text' width='80%' height={20} sx={{ mb: 3 }} />
            </>
          ) : (
            <p className='text-black text-sm lg:text-base mb-6 leading-relaxed'>
              {data?.short_description || 'Mô tả ngắn về bài viết...'}
            </p>
          )}

          <button
            className='bg-secondary text-white font-semibold text-sm uppercase py-3 rounded flex items-center gap-2 hover:bg-[#0a2f1d] transition-colors w-full max-w-[340px] justify-center'
            type='button'
          >
            DOWNLOAD TÀI LIỆU
            <i className='fas fa-arrow-right'></i>
          </button>

          <div className='flex items-center text-secondary text-sm mt-6 space-x-2 select-none'>
            <i className='far fa-user-circle text-[18px]'></i>
            <span>Viết bởi: MentaCare</span>
            <i className='far fa-calendar-alt text-[18px] ml-4'></i>
            {isLoading ? (
              <Skeleton variant='text' width={80} height={16} />
            ) : (
              <span>{data?.created_at ? dayjs.unix(parseInt(data.created_at)).format('DD/MM/YYYY') : ''}</span>
            )}
          </div>
        </div>

        {/* Right Column - Image with Social Buttons */}
        <div className='flex flex-col items-center justify-center'>
          {isLoading ? (
            <Skeleton variant='rectangular' width='100%' height={400} sx={{ borderRadius: 2, mb: 2 }} />
          ) : (
            <Box
              component='img'
              src={data?.thumbnail_uri || '/assets/images/blog/avt-blog.png'}
              onError={(e: any) => (e.currentTarget.src = '/assets/images/blog/avt-blog.png')}
              className='w-full h-auto max-h-[400px] object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg'
              sx={{
                objectFit: 'cover',
                border: '1px solid #e0e0e0'
              }}
            />
          )}

          {/* Social Share Buttons - Smaller */}
          <div className='flex gap-2'>
            <a
              className='bg-[#3b5998] text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center justify-center gap-1 w-[90px] hover:bg-[#2d4373] transition-colors'
              href='#'
            >
              <i className='fab fa-facebook-f text-xs'></i>
              <span className='text-xs'>Facebook</span>
            </a>
            <a
              className='bg-[#1da1f2] text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center justify-center gap-1 w-[90px] hover:bg-[#1a91da] transition-colors'
              href='#'
            >
              <i className='fab fa-twitter text-xs'></i>
              <span className='text-xs'>Twitter</span>
            </a>
            <a
              className='bg-[#0077b5] text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center justify-center gap-1 w-[90px] hover:bg-[#005885] transition-colors'
              href='#'
            >
              <i className='fab fa-linkedin-in text-xs'></i>
              <span className='text-xs'>LinkedIn</span>
            </a>
            <a
              className='bg-[#bd081c] text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center justify-center gap-1 w-[90px] hover:bg-[#a30718] transition-colors'
              href='#'
            >
              <i className='fab fa-pinterest-p text-xs'></i>
              <span className='text-xs'>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
