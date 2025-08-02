import { Box } from '@mui/material'
import { Expert } from '../expert/ListExpert'

export interface HeaderExpertDetailProps {
  expert?: Expert
}

export function HeaderExpertDetail({ expert }: HeaderExpertDetailProps) {
  const scrollToFormBooking = () => {
    const formBooking = document.getElementById('form-booking-expert')
    if (formBooking) {
      const elementTop = formBooking.offsetTop
      const offsetPosition = elementTop - 200

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <main className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6'>
      {/* <!-- Left side --> */}
      <section className='md:w-1/2 flex flex-col items-center'>
        <Box
          component='img'
          src={expert?.avatar_url}
          alt='Arrow'
          height={170}
          width={170}
          sx={{ borderRadius: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.src = '/assets/images/cv/cv-avt-tmp.jpg'
          }}
        />

        <h1 className='mt-4 text-secondary text-2xl font-semibold text-center'>{expert?.name}</h1>
        <p className='text-secondary text-sm font-semibold uppercase mt-1 tracking-wide'>{expert?.title}</p>
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
          className='mt-8 bg-secondary hover:bg-green-700 text-white font-semibold cursor-pointer text-2xl rounded-md px-6 py-2 w-full max-w-md'
          type='button'
          onClick={scrollToFormBooking}
        >
          Đặt lịch ngay
        </button>
      </section>
      {/* <!-- Right side --> */}
      <section className='md:w-1/2 flex flex-col'>
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-1'>About me</p>
          <h2 className='text-secondary text-3xl font-semibold mb-3'>{expert?.title}</h2>
          <p className='text-gray-900 text-base leading-relaxed max-w-xl'>{expert?.description}</p>
        </div>
        <hr className='border-gray-300 w-full my-6' />
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-3'>Experience</p>
          {expert?.experience.map((item) => (
            <div className='flex flex-col gap-3 max-w-xl'>
              <div className='flex gap-6'>
                <p className='font-semibold text-base min-w-[48px]'>{item.duration}</p>
                <div>
                  <p className='font-semibold text-base'>{item.position}</p>
                  <p className='text-gray-900 text-sm'>{item.organization}</p>
                </div>
              </div>
              {/* <div className='flex gap-6'>
         <p className='font-semibold text-base min-w-[48px]'>2018</p>
         <div>
           <p className='font-semibold text-base'>Cử nhân Tâm lý học</p>
           <p className='text-gray-900 text-sm'> Đại học Hutech, TP. Hồ Chí Minh</p>
         </div>
       </div> */}
            </div>
          ))}
        </div>
        <hr className='border-gray-300 w-full my-6' />
        <div>
          <p className='text-secondary text-sm font-semibold uppercase tracking-wide mb-3'>Education</p>
          {expert?.education.map((item) => (
            <div className='flex flex-col gap-3 max-w-xl'>
              <div className='flex gap-6'>
                <p className='font-semibold text-base min-w-[48px]'>{item.year}</p>
                <div>
                  <p className='font-semibold text-base'>{item.institution}</p>
                  <p className='text-gray-900 text-sm'>{item.degree}</p>
                  {/* <p className='text-gray-900 text-sm'> (26 năm kinh nghiệm giảng dạy)</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
