import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

interface Ticker {
  ticker: string;
  companyName: string;
  changesPercentage: number;
  price: number;
  changes: number;
}

interface ActiveMoversProps {
  topMovers: Ticker[];
  query: string;
}

export default function ActiveMovers({
  topMovers,
  query,
}: ActiveMoversProps): JSX.Element {
  const tableTitles = ['Change %', 'Price', 'Change'];

  return (
    topMovers && (
      <div className="w-full mb-12">
        <div className=" ">
          <div className="">
            <div className="w-full ml-2 md:ml-0 ">
              <h1 className="text-xl text-white bg-grey3 w-max p-2 rounded-md  ">
                Top {capitalizeFirstLetter(query)}
              </h1>
            </div>
          </div>
          <div className="-mx-6 mt-4 sm:-mx-0 px-6 lg:px-8">
            <table className="min-w-full divide-y divide-grey3 ">
              <thead className="rounded-md bg-grey">
                <tr>
                  <th
                    scope="col"
                    className="py-4 pl-6 pr-3 md:w-96 md:max-w-96 md:min-w-56 text-left text-sm text-white sm:pl-0">
                    Ticker
                  </th>
                  {tableTitles.map((title) => (
                    <th
                      scope="col"
                      className=" px-3 py-4 text-left text-sm text-white sm:table-cell">
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-grey3 bg-grey rounded-md ">
                {topMovers?.slice(0, 5)?.map((ticker) => (
                  <tr key={ticker.ticker} className=" hover:bg-grey2">
                    <td className="flex flex-col whitespace-nowrap md:w-96 md:max-w-96 md:min-w-56 py-4 pl-6 pr-3 text-sm font-medium text-white sm:pl-0">
                      <div className="text-lightBlue font-bold">
                        ${ticker.ticker}
                      </div>
                      <div className="hidden md:inline">
                        {ticker.companyName}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm md:w-56 text-white sm:table-cell">
                      <span
                        className={
                          ticker?.changesPercentage > 0
                            ? 'bg-green p-2 rounded-md'
                            : 'bg-red p-2 rounded-md'
                        }>
                        {parseInt(ticker.changesPercentage.toString()).toFixed(
                          1
                        )}
                        %
                      </span>
                    </td>
                    <td className=" whitespace-nowrap md:w-56 px-3 py-4 text-sm text-white lg:table-cell">
                      ${ticker.price}
                    </td>
                    <td className="whitespace-nowrap md:w-56 px-3 py-4 text-sm text-white">
                      ${ticker.changes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}
