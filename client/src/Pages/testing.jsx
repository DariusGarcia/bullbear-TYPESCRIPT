import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

async function fetchEPS() {
  const ticker = 'AAPL';
  const apiEndpoint = `${process.env.REACT_APP_MARKET_ACTIVITY}income-statement/${ticker}?limit=120&apikey=${process.env.REACT_APP_API_KEY}`;
  return await fetch(apiEndpoint)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

const Testing = () => {
  const [eps, setEps] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Earnings per share`,
      },
    },
  };

  useEffect(() => {
    const handleFetchEPS = async () => {
      setEps(await fetchEPS());
    };
    handleFetchEPS();
  }, []);

  eps &&
    console.log(
      'eps: ' + eps?.slice(0, 5)?.map((stock) => stock?.eps.toFixed(2))
    );
  eps && console.log('date: ' + eps?.slice(0, 5)?.map((stock) => stock.date));

  const chartData = {
    labels: eps?.map((data) => {
      // change format of chart time label
      let newDate = new Date(data.date);
      let options = { hour: '2-digit', minute: '2-digit', hour12: true };
      return newDate.toLocaleTimeString('en-US', options);
    }),

    datasets: [
      {
        label: 'EPS',
        data: eps.map((stock) => stock?.eps?.toFixed(2)),
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <article className="w-full h-full my-4" id="stock-chart">
      <section id="stock-price-chart">
        <Scatter options={options} data={chartData} />
      </section>
    </article>
  );
};

export default Testing;
