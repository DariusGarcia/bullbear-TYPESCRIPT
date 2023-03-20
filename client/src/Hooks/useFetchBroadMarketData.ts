export const UseFetchBroadMarketData = async (describe: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}broad-market`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ describe: describe }),
  })
    .then((results) => results.json())
    .then((data) => data?.broadMarketData)
    .catch((err) => console.log(err));
};
