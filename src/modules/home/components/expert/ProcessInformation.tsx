import { SlideUp } from '@src/components/animation/SlideUp'

export function ProcessInformation() {
  return (
    <div>
      <SlideUp delay={0.1} className='flex justify-center'>
        <h1 className='text-center text-black text-4xl font-semibold mb-4'>QUY TRÌNH XÁC THỰC CHUYÊN GIA</h1>
      </SlideUp>
      <div className='bg-primary rounded-2xl p-3'>
        <h2 className='text-center text-secondary text-3xl font-semibold mb-6'>CAM KẾT VỀ CHẤT LƯỢNG VÀ SỰ TIN CẬY</h2>
        <p className='text-black leading-relaxed mb-6 text-2xl text-justify'>
          Tại MentaCare, chúng tôi hiểu rằng nền tảng của mọi sự thay đổi tích cực đến từ sự tin tưởng. Lòng tin của bạn
          là ưu tiên hàng đầu của chúng tôi. Đó là lý do chúng tôi xây dựng một quy trình xác thực chuyên gia đa tầng,
          nghiêm ngặt và minh bạch.
        </p>
        <p className='text-black leading-relaxed text-2xl text-justify'>
          Mục tiêu của quy trình này không chỉ là để đảm bảo mỗi chuyên gia trên nền tảng của chúng tôi đều có trình độ
          chuyên môn xuất sắc, mà còn để chắc chắn rằng họ có chung một giá trị cốt lõi: sự tận tâm, đạo đức và khát
          khao đồng hành cùng sự phát triển của bạn. Huy hiệu "CERTIFIED" mà bạn thấy không chỉ là một biểu tượng, đó là
          một lời cam kết.
        </p>
      </div>
    </div>
  )
}
