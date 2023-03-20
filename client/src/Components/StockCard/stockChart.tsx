import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { UseFetchChartPriceData } from '../../Hooks/UseFetchChartPriceData'
import formatTime from '../../utils/formatTime'
import { isMobile } from 'react-device-detect'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type StockLineChartProps = {
  stock: string
}

const StockLineChart = ({ stock }: StockLineChartProps) => {
  const [prices, setPrices] = useState<any>()
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Daily Chart'
        // text: `Daily Chart ${
        //   isMobile ? '' : formatTime(prices[0]?.date?.slice(0, 11))
        // }`,
      },
    },
  }
  useEffect(() => {
    const handleGetTimeData = async () => {
      setPrices(await UseFetchChartPriceData(stock))
    }
    handleGetTimeData()
  }, [stock])

  // reverse the time series array to display the current day last
  let timeSlotData = prices?.slice().reverse()

  const chartData = {
    labels: timeSlotData?.map((data: any) => {
      // change format of chart time label
      let newDate = new Date(data.date)
      let options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true }
      return newDate.toLocaleTimeString('en-US', options)
    }),

    datasets: [
      {
        label: 'Stock Price',
        data: timeSlotData?.map((data: any) => data?.close?.toFixed(2).toString()),
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <article className='w-full h-full mb-4' id='stock-chart'>
      <section id='stock-price-chart'>
        <Line options={options} data={chartData} />
      </section>
    </article>
  )
}

export default StockLineChart
