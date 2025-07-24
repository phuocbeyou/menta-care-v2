import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function HeaderExpertDetail() {
  const navigate = useNavigate()
  return (
    <main className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6'>
      {/* <!-- Left side --> */}
      <section className='md:w-1/2 flex flex-col items-center'>
        <Box
          component='img'
          src='https://storage.googleapis.com/a1aa/image/96cab06c-fdee-49dc-2dd6-a9bbcab441aa.jpg'
          alt='Arrow'
          height={160}
          sx={{ filter: 'brightness(0)', borderRadius: '50%' }}
        />

        <h1 className='mt-4 text-secondary text-2xl font-semibold text-center'>NGUYỄN THỊ MINH KHANG</h1>
        <p className='text-secondary text-sm font-semibold uppercase mt-1 tracking-wide'>
          Proactive Mental Health Coach
        </p>
        <hr className='border-gray-300 w-full my-6' />
        <p className='text-secondary text-xs font-semibold uppercase tracking-widest mb-3'>Liên hệ</p>
        <div className='flex gap-6 text-gray-800 text-2xl'>
          <a aria-label='Email' href='#'>
            <i className='far fa-envelope'></i>
          </a>
          <a aria-label='Instagram' href='#'>
            <i className='fab fa-instagram'></i>
          </a>
          <a aria-label='Twitter' href='#'>
            <i className='fab fa-twitter'></i>
          </a>
          <a aria-label='Facebook' href='#'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a aria-label='LinkedIn' href='#'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
        <button
          onClick={() => navigate('/order-expert')}
          className='mt-8 bg-secondary hover:bg-green-700 text-white font-semibold text-2xl rounded-md px-6 py-2 w-full max-w-md'
          type='button'
        >
          Đặt lịch ngay
        </button>
      </section>
      {/* <!-- Right side --> */}
      <section className='md:w-1/2 flex flex-col'>
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-1'>About me</p>
          <h2 className='text-secondary text-3xl font-semibold mb-3'>Proactive Mental Health Coach</h2>
          <p className='text-gray-900 text-base leading-relaxed max-w-xl'>
            Huấn luyện viên sức khỏe tinh thần chủ động với hơn 6 năm kinh nghiệm trong lĩnh vực tư vấn và chăm sóc sức
            khỏe toàn diện. Tôi kết hợp chuyên môn về tâm lý học, huấn luyện sức khỏe và thực hành chánh niệm để hỗ trợ
            thân chủ quản lý căng thẳng, nâng cao trí tuệ cảm xúc và tìm lại sự an yên, cân bằng trong cuộc sống. Là
            đồng sáng lập SMILE MIND, tôi đồng hành cùng nhiều chương trình phát triển nội tâm như “Sống An” và “Thiền &
            Sống Tỉnh Thức”, mang lại giá trị thiết thực cho cộng đồng. new media.
          </p>
        </div>
        <hr className='border-gray-300 w-full my-6' />
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-3'>Experience</p>
          <div className='flex flex-col gap-3 max-w-xl'>
            <div className='flex gap-6'>
              <p className='font-semibold text-base min-w-[48px]'>2018</p>
              <div>
                <p className='font-semibold text-base'>Thạc sĩ Ngôn ngữ Anh</p>
                <p className='text-gray-900 text-sm'> Đại học Victoria, Australia</p>
              </div>
            </div>
            <div className='flex gap-6'>
              <p className='font-semibold text-base min-w-[48px]'>2018</p>
              <div>
                <p className='font-semibold text-base'>Cử nhân Tâm lý học</p>
                <p className='text-gray-900 text-sm'> Đại học Hutech, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-gray-300 w-full my-6' />
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-3'>Education</p>
          <div className='flex flex-col gap-3 max-w-xl'>
            <div className='flex gap-6'>
              <p className='font-semibold text-base min-w-[48px]'>2006</p>
              <div>
                <p className='font-semibold text-base'>Thạc sĩ Ngôn ngữ Anh</p>
                <p className='text-gray-900 text-sm'>Đại học Victoria, Australia</p>
                <p className='text-gray-900 text-sm'> (26 năm kinh nghiệm giảng dạy)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
