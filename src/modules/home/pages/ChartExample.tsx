import { Box } from '@mui/material'
import { LineChartExample } from '@src/components/charts'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'

export default function ChartExample() {
  return (
    <>
      <Helmet>
        <title> {`Chart Example - ${CONFIG.appName}`}</title>
      </Helmet>

      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <h1 className='text-center text-3xl font-semibold mb-8'>LineChart Example</h1>

        <div className='flex justify-center'>
          <LineChartExample />
        </div>

        <div className='mt-8 p-4 bg-gray-100 rounded-lg'>
          <h2 className='text-xl font-medium mb-4'>Usage:</h2>
          <pre className='bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto'>
            {`import { LineChart } from '@mui/x-charts/LineChart';

<LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  height={300}
/>`}
          </pre>
        </div>
      </Box>
    </>
  )
}
