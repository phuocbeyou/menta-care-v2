import { Box } from '@mui/material'

export const Content = () => {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Introduction Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold text-secondary mb-4'>Tại sao công nghệ quan trọng trong đào tạo nhân sự?</h2>
        <p className='text-gray-700 leading-relaxed mb-4'>
          Trong thời đại số hóa hiện nay, việc ứng dụng công nghệ vào đào tạo nhân sự không còn là lựa chọn mà trở thành
          yêu cầu bắt buộc. Các doanh nghiệp cần phải thích ứng nhanh chóng với những thay đổi của thị trường và công
          nghệ.
        </p>
        <p className='text-gray-700 leading-relaxed'>
          Công nghệ giúp tối ưu hóa quy trình đào tạo, tiết kiệm chi phí và thời gian, đồng thời nâng cao hiệu quả học
          tập của nhân viên.
        </p>
      </section>

      {/* Main Image */}
      <Box
        component='img'
        src='https://storage.googleapis.com/a1aa/image/96cab06c-fdee-49dc-2dd6-a9bbcab441aa.jpg'
        alt='Công nghệ đào tạo nhân sự'
        className='w-full h-auto rounded-lg mb-8 shadow-md'
        sx={{ objectFit: 'cover' }}
      />

      {/* 8 Applications Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold text-secondary mb-6'>8 Ứng dụng công nghệ trong đào tạo nhân sự</h2>

        <div className='space-y-6'>
          {/* Application 1 */}
          <div className='bg-gray-50 p-6 rounded-lg'>
            <h3 className='text-xl font-semibold text-secondary mb-3'>1. Hệ thống LMS (Learning Management System)</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              LMS là nền tảng quản lý học tập trực tuyến, cho phép doanh nghiệp tạo, quản lý và theo dõi các khóa học
              nội bộ. Hệ thống này giúp tối ưu hóa quy trình đào tạo và đánh giá hiệu quả học tập.
            </p>
            <Box
              component='img'
              src='https://storage.googleapis.com/a1aa/image/d1a72184-c58e-4ac2-7bdb-3de4275f03f0.jpg'
              alt='LMS System'
              className='w-full h-64 object-cover rounded-lg mb-4'
              sx={{ objectFit: 'cover' }}
            />
            <ul className='list-disc list-inside text-gray-700 space-y-1'>
              <li>Quản lý khóa học tập trung</li>
              <li>Theo dõi tiến độ học tập</li>
              <li>Đánh giá và báo cáo tự động</li>
            </ul>
          </div>

          {/* Application 2 */}
          <div className='bg-gray-50 p-6 rounded-lg'>
            <h3 className='text-xl font-semibold text-secondary mb-3'>
              2. Virtual Reality (VR) và Augmented Reality (AR)
            </h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              VR và AR tạo ra môi trường học tập tương tác, cho phép nhân viên thực hành trong các tình huống thực tế mà
              không gặp rủi ro. Đặc biệt hiệu quả trong đào tạo kỹ năng thực hành.
            </p>
            <Box
              component='img'
              src='https://storage.googleapis.com/a1aa/image/4c004ef9-5cb9-492e-1c45-8dae9c2cc1cf.jpg'
              alt='VR Training'
              className='w-full h-64 object-cover rounded-lg mb-4'
              sx={{ objectFit: 'cover' }}
            />
            <ul className='list-disc list-inside text-gray-700 space-y-1'>
              <li>Mô phỏng tình huống thực tế</li>
              <li>Thực hành an toàn</li>
              <li>Tăng trải nghiệm học tập</li>
            </ul>
          </div>

          {/* Application 3 */}
          <div className='bg-gray-50 p-6 rounded-lg'>
            <h3 className='text-xl font-semibold text-secondary mb-3'>3. Microlearning và Mobile Learning</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Microlearning chia nhỏ nội dung học tập thành các bài học ngắn, dễ tiếp thu. Kết hợp với mobile learning,
              nhân viên có thể học mọi lúc, mọi nơi.
            </p>
            <Box
              component='img'
              src='https://storage.googleapis.com/a1aa/image/96cab06c-fdee-49dc-2dd6-a9bbcab441aa.jpg'
              alt='Mobile Learning'
              className='w-full h-64 object-cover rounded-lg mb-4'
              sx={{ objectFit: 'cover' }}
            />
            <ul className='list-disc list-inside text-gray-700 space-y-1'>
              <li>Học tập linh hoạt</li>
              <li>Tăng khả năng ghi nhớ</li>
              <li>Tiết kiệm thời gian</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold text-secondary mb-4'>Kết luận</h2>
        <p className='text-gray-700 leading-relaxed mb-4'>
          Việc ứng dụng công nghệ trong đào tạo nhân sự không chỉ là xu hướng mà còn là chiến lược cốt lõi để doanh
          nghiệp phát triển bền vững trong thời đại số.
        </p>
        <p className='text-gray-700 leading-relaxed'>
          Để thành công, doanh nghiệp cần có kế hoạch triển khai rõ ràng, đầu tư vào cơ sở hạ tầng công nghệ và đào tạo
          nhân viên sử dụng các công cụ mới một cách hiệu quả.
        </p>
      </section>

      {/* Call to Action */}
      <div className='bg-secondary text-white p-6 rounded-lg text-center'>
        <h3 className='text-xl font-bold mb-3'>Sẵn sàng ứng dụng công nghệ vào đào tạo nhân sự?</h3>
        <p className='mb-4'>Tải ngay tài liệu chi tiết về 8 ứng dụng công nghệ trong đào tạo nhân sự</p>
        <button className='bg-white text-secondary font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors'>
          TẢI TÀI LIỆU MIỄN PHÍ
        </button>
      </div>
    </div>
  )
}
