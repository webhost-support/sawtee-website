import { Link } from '@inertiajs/react';
import { formatDate } from 'date-fns';

export default function VerticalTimeline({ items }) {
  return (
    <div className={`-my-6`}>
      {items.map((item, index) => {
        const file = item.media.filter(
          m => m.collection_name === 'post-files'
        )[0];
        return (
          <div key={index} className="group relative py-6 pl-8 sm:pl-32">
            {/* Purple label */}

            {/* Time + Title */}
            <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-theme-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
              <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-theme-100 px-2 text-xs font-semibold uppercase text-theme-600 sm:absolute sm:mb-0">
                {formatDate(item.published_at, 'MMM dd')}
              </time>
              <div className="">
                <Link href={file ? file.original_url : ''}>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-300 md:text-xl xl:text-2xl">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </div>
            {/* Description */}
            <div className="text-slate-500">{item.excerpt}</div>
          </div>
        );
      })}
    </div>
  );
}
