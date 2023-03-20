export const UseFetchChartPriceData = async (stock: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}chart-price-data`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ stock: stock }),
  })
    .then((results) => results.json())
    .then((data) => data?.chartPriceData?.splice(0, 14))
    .catch((err) => console.log(err));
};
