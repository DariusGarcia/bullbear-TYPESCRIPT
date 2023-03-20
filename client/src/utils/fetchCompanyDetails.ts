// fetches all stocks in the S&P500 index
export const FetchCompanyDetails = async () => {
	const api = `${process.env.REACT_APP_BACKEND_STOCK_API}company-details`
	const headerOptions = {
		'Content-Type': 'application/json',
	  }

    return await fetch(api, {
      method: 'POST',
      headers: headerOptions,
      })
		.then((results) => results.json())
		.then((data) => data?.companyDetails)
		.catch((err) => console.log(err))
}
