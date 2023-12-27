import { useAuthContext } from '../../Hooks/useAuthContext';

export default async function FetchWatchlist() {
  const endpoint = 'api/watchlist';
  const API = `${process.env.REACT_APP_BACKEND_API}${endpoint}`;
  const { user } = useAuthContext();
  const headerOptions = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  };

  return await await fetch(API, {
    headers: headerOptions,
  })
    .then((res) => res.json())
    .then((watchlistData) => watchlistData)
    .catch((err) => console.log(err));
}
