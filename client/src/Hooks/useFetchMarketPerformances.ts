export const UseFetchMarketPerformances = async (query: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}market-performances`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ query: query }),
  })
    .then((res) => res.json())
    .then((data) => data?.marketPerformances)
    .catch((err) => console.log(err));
};
