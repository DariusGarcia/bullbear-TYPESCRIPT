// fetches news articles about the stock
// limited to 5

export const FetchSingleStockNews = async (stock) => {
	const BASE_URL = `https://fmpcloud.io/api/v3/stock_news?tickers=${stock}&limit=15&apikey=`
	const api = `${BASE_URL}${process.env.REACT_APP_API_KEY}`

	return await fetch(api)
		.then((results) => results.json())
		.then((data) => data)
		.catch((err) => console.log(err))
}
