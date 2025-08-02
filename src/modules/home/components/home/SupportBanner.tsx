import { Box } from '@mui/material'
import { SlideUp } from '@src/components/animation/SlideUp'
import { useNavigate } from 'react-router-dom'

export function SupportBanner() {
  const navigate = useNavigate()

  return (
    <div className='w-full relative mt-10'>
      <SlideUp className='text-center mb-6 flex flex-col items-center'>
        <Box component='img' src='/assets/images/components/next.png' alt='Arrow' height={41} />

        <h2 className='text-black text-4xl font-semibold leading-tight'>BẠN CẦN HỖ TRỢ NGAY LẬP TỨC?</h2>
        <p className='text-2xl mt-1'>Chatbot của chúng tôi luôn sẵn sàng 24/7</p>
      </SlideUp>
      <div className='border border-secondary rounded-4xl flex flex-col sm:flex-row items-center sm:items-stretch justify-between text-secondary relative '>
        {/* <!-- Arrow icon top-right of container --> */}
        <div
          className='absolute top-4 right-4 cursor-pointer z-10 hover:opacity-70'
          onClick={() => {
            navigate('/chatting')
          }}
          style={{
            width: '41px',
            height: '41px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src='/assets/images/components/next.png'
            alt='Arrow'
            style={{
              height: '41px',
              filter: 'brightness(0)',
              pointerEvents: 'none'
            }}
          />
        </div>

        <div className='flex-1 flex flex-col items-center sm:items-start p-6 relative text-center sm:text-left'>
          <h3 className='font-semibold text-xl leading-snug mb-3 text-[2rem]'>
            Trợ lý
            <br />
            gợi ý
          </h3>
          <p
            className='text-black  decoration-black leading-relaxed max-w-xs text-[1.3rem] cursor-pointer hover:underline'
            onClick={() => navigate('/chatting')}
          >
            Nhận câu trả lời cho
            <br />
            thắc mắc chuyên môn.
          </p>
          {/* <!-- Vertical line --> */}
          <div className='hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 h-[80%] border-r border-secondary'></div>
        </div>
        <div className='flex-1 flex flex-col items-center sm:items-start p-6 relative text-center sm:text-left'>
          <h3 className='font-semibold text-xl leading-snug mb-3 text-[2rem]'>
            Chuyển tiếp
            <br />
            chuyên gia
          </h3>
          <p
            className='text-black  decoration-black  leading-relaxed max-w-xs text-[1.3rem] cursor-pointer hover:underline'
            onClick={() => navigate('/expert')}
          >
            Khi cần ý kiến sâu hoặc
            <br />
            hỗ trợ cá nhân hóa.
          </p>
          {/* <!-- Vertical line --> */}
          <div className='hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 h-[80%] border-r border-secondary'></div>
        </div>
        <div className='flex-1 flex flex-col p-6 text-center sm:text-left relative'>
          <div>
            <h3 className='font-semibold text-xl leading-snug mb-3 text-secondary text-[2rem]'>
              Tài nguyên
              <br />
              đa dạng
            </h3>
            <p
              className='text-black decoration-black  leading-relaxed max-w-xs text-[1.3rem] cursor-pointer hover:underline'
              onClick={() => navigate('/blog')}
            >
              Truy cập nhanh đến các
              <br />
              bài viết, mẫu tài liệu,
              <br />
              video hướng dẫn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
