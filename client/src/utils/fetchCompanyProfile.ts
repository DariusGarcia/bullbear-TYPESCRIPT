// fetches stock metrics/stats
export const FetchCompanyProfile = async (stock: String) => {
  const api = `${process.env.REACT_APP_BACKEND_STOCK_API}company-profile`;
  const headerOptions = {
    'Content-Type': 'application/json',
  };

  return await fetch(api, {
    method: 'POST',
    headers: headerOptions,
    body: JSON.stringify({ stock: stock }),
  })
    .then((results) => results.json())
    .then((data) => data?.companyProfileData)
    .catch((err) => console.log(err));
};
