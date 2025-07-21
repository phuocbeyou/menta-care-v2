import { Box } from '@mui/material'

export function ItemFounder() {
  return (
    <div className='bg-secondary rounded-[20px] flex flex-col items-center p-1 w-[190px] text-center text-black relative'>
      <Box
        component={'img'}
        src='https://storage.googleapis.com/a1aa/image/de406f92-2f3b-4422-ebee-7d6b6797b52e.jpg'
        height={120}
        className='rounded-[20px] object-cover relative top-[-65px]'
      />
      <div className='relative top-[-35px]'>
        <p className='text-[14px] leading-relaxed'>Chuyên gia Quản trị</p>
        <h3 className='font-bold text-[14px] leading-relaxed mb-2'>TS Hồng Duyên</h3>
        <p className='text-[14px] leading-relaxed text-white'>
          Gần 25 năm công tác tại các Tập đoàn lớn như Vingroup, Doji, VMG với các vị trí GĐ Nhân sự, GĐ Vận hành, GĐ
          Sale &amp; Marketing. Chuyên gia tư vấn, giám đốc chiến lược cho các doanh nghiệp vừa và nhỏ
        </p>
      </div>
    </div>
  )
}
