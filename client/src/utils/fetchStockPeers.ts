const apiKey = '519b0d38ac484284abb5ed5338c2db0b'

// fetches Company name, sector, headquarters, dateFirstAdded, founded

export const FetchStockPeers = async (stock: String) => {
	const api = `${process.env.REACT_APP_BACKEND_STOCK_API}peers`
	const headerOptions = {
		'Content-Type': 'application/json',
	  }
  
	return await fetch(api, {
		method: 'POST',
		headers: headerOptions,
		body: JSON.stringify({ stock: stock }),
	  })
		.then((results) => results.json())
		.then((data) => data?.stockPeers)
		.catch((err) => console.log(err))
}
