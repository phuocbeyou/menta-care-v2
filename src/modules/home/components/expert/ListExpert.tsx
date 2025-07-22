import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import { CustomSwiper, SwiperSlide } from '@components/swiper'
import { ItemExpert, ItemExpertProps } from './ItemExpert'

const listCategory = [
  {
    id: 1,
    name: 'Tư vấn doanh nghiệp'
  },
  {
    id: 2,
    name: 'Life Coaching'
  },
  {
    id: 3,
    name: 'Well-being'
  },
  {
    id: 4,
    name: 'Hướng nghiệp'
  },
  {
    id: 5,
    name: 'Đào tạo kỹ năng'
  },
  {
    id: 6,
    name: 'Cố vấn chiến lược'
  }
]

const listExpert: ItemExpertProps[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 1,
    exp: 10,
    rating: 4.5,
    field: 'Chuyên gia tư vấn doanh nghiệp'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 1,
    exp: 8,
    rating: 4.8,
    field: 'Chuyên gia tư vấn doanh nghiệp'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 1,
    exp: 12,
    rating: 4.6,
    field: 'Chuyên gia tư vấn doanh nghiệp'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 1,
    exp: 15,
    rating: 4.9,
    field: 'Chuyên gia tư vấn doanh nghiệp'
  },
  {
    id: 5,
    name: 'Hoàng Văn E',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 2,
    exp: 7,
    rating: 4.7,
    field: 'Life Coaching'
  },
  {
    id: 6,
    name: 'Vũ Thị F',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 2,
    exp: 9,
    rating: 4.4,
    field: 'Life Coaching'
  },
  {
    id: 7,
    name: 'Đặng Văn G',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 2,
    exp: 11,
    rating: 4.8,
    field: 'Life Coaching'
  },
  {
    id: 8,
    name: 'Bùi Thị H',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 3,
    exp: 6,
    rating: 4.5,
    field: 'Well-being'
  },
  {
    id: 9,
    name: 'Ngô Văn I',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 3,
    exp: 10,
    rating: 4.6,
    field: 'Well-being'
  },
  {
    id: 10,
    name: 'Lý Thị K',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 3,
    exp: 8,
    rating: 4.7,
    field: 'Well-being'
  },
  {
    id: 11,
    name: 'Hồ Văn L',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 4,
    exp: 9,
    rating: 4.4,
    field: 'Hướng nghiệp'
  },
  {
    id: 12,
    name: 'Dương Thị M',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 4,
    exp: 12,
    rating: 4.8,
    field: 'Hướng nghiệp'
  },
  {
    id: 13,
    name: 'Tô Văn N',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 5,
    exp: 7,
    rating: 4.5,
    field: 'Đào tạo kỹ năng'
  },
  {
    id: 14,
    name: 'Châu Thị O',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 5,
    exp: 10,
    rating: 4.6,
    field: 'Đào tạo kỹ năng'
  },
  {
    id: 15,
    name: 'Mai Văn P',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 6,
    exp: 14,
    rating: 4.9,
    field: 'Cố vấn chiến lược'
  },
  {
    id: 16,
    name: 'Lâm Thị Q',
    avatar: '/assets/images/expert/avatar.jpg',
    category: 6,
    exp: 11,
    rating: 4.7,
    field: 'Cố vấn chiến lược'
  }
]

export function ListExpert() {
  const [value, setValue] = useState<number>(1)
  return (
    <div className='my-4 mb-14'>
      <div className='sm:hidden'>
        <Autocomplete
          disablePortal
          options={listCategory}
          renderInput={(params) => <TextField {...params} label='Chọn lĩnh vực' />}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          clearIcon={false}
          value={listCategory.find((item) => item.id === value)}
          onChange={(_, newValue) => {
            setValue(newValue?.id || 1)
          }}
        />
      </div>

      {/* <!-- Button group for tablet and above --> */}
      <div className='hidden sm:flex flex-wrap gap-2'>
        {listCategory.map((item) => (
          <button
            key={item.id}
            className={`border cursor-pointer border-secondary text-secondary rounded-2xl text-1xl py-2 px-4 whitespace-nowrap ${
              value === item.id ? 'bg-secondary text-white font-semibold' : ''
            }`}
            onClick={() => setValue(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className='mt-4'>
        <CustomSwiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          showNavigation={true}
          navigationPosition={'outside'}
        >
          {listExpert
            ?.filter((e) => e.category === value)
            .map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ height: 'auto', display: 'flex', justifyContent: 'center', width: 'auto' }}
              >
                <ItemExpert {...item} />
              </SwiperSlide>
            ))}
        </CustomSwiper>
      </div>
    </div>
  )
}
