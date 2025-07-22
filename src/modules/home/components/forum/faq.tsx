import { SlideUp } from '@src/components/animation/SlideUp'

export function Faq() {
  return (
    <div className='mt-16 py-10'>
      <h1 className='text-center text-black text-4xl font-semibold mb-8'>CHÚNG TÔI MUỐN LẮNG NGHE NHU CẦU CỦA BẠN!</h1>
      <div className='flex flex-col sm:flex-row gap-6 justify-center bg'>
        <div className='bg-primary rounded-3xl p-4 w-full flex flex-col' style={{ minWidth: '280px' }}>
          <SlideUp>
            <h2 className='text-black font-semibold text-xl mb-4 leading-relaxed text-center'>
              Bạn muốn xây dựng những hoạt động nào trong cộng đồng của chúng ta?
            </h2>
          </SlideUp>
          <div className='bg-white p-3 rounded-3xl'>
            <a href='#' className='block bg-primary rounded-lg p-3 mb-3  text-black leading-tight text-lg'>
              <SlideUp>Đặt câu hỏi cho chuyên gia</SlideUp>
            </a>
            <a href='#' className='block bg-primary rounded-lg p-3 mb-3  text-black leading-tight text-lg'>
              <SlideUp delay={0.1}>Cùng xây thư viện tài liệu</SlideUp>
            </a>
            <a href='#' className='block bg-primary rounded-lg p-3 mb-3  text-black leading-tight text-lg'>
              <SlideUp delay={0.2}>Cùng chia sẻ Best Practises</SlideUp>
            </a>
            <a href='#' className='block bg-primary rounded-lg p-3 text-black leading-tight'>
              <SlideUp delay={0.3}>Cùng xây thư viện giải pháp cho các vấn đề thường gặp trong doanh nghiệp</SlideUp>
            </a>
          </div>
        </div>
        <div className='bg-primary rounded-3xl p-4 w-full flex flex-col' style={{ minWidth: '280px' }}>
          <h2 className='text-black font-semibold text-2xl mb-4 leading-tight text-center'>
            TƯƠNG TÁC <br />
            HỢP TÁC THÀNH CÔNG!
          </h2>
          <SlideUp direction='ltr'>
            <p className='text-lg text-black mb-6 text-center leading-relaxed'>
              Kết nối với các chuyên gia, chia sẻ insight và xây dựng mạng lưới nhân sự chất lượng. Cùng nhau tạo ra giá
              trị và đi đến thành công bền vững!
            </p>
          </SlideUp>

          <a
            href='#'
            className='font-semibold text-white bg-secondary rounded-md px-3 py-1 w-max mx-auto text-lg mt-auto'
          >
            TÌM CHUYÊN GIA CỦA BẠN NGAY
          </a>
        </div>
      </div>
    </div>
  )
}
