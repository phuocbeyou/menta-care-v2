import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import MoodModal, { MoodModalRef } from '../components/profile/MoodModal'
import { useEffect, useRef } from 'react'
import { LineChart } from '@mui/x-charts'

export default function Profile() {
  const modalRef = useRef<MoodModalRef>(null)

  useEffect(() => {
    setTimeout(() => {
      modalRef.current?.open()
    }, 1000)
  }, [])

  return (
    <>
      <Helmet>
        <title> {`Profile - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        {/* Chart Header */}
        <div className='mb-4'>
          <div className='flex items-center gap-2 mb-2'>
            <span className='text-green-600 text-lg font-medium'>▲ 8,82%</span>
            <span className='text-gray-600'>so với 7 Tháng 6, 2025</span>
          </div>
          <div className='text-gray-500 text-sm'>4 Tháng 7, 2025</div>
        </div>

        <div className='w-full flex justify-center'>
          <LineChart
            xAxis={[
              {
                data: Array.from({ length: 20 }, (_, i) => `${8 + i} Tháng 6`),
                scaleType: 'point',
                tickLabelInterval: (value, index) => index % 7 === 0
              }
            ]}
            yAxis={[
              {
                min: 0,
                max: 10,
                tickNumber: 3
              }
            ]}
            series={[
              {
                data: [6, 6.5, 9, 4.5, 5, 8, 4.5, 2.5, 3, 2, 7, 8.5, 8, 3, 7, 4.5, 4, 6, 1, 1],
                color: '#4caf50',
                curve: 'linear'
              }
            ]}
            width={900}
            height={300}
            margin={{ left: 50, right: 50, top: 20, bottom: 50 }}
            grid={{ horizontal: true }}
            sx={{
              '& .MuiChartsAxis-line': {
                stroke: '#e0e0e0'
              },
              '& .MuiChartsAxis-tick': {
                stroke: '#e0e0e0'
              },
              '& .MuiChartsGrid-line': {
                stroke: '#e0e0e0',
                strokeDasharray: 'none'
              },
              '& .MuiChartsAxis-tickLabel': {
                fontSize: '12px',
                fill: '#666'
              }
            }}
          />
        </div>
        <MoodModal ref={modalRef} />
      </Box>
    </>
  )
}
