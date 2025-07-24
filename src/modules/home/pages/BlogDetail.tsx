import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/blog_detail/Header'
import { Content } from '../components/blog_detail/Content'

export default function BlogDetail() {
  return (
    <>
      <Helmet>
        <title> {`Blog Detail - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 flex flex-col bg-white'>
        <Header />
        <Content />
      </Box>
    </>
  )
}
