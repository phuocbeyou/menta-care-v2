import { Helmet } from 'react-helmet-async'
import { CONFIG } from '@src/config-global'
import { HeaderHome } from '../components/header-home'
import { NavigateBox } from '../components/NavigateBox'
import { Box, Button } from '@mui/material'
import { AiBox } from '../components/AiBox'
import { PhoneBanner } from '../components/PhoneBanner'
import { SupportBanner } from '../components/SupportBanner'
import CategoriesExpert from '../components/CategoriesExpert'
import TeamExpert from '../components/TeamExpert'
import AdviceOnline from '../components/AdviceOnline'
import Sponsor from '../components/Sponsor'

export default function Home() {
  return (
    <>
      <Helmet>
        <title> {`Home - ${CONFIG.appName}`}</title>
        <meta
          name='description'
          content='The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style'
        />
        <meta name='keywords' content='react,material,kit,application,dashboard,admin,template' />
      </Helmet>
      <Box className='mx-auto px-6 py-6 flex flex-col bg-white'>
        <HeaderHome />
        <Box className='flex flex-col md:flex-row gap-4 mt-36 justify-end'>
          <NavigateBox
            className='w-full md:w-[30%] '
            title='Trò chuyện hỗ'
            subtitle='trợ 24/7'
            icon='/assets/images/components/ai.png'
          />{' '}
          <NavigateBox
            className='w-full md:w-[30%]'
            title='Ghép nối chuyên gia được hỗ trợ bởi AI'
            icon='/assets/images/components/chip-ai.png'
          />{' '}
          <NavigateBox
            className='w-full md:w-[30%]'
            title='Các chuyên gia hàng đầu trong từng lĩnh vực'
            icon='/assets/images/components/cer.png'
          />
        </Box>
        <Box className='flex my-15 justify-end'>
          <AiBox height={100} />
        </Box>
        <PhoneBanner />
        <Box className='flex justify-end'>
          <AiBox height={100} />
        </Box>
        <SupportBanner />
        <Box className='flex my-8 justify-end'>
          <AiBox height={100} />
        </Box>
        <CategoriesExpert />
        <TeamExpert />
        <AdviceOnline />
        <Sponsor />

        <Box className='flex flex-col md:flex-row justify-between my-8 gap-4'>
          <Button
            variant='contained'
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              fontWeight: 500,
              px: 8,
              fontSize: '1.125rem',
              textDecoration: 'underline',
              textDecorationColor: 'white',
              textDecorationThickness: 2,
              py: 1.4,
              mt: 'auto',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'secondary.dark'
              }
            }}
          >
            TRỞ THÀNH ĐỐI TÁC CỦA CHÚNG TÔI
          </Button>

          <AiBox />
        </Box>
      </Box>
    </>
  )
}
