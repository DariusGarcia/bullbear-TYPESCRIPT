/**
 *  fetches stock sector performances
 *
 */

export const FetchSectorPerformance = async () => {
	const api = `${process.env.REACT_APP_BACKEND_STOCK_API}sector-performance`
	const headerOptions = {
		'Content-Type': 'application/json',
	  }
  
	return await fetch(api, {
		method: 'POST',
		headers: headerOptions,
	  })
		.then((results) => results.json())
		.then((data) => data?.sectorPerformanceData)
		.catch((err) => console.log(err))
}
