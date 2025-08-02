import { SlideUp } from '@src/components/animation/SlideUp'

export function FounderMessage() {
  return (
    <div className='mx-auto bg-primary rounded-3xl p-4 mt-16'>
      <SlideUp className='flex justify-center'>
        <h1 className='text-secondary text-4xl font-semibold text-center mb-6 leading-tight'>
          THÔNG ĐIỆP ĐẾN TỪ ĐỘI NGŨ SÁNG LẬP
        </h1>
      </SlideUp>

      <p className='text-lg text-black leading-relaxed mb-4'>Kính chào Anh/Chị thành viên cộng đồng,</p>
      <p className='text-lg text-black leading-relaxed mb-4 text-justify'>
        Chúng tôi – đội ngũ sáng lập – luôn tin rằng sức mạnh bền vững không đến từ cá nhân đơn lẻ, mà được kết tinh khi
        mỗi chúng ta cùng san sẻ kinh nghiệm, trao đi sự thấu hiểu và nâng đỡ lẫn nhau. Tại “Nơi Chia Sẻ – Kết Nối”, mỗi
        câu chuyện của Anh Chị chính là viên <em>gạch vững chắc cho nền tảng chung</em>, và mỗi bài học từ cộng đồng là
        động lực để chúng ta cùng vươn xa hơn trên hành trình phát triển nhân sự.{' '}
        <em>
          Hãy tiếp tục mở lòng, đặt câu hỏi và sẻ chia – vì chỉ khi đi cùng nhau, chúng ta mới thực sự tạo dựng được tầm
          ảnh hưởng sâu rộng và giá trị bền lâu.
        </em>
      </p>
      <p className='text-lg text-black leading-relaxed'>
        Trân trọng,
        <br />
        Đội ngũ Founder “Nơi Chia Sẻ – Kết Nối”
      </p>
    </div>
  )
}
