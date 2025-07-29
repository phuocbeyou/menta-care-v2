import { Box, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListArticleRes } from './header-blog'
import dayjs from 'dayjs'

interface BlogItemProps {
  data?: ListArticleRes['articles'][0]
}

export const ItemBlog = ({ data }: BlogItemProps) => {
  const navigate = useNavigate()
  return (
    <article
      className='bg-white rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'
      onClick={() => {
        navigate(`/blog/${data?.id}`)
      }}
    >
      <div className='relative'>
        <img
          alt='People working with laptops and notebooks on wooden table, top view'
          className='w-full h-40 object-cover'
          src={data?.thumbnail_uri || '/assets/images/blog/avt-blog.png'}
          onError={(e) => (e.currentTarget.src = '/assets/images/blog/avt-blog.png')}
        />
        <div className='absolute bottom-0 left-0 -mb-8 ml-2  rounded-full p-3 w-14 h-14 flex items-center justify-center'>
          <Box
            component='img'
            alt='HOCVIENHR.COM white logo'
            className='mb-2 w-12'
            height='48'
            src={'assets/images/blog/avt-blog.png'}
            width='48'
            sx={{
              borderRadius: '50%'
            }}
          />
        </div>
      </div>
      <div className='pt-5 px-5 pb-2 flex flex-col flex-1'>
        <div>
          <h3 className='font-semibold text-md leading-snug mb-2'>{data?.title}</h3>
          <p className='text-gray-500 text-sm leading-relaxed mb-1 line-clamp-3'>{data?.short_description}</p>
        </div>
        <div className='flex flex-col mt-auto'>
          <Divider />
          <div className='flex items-center text-gray-500 text-xs font-light space-x-2 mt-1'>
            {/* <span>{data?.author}</span>
            <span>•</span> */}
            {/* convert milisecond to date */}
            <time dateTime={data?.created_at}>{dayjs.unix(Number(data?.created_at)).format('DD/MM/YYYY')}</time>
          </div>
        </div>
      </div>
    </article>
  )
}
