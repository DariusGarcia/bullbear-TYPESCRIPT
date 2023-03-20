/**
 *  fetches news articles about the stock
 *  limited to 15 news articles 
 */

export const FetchSingleStockNews = async (stock: String) => {
	const api = `${process.env.REACT_APP_BACKEND_STOCK_API}news`
	const headerOptions = {
		'Content-Type': 'application/json',
	  }
  
	return await fetch(api, {
		method: 'POST',
		headers: headerOptions,
		body: JSON.stringify({ stock: stock }),
	  })
		.then((results) => results.json())
		.then((data) => data?.stockNews)
		.catch((err) => console.log(err))
}
