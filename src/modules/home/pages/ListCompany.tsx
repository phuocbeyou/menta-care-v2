import { Box } from '@mui/material'
import { CustomSwiper, SwiperSlide } from '@src/components/swiper'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import ItemCompany from '../components/list-company/ItemCompany'

const listCompany = [
  {
    id: 1,
    start: 5,
    title: 'Công ty Công nghệ FPT Software',
    subtitle: 'Hàng đầu về giải pháp công nghệ thông tin'
  },
  {
    id: 2,
    start: 4.8,
    title: 'Tập đoàn Vingroup',
    subtitle: 'Tổ hợp kinh doanh đa ngành hàng đầu Việt Nam'
  },
  {
    id: 3,
    start: 4.9,
    title: 'Ngân hàng Techcombank',
    subtitle: 'Ngân hàng số đi đầu trong đổi mới sáng tạo'
  },
  {
    id: 4,
    start: 4.6,
    title: 'Tập đoàn Masan Group',
    subtitle: 'Công ty tiêu dùng và tài nguyên hàng đầu'
  },
  {
    id: 5,
    start: 4.7,
    title: 'Công ty VNG Corporation',
    subtitle: 'Công ty công nghệ internet và game hàng đầu'
  },
  {
    id: 6,
    start: 4.5,
    title: 'Tập đoàn TH True Milk',
    subtitle: 'Thương hiệu sữa tươi sạch hàng đầu Việt Nam'
  },
  {
    id: 7,
    start: 4.8,
    title: 'Công ty Shopee Việt Nam',
    subtitle: 'Nền tảng thương mại điện tử hàng đầu Đông Nam Á'
  },
  {
    id: 8,
    start: 4.4,
    title: 'Tập đoàn Hòa Phát',
    subtitle: 'Tập đoàn thép và bất động sản hàng đầu'
  },
  {
    id: 9,
    start: 4.9,
    title: 'Ngân hàng VietinBank',
    subtitle: 'Ngân hàng thương mại cổ phần công nghiệp Việt Nam'
  },
  {
    id: 10,
    start: 4.6,
    title: 'Công ty Samsung Việt Nam',
    subtitle: 'Tập đoàn công nghệ và điện tử hàng đầu thế giới'
  },
  {
    id: 11,
    start: 4.7,
    title: 'Tập đoàn Viettel',
    subtitle: 'Tập đoàn viễn thông và công nghệ hàng đầu'
  },
  {
    id: 12,
    start: 4.3,
    title: 'Công ty Grab Việt Nam',
    subtitle: 'Nền tảng siêu ứng dụng và giao thông hàng đầu'
  },
  {
    id: 13,
    start: 4.8,
    title: 'Tập đoàn PNJ',
    subtitle: 'Công ty vàng bạc đá quý hàng đầu Việt Nam'
  },
  {
    id: 14,
    start: 4.5,
    title: 'Công ty Unilever Việt Nam',
    subtitle: 'Tập đoàn hàng tiêu dùng nhanh toàn cầu'
  },
  {
    id: 15,
    start: 4.6,
    title: 'Tập đoàn Mobifone',
    subtitle: 'Nhà cung cấp dịch vụ viễn thông hàng đầu'
  }
]

export default function ListCompany() {
  return (
    <>
      <Helmet>
        <title> {`List Company - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <div className='mt-4'>
          <CustomSwiper
            spaceBetween={10}
            slidesPerView={'auto'}
            loop={false}
            showNavigation={true}
            navigationPosition={'outside'}
          >
            {listCompany.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <ItemCompany {...item} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </Box>
    </>
  )
}
