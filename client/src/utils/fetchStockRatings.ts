// fetches stock ratings based on different sources

export const FetchStockRatings = async (stock: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}rating`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ stock: stock }),
  })
    .then((results) => results.json())
    .then((data) => data?.stockRating)
    .catch((err) => console.log(err));
};
