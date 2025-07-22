import { useState } from 'react'
import { ItemSoftware } from './ItemSoftware'
import { CustomSwiper, SwiperSlide } from '@src/components/swiper'

const listMenu = [
  {
    name: 'Quản lý vận hành & quy trình nội bộ',
    value: 0
  },
  {
    name: 'Quản trị nhân sự & phát triển nguồn lực',
    value: 1
  },
  {
    name: 'Quản lý tài chính & kế toán',
    value: 2
  },
  {
    name: 'Quản trị khách hàng & kinh doanh',
    value: 3
  },
  {
    name: 'Phân tích dữ liệu & ra quyết định',
    value: 4
  },
  {
    name: 'Bảo mật & quản lý hạ tầng số',
    value: 5
  }
]

const data = [
  // Category 0: Quản lý vận hành & quy trình nội bộ
  {
    id: 1,
    category: 0,
    title: 'ERP (Enterprise Resource Planning)',
    description: 'Tích hợp tất cả các phòng ban (Kế toán, Nhân sự, Kho, Sản xuất...) vào một hệ thống duy nhất',
    icon: 'gear-check'
  },
  {
    id: 2,
    category: 0,
    title: 'BPM (Business Process Management)',
    description: 'Quản lý và tối ưu hóa quy trình nghiệp vụ',
    icon: 'gear-check'
  },
  {
    id: 3,
    category: 0,
    title: 'RPA (Robotic Process Automation)',
    description: 'Tự động hóa các công việc lặp đi lặp lại',
    icon: 'gear-check'
  },
  {
    id: 4,
    category: 0,
    title: 'DMS (Document Management System)',
    description: 'Quản lý tài liệu số, giảm giấy tờ',
    icon: 'gear-check'
  },

  // Category 1: Quản trị nhân sự & phát triển nguồn lực
  {
    id: 5,
    category: 1,
    title: 'HRM/HRIS (Human Resource Management System)',
    description: 'Quản lý hồ sơ, chấm công, tính lương',
    icon: 'gear-check'
  },
  {
    id: 6,
    category: 1,
    title: 'LMS (Learning Management System)',
    description: 'Quản lý đào tạo trực tuyến, phát triển năng lực',
    icon: 'gear-check'
  },
  {
    id: 7,
    category: 1,
    title: 'Performance Management Software',
    description: 'Đánh giá KPIs, OKRs, năng lực nhân viên',
    icon: 'gear-check'
  },
  {
    id: 8,
    category: 1,
    title: 'Recruitment/Talent Acquisition Software',
    description: 'Quản lý tuyển dụng',
    icon: 'gear-check'
  },

  // Category 2: Quản lý tài chính & kế toán
  {
    id: 9,
    category: 2,
    title: 'Accounting Software',
    description: 'Ghi sổ kế toán, báo cáo tài chính',
    icon: 'gear-check'
  },
  {
    id: 10,
    category: 2,
    title: 'Financial Planning & Analysis (FP&A)',
    description: 'Dự báo tài chính, ngân sách, phân tích dòng tiền',
    icon: 'gear-check'
  },
  {
    id: 11,
    category: 2,
    title: 'E-Invoice & Tax Software',
    description: 'Xuất hóa đơn điện tử, khai thuế online',
    icon: 'gear-check'
  },

  // Category 3: Quản trị khách hàng & kinh doanh
  {
    id: 12,
    category: 3,
    title: 'CRM (Customer Relationship Management)',
    description: 'Quản lý thông tin, lịch sử giao dịch, chăm sóc khách hàng',
    icon: 'gear-check'
  },
  {
    id: 13,
    category: 3,
    title: 'Marketing Automation Software',
    description: 'Tự động hóa marketing, gửi email, nuôi dưỡng khách hàng',
    icon: 'gear-check'
  },
  {
    id: 14,
    category: 3,
    title: 'Sales Management Software',
    description: 'Quản lý pipeline bán hàng, báo giá, đơn hàng',
    icon: 'gear-check'
  },
  {
    id: 15,
    category: 3,
    title: 'E-commerce Platform',
    description: 'Thiết lập cửa hàng trực tuyến',
    icon: 'gear-check'
  },

  // Category 4: Phân tích dữ liệu & ra quyết định
  {
    id: 16,
    category: 4,
    title: 'BI (Business Intelligence Tools)',
    description: 'Trực quan hóa và phân tích dữ liệu lớn',
    icon: 'gear-check'
  },
  {
    id: 17,
    category: 4,
    title: 'Data Warehouse & ETL',
    description: 'Kho dữ liệu, chuyển đổi dữ liệu',
    icon: 'gear-check'
  },
  {
    id: 18,
    category: 4,
    title: 'AI/ML Platforms',
    description: 'Ứng dụng AI vào dự đoán, phân tích nâng cao',
    icon: 'gear-check'
  },

  // Category 5: Bảo mật & quản lý hạ tầng số
  {
    id: 19,
    category: 5,
    title: 'Cybersecurity Software',
    description: 'Ngăn chặn tấn công, bảo mật dữ liệu',
    icon: 'gear-check'
  },
  {
    id: 20,
    category: 5,
    title: 'IT Asset Management',
    description: 'Quản lý phần mềm, phần cứng, bản quyền',
    icon: 'gear-check'
  },
  {
    id: 21,
    category: 5,
    title: 'Cloud Management Platforms',
    description: 'Quản lý lưu trữ, hạ tầng đám mây',
    icon: 'gear-check'
  }
]

export function SoftwareCompany() {
  const [selectedMenu, setSelectedMenu] = useState<number>(0)

  const handleMenuClick = (value: number) => {
    setSelectedMenu(value)
  }

  return (
    <div className='pt-10 pb-16'>
      <h2 className='text-center text-black text-4xl font-semibold mb-8'>CÁC PHẦN MỀM CHO DOANH NGHIỆP</h2>

      <div className='flex flex-wrap gap-4 justify-center lg:justify-between'>
        {listMenu.map((item) => (
          <button
            key={item.value}
            onClick={() => handleMenuClick(item.value)}
            className={`rounded-3xl px-3 py-3 text-center text-xs sm:text-sm leading-relaxed font-normal max-w-[170px] whitespace-normal transition-all duration-200 ${
              selectedMenu === item.value
                ? 'bg-secondary text-white'
                : 'bg-white text-black border-2 border-secondary hover:bg-secondary hover:text-white'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className='bg-primary rounded-3xl p-4 mt-2'>
        <CustomSwiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          showNavigation={true}
          navigationPosition={'outside'}
        >
          {data
            ?.filter((e) => e.category === selectedMenu)
            .map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <ItemSoftware {...item} />
              </SwiperSlide>
            ))}
        </CustomSwiper>
      </div>
    </div>
  )
}
