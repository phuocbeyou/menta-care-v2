import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/blog_detail/Header'
import { Content } from '../components/blog_detail/Content'
import { useParams } from 'react-router-dom'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '../apis/const'
import { useEffect, useState } from 'react'

interface BlogDetailReq {
  id: string
}
export interface BlogDetailRes {
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
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>()
  const [blogDetail, setBlogDetail] = useState<BlogDetailRes | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setIsLoading(true)
        const res = await callingAPI<BlogDetailRes, BlogDetailReq>(REQUEST_TYPE.get_article_details, { id: id || '' })
        setBlogDetail(res)
      } catch (error) {
        console.error('Error fetching blog detail:', error)
        setBlogDetail(undefined)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchBlogDetail()
    }
  }, [id])

  return (
    <>
      <Helmet>
        <title> {`Blog Detail - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 flex flex-col bg-white'>
        <Header data={blogDetail} isLoading={isLoading} />
        <Content data={blogDetail} isLoading={isLoading} />
      </Box>
    </>
  )
}
