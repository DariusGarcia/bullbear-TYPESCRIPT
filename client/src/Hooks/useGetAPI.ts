export const UseGetAPI = async (stock: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ ticker: stock }),
  })
    .then((res) => res.json())
    .then((data) => data?.stockData)
    .catch((err) => console.log(err));
};
