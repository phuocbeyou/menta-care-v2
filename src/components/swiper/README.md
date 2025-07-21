# CustomSwiper Component

Component Swiper tái sử dụng với navigation buttons và nhiều tùy chọn cấu hình.

## Cách sử dụng

```tsx
import { CustomSwiper, SwiperSlide } from '@components/swiper'

function MyComponent() {
  return (
    <CustomSwiper
      spaceBetween={10}
      slidesPerView={'auto'}
      loop={false}
      showNavigation={true}
      navigationPosition={'outside'}
    >
      <SwiperSlide>
        <div>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
    </CustomSwiper>
  )
}
```

## Props

| Prop                 | Type                         | Default        | Mô tả                               |
| -------------------- | ---------------------------- | -------------- | ----------------------------------- |
| `children`           | `ReactNode`                  | -              | Nội dung slides                     |
| `spaceBetween`       | `number`                     | `10`           | Khoảng cách giữa các slides         |
| `slidesPerView`      | `number \| 'auto'`           | `'auto'`       | Số slides hiển thị (auto = tự động) |
| `loop`               | `boolean`                    | `false`        | Có loop vô tận không                |
| `direction`          | `'horizontal' \| 'vertical'` | `'horizontal'` | Hướng scroll                        |
| `className`          | `string`                     | `'h-full'`     | CSS class cho Swiper                |
| `style`              | `CSSProperties`              | `{}`           | Inline styles                       |
| `showNavigation`     | `boolean`                    | `true`         | Hiển thị navigation buttons         |
| `navigationPosition` | `'inside' \| 'outside'`      | `'outside'`    | Vị trí navigation buttons           |
| `onSlideChange`      | `(swiper: any) => void`      | -              | Callback khi slide thay đổi         |

## Ví dụ sử dụng

### 1. Swiper cơ bản

```tsx
<CustomSwiper>
  <SwiperSlide>Content 1</SwiperSlide>
  <SwiperSlide>Content 2</SwiperSlide>
</CustomSwiper>
```

### 2. Swiper với breakpoints

```tsx
<CustomSwiper
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }}
>
  {/* slides */}
</CustomSwiper>
```

### 3. Swiper không có navigation

```tsx
<CustomSwiper showNavigation={false}>{/* slides */}</CustomSwiper>
```

### 4. Swiper với navigation bên trong

```tsx
<CustomSwiper navigationPosition={'inside'}>{/* slides */}</CustomSwiper>
```

## Tính năng

- ✅ Navigation buttons tự động disable khi ở đầu/cuối
- ✅ Hover effects cho navigation buttons
- ✅ Responsive design
- ✅ Tùy chỉnh vị trí navigation
- ✅ Callback khi slide thay đổi
- ✅ CSS styles được tích hợp sẵn
