import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { ItemBlog } from './ItemBlog'
import InputBase from '@src/components/input/InputBase'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../../apis/const'

interface GroupBlogReq {
  pagging: number
  amount: number
}

interface GroupBlogRes {
  groups: {
    id: string
    name: string
  }[]
}

export interface ListArticleRes {
  articles: {
    short_description: string
    created_at: string
    thumbnail_uri: string
    redirect: boolean
    html_content: string
    id: string
    group_id: string
    group_name: string
    redirect_uri: string
    title: string
    type: string
  }[]
}

export const HeaderBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState<number>(10)
  const [groupBlog, setGroupBlog] = useState<GroupBlogRes['groups']>([])
  const [listArticle, setListArticle] = useState<ListArticleRes['articles']>([])
  const [isLoadingGroups, setIsLoadingGroups] = useState<boolean>(true)
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true)

  useEffect(() => {
    const fetchGroupBlog = async () => {
      try {
        setIsLoadingGroups(true)
        const res = await callingAPI<GroupBlogRes, GroupBlogReq>(REQUEST_TYPE.get_article_groups, {
          pagging: 0,
          amount: 1805
        })
        setGroupBlog(res.groups || [])
      } catch (error) {
        console.error('Error fetching group blog:', error)
        setGroupBlog([])
      } finally {
        setIsLoadingGroups(false)
      }
    }
    fetchGroupBlog()
  }, [])

  useEffect(() => {
    const fetchListArticle = async () => {
      try {
        setIsLoadingArticles(true)
        const res = await callingAPI<ListArticleRes, GroupBlogReq>(REQUEST_TYPE.list_articles, {
          pagging: 0,
          amount: 1805 // Tăng lên để có nhiều bài viết hơn
        })
        setListArticle(res.articles || [])
      } catch (error) {
        console.error('Error fetching articles:', error)
        setListArticle([])
      } finally {
        setIsLoadingArticles(false)
      }
    }
    fetchListArticle()
  }, [])

  // Tạo categories từ API data
  const categories = [{ id: 'all', name: 'Tất cả' }, ...groupBlog.map((group) => ({ id: group.id, name: group.name }))]

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === 'all' ? listArticle : listArticle.filter((article) => article.group_id === selectedCategory)

  // Get articles to display
  const displayedArticles = filteredArticles.slice(0, displayCount)

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, filteredArticles.length))
  }

  const hasMoreArticles = displayCount < filteredArticles.length

  // Get current category name
  const currentCategoryName = categories.find((cat) => cat.id === selectedCategory)?.name || 'Tất cả'

  return (
    <div className='mb-10'>
      <div className='bg-secondary min-h-[120px] flex flex-col items-center justify-center py-6 px-4 '>
        <h1 className='text-white font-bold text-3xl md:text-4xl mb-4'>Category: {currentCategoryName}</h1>
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
          {isLoadingGroups
            ? // Loading skeleton cho categories
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rectangular'
                  width={140}
                  height={32}
                  sx={{ borderRadius: 20, margin: '4px' }}
                />
              ))
            : categories.map((item) => (
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
          {isLoadingArticles
            ? // Loading skeleton cho articles
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className='border border-gray-200 rounded-lg overflow-hidden shadow-md'>
                  <Skeleton variant='rectangular' width='100%' height={200} />
                  <div className='p-4'>
                    <Skeleton variant='text' width='80%' height={24} sx={{ mb: 1 }} />
                    <Skeleton variant='text' width='100%' height={16} />
                    <Skeleton variant='text' width='60%' height={16} />
                  </div>
                </div>
              ))
            : displayedArticles.map((article) => <ItemBlog key={article.id} data={article} />)}
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
