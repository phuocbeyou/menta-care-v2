import { Box } from '@mui/material'

export const Header = () => {
  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
        {/* Left Column - Content */}
        <div className='flex flex-col justify-start'>
          <h1 className='text-secondary font-semibold text-2xl lg:text-3xl leading-[1.3] mb-3'>
            8 Ứng dụng công nghệ trong đào tạo nhân sự: phần mềm, phương pháp
          </h1>
          <p className='text-black text-sm lg:text-base mb-6 leading-relaxed'>
            Ai cũng hiểu tầm quan trọng của Ứng Dụng Công Nghệ Trong Đào Tạo Nhân Sự: Chiến Lược Cốt Lõi [...]
          </p>
          <button
            className='bg-secondary text-white font-semibold text-sm uppercase py-3 rounded flex items-center gap-2 hover:bg-[#0a2f1d] transition-colors w-full max-w-[340px] justify-center'
            type='button'
          >
            DOWNLOAD TÀI LIỆU
            <i className='fas fa-arrow-right'></i>
          </button>
          <div className='flex items-center text-secondary text-sm mt-6 space-x-2 select-none'>
            <i className='far fa-user-circle text-[18px]'></i>
            <span>Viết bởi: luongngocanh</span>
            <i className='far fa-calendar-alt text-[18px] ml-4'></i>
            <span>07/22/2025</span>
          </div>
        </div>

        {/* Right Column - Image with Social Buttons */}
        <div className='flex flex-col items-center justify-center'>
          <Box
            component='img'
            src='https://storage.googleapis.com/a1aa/image/4c004ef9-5cb9-492e-1c45-8dae9c2cc1cf.jpg'
            className='w-full h-auto max-h-[400px] object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg'
            sx={{
              objectFit: 'cover'
            }}
          />

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
