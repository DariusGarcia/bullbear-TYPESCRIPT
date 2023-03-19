export const FetchBatchStocks = async (): Promise<any> => {
	const api = () =>
	// set string as ENV var
		'https://fmpcloud.io/api/v3/quote/AAPL,MSFT,FB?apikey=' +
		process.env.REACT_APP_API_KEY

	return await fetch(api())
		.then((results) => results.json())
		.then((data) => console.log(data))
		.then((data) => data)
		.catch((err) => console.log(err))
}
