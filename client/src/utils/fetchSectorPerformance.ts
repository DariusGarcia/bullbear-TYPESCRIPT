/**
 *  fetches stock sector performances
 *
 */

export const FetchSectorPerformance = async () => {
	const BASE_URL = 'https://fmpcloud.io/api/v3/sectors-performance?apikey='
	const api = `${BASE_URL}${process.env.REACT_APP_API_KEY}`

	return await fetch(api)
		.then((results) => results.json())
		.then((data) => data)
		.catch((err) => console.log(err))
}
