import { SlideUp } from '@src/components/animation/SlideUp'
import { getAuthToken } from '@src/stores/authHelpers'
import { useNavigate } from 'react-router-dom'

export function Explore() {
  const navigate = useNavigate()
  return (
    <div className='py-10'>
      <SlideUp className='flex justify-center'>
        <h2 className='text-center text-4xl font-semibold leading-relaxed mb-3'>
          KHÁM PHÁ, CHIA SẺ VÀ PHÁT TRIỂN BỀN VỮNG CÙNG CỘNG ĐỒNG!
        </h2>
      </SlideUp>
      <SlideUp delay={0.2} className='flex justify-center'>
        <p className='text-center text-xl mb-12'>
          Kết nối nhanh với đồng nghiệp và chuyên gia – trao đổi trực tiếp, xây dựng mối quan hệ bền chặt.
        </p>
      </SlideUp>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12'>
        <div>
          <button className='border-2 border-secondary rounded-2xl px-6 py-2 font-bold text-black mb-4 w-full max-w-xs mx-auto'>
            CỘNG ĐỒNG
          </button>
          <p className='text-lg leading-relaxed'>
            Tham gia nhóm chuyên đề – chia sẻ kiến thức, thảo luận giải pháp và hỗ trợ lẫn nhau.
          </p>
        </div>
        <div>
          <button className='border-2 border-secondary rounded-2xl px-6 py-2 font-bold text-black mb-4 w-full max-w-xs mx-auto'>
            SỰ KIỆN
          </button>
          <p className='text-lg leading-relaxed'>
            Khám phá hội thảo, workshop và webinar sắp tới – cập nhật xu hướng, nhận chứng chỉ.
          </p>
        </div>
        <div>
          <button className='border-2 border-secondary rounded-2xl px-6 py-2 font-bold text-black mb-4 w-full max-w-xs mx-auto'>
            KHÓA HỌC
          </button>
          <p className='text-lg leading-relaxed'>
            Truy cập các khoá học bài bản – từ cơ bản đến nâng cao, do chuyên gia thiết kế và dẫn dắt.
          </p>
        </div>
        <div>
          <button className='border-2 border-secondary rounded-2xl px-6 py-2 font-bold text-black mb-4 w-full max-w-xs mx-auto'>
            THƯ VIỆN
          </button>
          <p className='text-lg leading-relaxed'>
            Khai thác nguồn tài nguyên: bài viết, báo cáo, mẫu biểu và case study chuyên sâu.
          </p>
        </div>
      </div>
      <div className='flex'>
        <button
          onClick={() => navigate('/auth')}
          className={`bg-secondary text-white font-semibold rounded-2xl md:w-[500px] w-full mx-auto py-2 text-center text-base leading-tight cursor-pointer ${getAuthToken() ? 'hidden' : ''}`}
        >
          TẠO TÀI KHOẢN ĐỂ ĐƯỢC MỞ KHÓA TÍNH NĂNG
        </button>
      </div>
    </div>
  )
}
