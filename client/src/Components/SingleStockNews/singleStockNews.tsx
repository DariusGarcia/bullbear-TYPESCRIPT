import time_ago from '../../utils/timeSincePublished';

interface NewsArticle {
  id: string;
  site: string;
  title: string;
  text?: string;
  publishedDate: string;
  image: string;
  url: string;
}

interface Props {
  stockNews: NewsArticle[];
}

export default function SingleStockNews({ stockNews }: Props): JSX.Element {
  return (
    stockNews && (
      <article className="flex w-full flex-col items-start h-[400px] md:h-[550px]  ">
        <h4 className="text-xl mb-2 ">Recent News</h4>
        <div className="flex flex-col  gap-4 text-white md:text-base rounded-lg overflow-auto">
          {stockNews.map((newsArticle) => (
            <a
              key={newsArticle.id}
              target="_blank"
              href={newsArticle.url}
              rel="noreferrer"
              className="hover:opacity-60 ease-in transition duration-75 ">
              <article className="rounded-lg shadow-lg ">
                <ul className="grid grid-cols-2  bg-primary my-0  p-2 gap-y-2 gap-4 rounded-lg md:mr-4  ">
                  <div className="flex flex-col justify-evenly px-2">
                    <li className="text-lightBlue ">{newsArticle.site}</li>
                    <li className="text-xs md:text-base ">
                      {newsArticle.title}
                    </li>
                    <li className="hidden md:block italic text-sm opacity-70">
                      {newsArticle.text?.substring(0, 100)}...
                    </li>
                    <li className="text-sm opacity-50 flex flex-row">
                      {time_ago(newsArticle.publishedDate)}
                    </li>
                  </div>
                  <div>
                    {' '}
                    <li className="flex justify-end h-full items-center">
                      <img
                        className="w-32 h-32 md:w-56 md:h-40 m-2 rounded-md object-cover shadow-md"
                        src={newsArticle.image}
                        alt={newsArticle.title}></img>
                    </li>
                  </div>
                </ul>
              </article>
            </a>
          ))}
        </div>
      </article>
    )
  );
}
