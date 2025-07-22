export function About() {
  return (
    <div className='py-8'>
      <h1 className='text-center text-secondary font-semibold text-4xl leading-tight'>MEMTACARE</h1>
      <h2 className='text-center font-semibold text-2xl leading-tight mt-1'>BALANCE YOUR LIFE - EMPOWER YOUR MIND</h2>
      <h3 className='text-center text-2xl mt-2 leading-tight'>
        <span className='font-semibold'>Nơi Chia Sẻ – Kết Nối</span>
      </h3>
      <p className='text-center text-2xl mt-1 leading-tight max-w-2xl mx-auto'>
        Giải pháp AI tiên phong kết nối &amp; phát triển cộng đồng HR
      </p>

      <div className='mt-8 flex flex-col md:flex-row md:space-x-8 justify-center items-center'>
        <div
          className='bg-primary rounded-2xl p-3 mb-6 md:mb-0 md:flex-1 text-center md:text-left'
          style={{ maxWidth: '320px' }}
        >
          <p className='text-lg leading-relaxed'>
            Nền tảng “Nơi Chia Sẻ – Kết Nối” ứng dụng trí tuệ nhân tạo để mang đến không gian tương tác, học hỏi và hợp
            tác cho mọi chuyên gia nhân sự. Chỉ với vài thao tác đơn giản sau khi đăng nhập, bạn sẽ nhanh chóng kết nối,
            chia sẻ kinh nghiệm và tiếp cận nguồn tài nguyên chất lượng, cùng xây dựng mạng lưới chuyên nghiệp và bền
            vững.
          </p>
        </div>

        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm leading-relaxed'>
          <div>
            <p className='font-semibold mb-1 text-lg'>Kết nối chuyên gia tức thì</p>
            <p className='text-lg'>
              Tự động gọi ý những Mentor, Coach, Chuyên gia phù hợp để trao đổi, tư vấn, mentoring hoặc đào tạo cá nhân.
            </p>
          </div>
          <div className='mt-1 md:mt-1'>
            <p className='font-semibold mb-1 text-lg'>Khám phá sự kiện</p>
            <p className='text-lg'>
              Xem lịch hội thảo, webinar và workshop nổi bật; đăng ký nhanh để cập nhật xu hướng và nhận chứng chỉ tham
              dự.
            </p>
          </div>
          <div className='mt-6 md:mt-3'>
            <p className='font-semibold mb-1 text-lg'>Tham gia cộng đồng</p>
            <p className='text-lg'>
              Truy cập các thảo luận chuyên đề, đặt câu hỏi và chia sẻ case study – cùng giải quyết thách thức, lan tỏa
              kiến thức.
            </p>
          </div>
          <div className='mt-1 md:mt-3'>
            <p className='font-semibold mb-1 text-lg'>Khoá học &amp; Thư viện kiến thức</p>
            <p className='text-lg'>
              Tiếp cận lộ trình đào tạo đồ sộ: từ khóa học đầy đủ, mini-courses ngắn gọn đến thư viện tài liệu chuyên
              sâu, báo cáo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
