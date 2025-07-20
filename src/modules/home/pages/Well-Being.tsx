import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { HeaderWellBeing } from '../components/well-being/header-well-being'
import { CategoriesWellBeing } from '../components/well-being/CategoriesWellBeing'
import AdviceOnline from '../components/well-being/AdviceOnline'

export default function WellBeing() {
  return (
    <>
      <Helmet>
        <title> {`Well-Being - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderWellBeing />
        <CategoriesWellBeing />
        <AdviceOnline />
      </Box>
    </>
  )
}
