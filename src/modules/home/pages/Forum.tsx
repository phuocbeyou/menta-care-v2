import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { HeaderForum } from '../components/forum/header-forum'
import { FounderMessage } from '../components/forum/founder-message'
import { Faq } from '../components/forum/faq'
import { SoftwareCompany } from '../components/forum/software-company'
import { Explore } from '../components/forum/explore'
import ForumDiscussion from '../components/forum/ForumDiscussion'

export function Forum() {
  return (
    <>
      <Helmet>
        <title> {`Forum - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderForum />
        <FounderMessage />
        <Faq />
        <SoftwareCompany />
        <Explore />
        <ForumDiscussion />
      </Box>
    </>
  )
}
