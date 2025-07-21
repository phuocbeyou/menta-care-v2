import { Box } from '@mui/material'

export function HeaderIntroduce() {
  return (
    <div>
      <div className='mx-auto px-4'>
        <h2 className='text-4xl mb-2 font-[600]'>VỀ MENTACARE</h2>
      </div>
      <div className='max-w-7xl mx-auto px-4 pb-12 flex flex-col md:flex-row md:justify-between gap-12 md:gap-24'>
        <div className='flex-1 max-w-md'>
          <Box component='img' src='assets/images/introduce/goal.png' height={48} className='my-3' />

          <h3 className='text-secondary font-semibold text-3xl mb-2'>SỨ MỆNH</h3>
          <p className='text-lg text-black mb-2'>Mang đến cuộc sống cân bằng và hạnh phúc cho mọi người bằng cách:</p>
          <ul className='list-disc list-inside text-black text-lg'>
            <li>Ứng dụng công nghệ AI để cá nhân hóa trải nghiệm và kết nối.</li>
            <li>Cung cấp giải pháp linh hoạt, tiện ích cho nhu cầu hàng ngày.</li>
            <li>Xây dựng cộng đồng gắn kết, sẻ chia và cùng phát triển.</li>
          </ul>
        </div>
        <div className='flex-1 max-w-md'>
          <Box component='img' src='assets/images/introduce/insight.png' height={48} className='my-3' />
          <h3 className='text-secondary font-semibold text-3xl mb-2'>TẦM NHÌN</h3>
          <p className='text-lg text-black mb-2'>Trở thành nền tảng AI hàng đầu, đồng hành cùng người dùng:</p>
          <ul className='list-disc list-inside text-black text-lg'>
            <li>Top 1 tại Việt Nam trong 2 năm tới.</li>
            <li>Top 1 tại Đông Nam Á trong 5 năm tới.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
