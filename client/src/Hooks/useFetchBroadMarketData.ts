export const UseFetchBroadMarketData = async (describe: String) => {
  const api =
    process.env.REACT_APP_BROADMARKET_URL +
    `${describe}?apikey=` +
    process.env.REACT_APP_API_KEY

  return await fetch(api)
    .then((results) => results.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}
