import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { UseFetchChartPriceData } from '../../Hooks/UseFetchChartPriceData';
import checkPrice from '../../utils/checkPrice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type StockLineChartProps = {
  stock: string;
  stockData: any[];
};

export default function StockLineChart({
  stock,
  stockData,
}: StockLineChartProps) {
  const [prices, setPrices] = useState<any>();

  useEffect(() => {
    const handleGetTimeData = async () => {
      setPrices(await UseFetchChartPriceData(stock));
    };
    handleGetTimeData();
  }, [stock]);

  // reverse the time series array to display the current day last
  let timeSlotData = prices?.slice().reverse();

  const chartData = {
    labels: timeSlotData?.map((data: any) => {
      // change format of chart time label
      let newDate = new Date(data.date);
      let options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      return newDate.toLocaleTimeString('en-US', options);
    }),

    datasets: [
      {
        label: 'Stock Price',
        data: timeSlotData?.map((data: any) =>
          data?.close?.toFixed(2).toString()
        ),
        backgroundColor: checkPrice(stockData),
        borderColor: checkPrice(stockData),
        borderWidth: 1,
      },
    ],
  };

  return (
    <article className='w-full h-full mb-4' id='stock-chart'>
      <section id='stock-price-chart'>
        <Line options={options} data={chartData} />
      </section>
    </article>
  );
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Daily Chart',
    },
  },
};
