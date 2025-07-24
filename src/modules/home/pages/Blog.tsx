import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { HeaderBlog } from '../components/blog/header-blog'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 flex flex-col bg-white'>
        <HeaderBlog />
      </Box>
    </>
  )
}
