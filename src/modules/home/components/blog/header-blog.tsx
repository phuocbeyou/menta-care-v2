import { Button } from '@mui/material'
import { useState } from 'react'
import { blogArticlesData } from '../../../../_mock/_data'
import { ItemBlog } from './ItemBlog'
import InputBase from '@src/components/input/InputBase'

const CATEGORY = [
  { id: 1, name: 'Tất cả' },
  { id: 2, name: 'Thuật ngữ' },
  { id: 3, name: 'Chiến lược' },
  { id: 4, name: 'Phân tích' },
  { id: 5, name: 'Quản lý' },
  { id: 6, name: 'Phát triển' }
]

export const HeaderBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1)
  const [displayCount, setDisplayCount] = useState<number>(10)

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === 1
      ? blogArticlesData
      : blogArticlesData.filter((article: any) => {
          const categoryMap: { [key: number]: string } = {
            2: 'Thuật ngữ',
            3: 'Chiến lược',
            4: 'Phân tích',
            5: 'Quản lý',
            6: 'Phát triển'
          }
          return article.category === categoryMap[selectedCategory]
        })

  // Get articles to display
  const displayedArticles = filteredArticles.slice(0, displayCount)

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, filteredArticles.length))
  }

  const hasMoreArticles = displayCount < filteredArticles.length

  return (
    <div className='mb-10'>
      <div className='bg-secondary min-h-[120px] flex flex-col items-center justify-center py-6 px-4 '>
        <h1 className='text-white font-bold text-3xl md:text-4xl mb-4'>
          Category: {CATEGORY.find((item) => item.id === selectedCategory)?.name}
        </h1>
        <form className='flex items-center space-x-2 mb-4'>
          <InputBase placeholder='Tìm kiếm ...' />
          <Button
            sx={{
              height: 56,
              '&:hover': {
                backgroundColor: '#8bb18a'
              },
              '&:active': {
                backgroundColor: '#8bb18a'
              }
            }}
            variant='contained'
            color='primary'
          >
            <div className='text-black'>Tìm kiếm</div>
          </Button>
        </form>
        <div className='flex space-x-6 text-primary text-xl'>
          <a href='#' aria-label='Facebook' className='hover:text-white text-white'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#' aria-label='LinkedIn' className='hover:text-white text-white'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='#' aria-label='Twitter' className='hover:text-white text-white'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' aria-label='Email' className='hover:text-white text-white'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>

      <div className='py-6 px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:gap-4 max-w-6xl mx-auto'>
          {CATEGORY.map((item) => (
            <button
              key={item.id}
              className={`text-green-900 border border-green-900 rounded-full px-4 py-1 text-sm lg:text-base whitespace-nowrap transition-all m-1  lg:m-0 duration-200 hover:bg-green-50 min-w-[120px] lg:min-w-[140px] ${
                selectedCategory === item.id ? 'bg-secondary text-white hover:bg-secondary' : ''
              }`}
              onClick={() => {
                setSelectedCategory(item.id)
                setDisplayCount(10) // Reset display count when changing category
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Articles Grid */}
      <div className='max-w-7xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedArticles.map((article: any) => (
            <ItemBlog key={article.id} {...article} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreArticles && (
          <div className='flex justify-center mt-8'>
            <Button
              onClick={handleLoadMore}
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 12,
                py: 2,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: '#1f7a4a'
                }
              }}
            >
              <div className='text-white text-xl'>Xem thêm</div>
            </Button>
          </div>
        )}

        {/* Show total count */}
        <div className='text-center mt-4 text-gray-600'>
          Hiển thị {displayedArticles.length} / {filteredArticles.length} bài viết
        </div>
      </div>
    </div>
  )
}
