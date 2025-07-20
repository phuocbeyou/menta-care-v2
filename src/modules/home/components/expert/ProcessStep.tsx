import { useEffect, useState } from 'react'
import { SlideUp } from '@src/components/animation/SlideUp'

export function ProcessStep() {
  const [selected, setSelected] = useState<'step1' | 'step2' | 'step3' | 'step4' | 'step5'>('step1')

  const categories = [
    { id: 'step1' as const, label: 'Bước 1' },
    { id: 'step2' as const, label: 'Bước 2' },
    { id: 'step3' as const, label: 'Bước 3' },
    { id: 'step4' as const, label: 'Bước 4' },
    { id: 'step5' as const, label: 'Tại sao quy trình này lại quan trọng?' }
  ]

  const Step1 = () => {
    return (
      <div className='bg-primary rounded-[30px] w-full p-3'>
        <div className='bg-white rounded-[50px] max-w-[420px] mx-auto py-3 px-8 text-center text-black text-xl md:text-2xl font-bold leading-4'>
          SÀNG LỌC HỒ SƠ VÀ KINH NGHIỆM
        </div>
        <p className='mt-6 text-black text-xl md:text-2xl font-normal leading-relaxed'>
          Mọi chuyên gia khi đăng ký tham gia MentaCare đều phải nộp một bộ hồ sơ chi tiết. Chúng tôi không chỉ xem xét
          kinh nghiệm làm việc mà còn đánh giá sâu về các case study thực tế, lĩnh vực chuyên môn và triết lý hành nghề
          của họ để đảm bảo sự phù hợp với các tiêu chuẩn của MentaCare.
        </p>
      </div>
    )
  }
  const Step2 = () => {
    return (
      <div className='bg-primary rounded-[30px] w-full p-3'>
        <div className='bg-white rounded-[50px] max-w-[500px] mx-auto py-3 px-8 text-center text-black text-xl md:text-2xl font-bold leading-4'>
          XÁC THỰC BẰNG CẤP VÀ CHỨNG CHỈ CHUYÊN MÔN
        </div>
        <p className='text-black leading-relaxed text-xl md:text-2xl mt-4'>
          Đây là bước kiểm tra quan trọng nhất. Đội ngũ của chúng tôi sẽ tiến hành:
        </p>
        <ul className='list-circle text-black text-xl md:text-2xl leading-relaxed'>
          <li>
            Kiểm tra chéo: Xác thực tính hợp lệ của các bằng cấp, chứng chỉ đào tạo chuyên sâu và giấy phép hành nghề
            (nếu có) với các trường đại học và tổ chức cấp chứng nhận.
          </li>
          <li>
            Kiểm tra uy tín: Đảm bảo các chứng chỉ được cấp bởi các tổ chức uy tín trong nước và quốc tế, như các đối
            tác MentaCare đã công bố.
          </li>
        </ul>
      </div>
    )
  }
  const Step3 = () => {
    return (
      <div className='bg-primary rounded-[30px] w-full p-3'>
        <div className='bg-white rounded-[50px] max-w-[500px] mx-auto py-3 px-8 text-center text-black text-xl md:text-2xl font-bold leading-4'>
          PHỎNG VẤN CHUYÊN MÔN <br />& ĐÁNH GIÁ NĂNG LỰC
        </div>
        <p className='text-black leading-relaxed text-xl md:text-2xl mt-4'>
          Một hồ sơ tốt là chưa đủ. Các ứng viên tiềm năng sẽ tham gia một buổi phỏng vấn trực tiếp với Hội đồng chuyên
          môn của MentaCare. Trong buổi này, chúng tôi đánh giá:
        </p>
        <ul className='list-circle  text-black text-xl md:text-2xl leading-relaxed'>
          <li>Năng lực tư vấn: Khả năng lắng nghe, thấu cảm, đặt câu hỏi và kỹ năng giải quyết vấn đề.</li>
          <li>Đạo đức nghề nghiệp: Cách xử lý các tình huống giả định nhạy cảm, phức tạp.</li>
        </ul>
        <p className='text-black text-xl md:text-2xl leading-relaxed'>
          Sự phù hợp: Mức độ tương thích với văn hóa và sứ mệnh của MentaCare.
        </p>
      </div>
    )
  }
  const Step4 = () => {
    return (
      <div className='bg-primary rounded-[30px] w-full p-3'>
        <div className='bg-white rounded-[50px] max-w-[500px] mx-auto py-3 px-8 text-center text-black text-xl md:text-2xl font-bold leading-4 uppercase'>
          Đào tạo Hội nhập và Cam kết Tuân thủ Quy tắc
        </div>
        <p className='text-black leading-relaxed text-xl md:text-2xl mt-4'>
          Chỉ những chuyên gia vượt qua 3 bước trên mới được mời tham gia chương trình đào tạo hội nhập của MentaCare.
          Tại đây, họ được huấn luyện về cách sử dụng nền tảng và phải ký cam kết tuân thủ Quy tắc Ứng xử & Đạo đức của
          chúng tôi, bao gồm các điều khoản nghiêm ngặt về bảo mật thông tin khách hàng và duy trì tiêu chuẩn dịch vụ
          cao nhất.
        </p>
      </div>
    )
  }
  const Step5 = () => {
    return (
      <div className='bg-primary rounded-[30px] w-full p-3'>
        <ul className='list-circle  text-black text-xl md:text-2xl leading-relaxed'>
          <li>
            Đối với Khách hàng: Bạn có thể yên tâm tuyệt đối rằng mọi chuyên gia bạn kết nối đều đã được chúng tôi kiểm
            chứng kỹ lưỡng. Bạn đang đặt niềm tin vào những người không chỉ giỏi chuyên môn mà còn thực sự đáng tin cậy.
          </li>
          <li>
            Đối với Chuyên gia: Chúng tôi tạo ra một cộng đồng tinh hoa, một môi trường chuyên nghiệp và có tiêu chuẩn
            cao. Việc trở thành chuyên gia của MentaCare là một sự khẳng định về uy tín và năng lực của chính bạn.
          </li>
        </ul>
      </div>
    )
  }

  useEffect(() => {
    if (selected === 'step1') {
    }
  }, [selected])

  return (
    <div className='flex flex-col gap-4 mt-15'>
      <SlideUp className='flex justify-center mb-4 mt-4'>
        <div className='text-center text-secondary text-2xl font-bold md:text-4xl md:leading-normal md:w-[60%]'>
          Quy trình xác thực 4 bước của chúng tôi
        </div>
      </SlideUp>

      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-center gap-12'>
        {/* Left menu */}
        <nav className='flex flex-col gap-2 md:gap-4 w-full flex-2/3'>
          {categories.map((category) => (
            <div key={category.id} className='flex flex-col gap-2 md:gap-4'>
              <hr
                className={`border-t ${selected === category.id ? 'border-black border-[1.5px]' : 'border-gray-300'}`}
              />
              <div
                className={`text-sm md:text-3xl uppercase tracking-wide leading-none cursor-pointer hover:underline ${
                  selected === category.id ? 'text-black font-medium' : 'text-gray-400 font-light'
                }`}
                onClick={() => setSelected(category.id)}
              >
                <div className='leading-5'>{category.label}</div>
              </div>
            </div>
          ))}
        </nav>

        {selected === 'step1' && <Step1 />}
        {selected === 'step2' && <Step2 />}
        {selected === 'step3' && <Step3 />}
        {selected === 'step4' && <Step4 />}
        {selected === 'step5' && <Step5 />}
      </div>
    </div>
  )
}
