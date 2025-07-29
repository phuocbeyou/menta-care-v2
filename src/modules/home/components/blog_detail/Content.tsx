import { Box, Skeleton } from '@mui/material'
import { BlogDetailRes } from '../../pages/BlogDetail'

export const Content = ({ data, isLoading }: { data?: BlogDetailRes; isLoading?: boolean }) => {
  if (isLoading) {
    return (
      <div className='prose prose-lg max-w-none'>
        {/* Loading skeleton */}
        <section className='mb-8'>
          <Skeleton variant='text' width='60%' height={36} sx={{ mb: 2 }} />
          <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
          <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
          <Skeleton variant='text' width='80%' height={20} sx={{ mb: 2 }} />
          <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
          <Skeleton variant='text' width='90%' height={20} />
        </section>

        {/* Main Image Skeleton */}
        <Skeleton variant='rectangular' width='100%' height={300} sx={{ borderRadius: 2, mb: 4 }} />

        {/* Content Skeleton */}
        <section className='mb-8'>
          <Skeleton variant='text' width='50%' height={32} sx={{ mb: 3 }} />

          {/* Multiple content blocks */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='bg-gray-50 p-6 rounded-lg mb-6'>
              <Skeleton variant='text' width='80%' height={28} sx={{ mb: 2 }} />
              <Skeleton variant='text' width='100%' height={16} sx={{ mb: 1 }} />
              <Skeleton variant='text' width='100%' height={16} sx={{ mb: 1 }} />
              <Skeleton variant='text' width='70%' height={16} sx={{ mb: 2 }} />
              <Skeleton variant='rectangular' width='100%' height={200} sx={{ borderRadius: 2, mb: 2 }} />
              <Skeleton variant='text' width='60%' height={16} sx={{ mb: 1 }} />
              <Skeleton variant='text' width='55%' height={16} sx={{ mb: 1 }} />
              <Skeleton variant='text' width='65%' height={16} />
            </div>
          ))}
        </section>

        {/* CTA Skeleton */}
        <Skeleton variant='rectangular' width='100%' height={120} sx={{ borderRadius: 2 }} />
      </div>
    )
  }

  return (
    <div className='prose prose-lg max-w-none'>
      {/* Introduction Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold text-secondary mb-4'>{data?.title || 'Nội dung bài viết'}</h2>
        <div
          className='text-gray-700 leading-relaxed'
          dangerouslySetInnerHTML={{
            __html: data?.html_content || '<p>Nội dung đang được tải...</p>'
          }}
        />
      </section>

      {/* Additional content will be rendered from API html_content */}

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
