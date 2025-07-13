import { Helmet } from 'react-helmet-async'

import { CONFIG } from '@src/config-global'

import { Button } from '@mui/material'
import ThemeToggle from '@src/components/theme/ThemeToggle'
import { Icon } from '@iconify/react'

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Helmet>
        <title> {`Dashfdsboard - ${CONFIG.appName}`}</title>
        <meta
          name='description'
          content='The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style'
        />
        <meta name='keywords' content='react,material,kit,application,dashboard,admin,template' />
      </Helmet>
      <div className='bg-primary text-white p-4'>Test màu đỏ Tailwind</div>
      <div className='font-bold text-2xl'>home page</div>
      <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5'>123</div>
      <Button variant='contained' color='error'>
        Click me
      </Button>
      <ThemeToggle />
      <Icon icon='mingcute:ad-rectangle-fill' width='46' height='46' />
    </>
  )
}
