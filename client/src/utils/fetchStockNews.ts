/**
 *  fetches news articles about the stock
 *  limited to 15 news articles 
 */

export const FetchSingleStockNews = async (stock: String) => {
	const limit: Number = 15
	const BASE_URL: String = `https://fmpcloud.io/api/v3/stock_news?tickers=${stock}&limit=${limit}&apikey=`
	const api = `${BASE_URL}${process.env.REACT_APP_API_KEY}`

	return await fetch(api)
		.then((results) => results.json())
		.then((data) => data)
		.catch((err) => console.log(err))
}
