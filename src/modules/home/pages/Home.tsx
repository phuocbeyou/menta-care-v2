import { Helmet } from 'react-helmet-async'
import { CONFIG } from '@src/config-global'
import { HeaderHome } from '../components/home/header-home'
import { NavigateBox } from '../components/home/NavigateBox'
import { Box, Button } from '@mui/material'
import { PhoneBanner } from '../components/home/PhoneBanner'
import { SupportBanner } from '../components/home/SupportBanner'
import CategoriesExpert from '../components/home/CategoriesExpert'
import TeamExpert from '../components/home/TeamExpert'
import AdviceOnline from '../components/home/AdviceOnline'
import Sponsor from '../components/home/Sponsor'

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
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
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

        <PhoneBanner />

        <SupportBanner />

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
        </Box>
      </Box>
    </>
  )
}
