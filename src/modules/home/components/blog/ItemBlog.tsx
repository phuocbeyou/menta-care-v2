import { Box, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface BlogItemProps {
  id: number
  image: string
  logo: string
  logoBottom: string
  category: string
  title: string
  subtitle: string
  fullTitle: string
  excerpt: string
  author: string
  date: string
}

export const ItemBlog = ({ image, fullTitle, excerpt, author, date, id }: BlogItemProps) => {
  const navigate = useNavigate()
  return (
    <article
      className='bg-white rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'
      onClick={() => {
        navigate(`/blog/${id}`)
      }}
    >
      <div className='relative'>
        <img
          alt='People working with laptops and notebooks on wooden table, top view'
          className='w-full h-40 object-cover'
          src={image}
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
          <h3 className='font-semibold text-md leading-snug mb-2'>{fullTitle}</h3>
          <p className='text-gray-500 text-sm leading-relaxed mb-1 line-clamp-3'>{excerpt}</p>
        </div>
        <div className='flex flex-col mt-auto'>
          <Divider />
          <div className='flex items-center text-gray-500 text-xs font-light space-x-2 mt-1'>
            <span>{author}</span>
            <span>•</span>
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </div>
    </article>
  )
}
