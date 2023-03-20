import { Watchlist } from './watchlist'

export default function WatchlistContainer(): JSX.Element {
  return (
    <article className='flex flex-col md:p-0  bg-red text-white rounded-xl '>
      <Watchlist />
    </article>
  )
}
