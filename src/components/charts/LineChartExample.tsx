import { LineChart } from '@mui/x-charts/LineChart'

interface LineChartExampleProps {
  width?: number
  height?: number
}

export default function LineChartExample({ width = 600, height = 300 }: LineChartExampleProps) {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5]
        }
      ]}
      width={width}
      height={height}
    />
  )
}
