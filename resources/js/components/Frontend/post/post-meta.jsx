import { formatDate } from '@/lib/helpers';
import { cn } from '@/lib/utils';

const PostMeta = ({ author, date, readingTime, ...rest }) => (
  <div className={cn('post-meta')} {...rest}>
    <div className="flex w-full flex-wrap items-center gap-6 gap-y-2 text-sm">
      {readingTime && <p>Reading Time: {readingTime}</p>}
      {author && <p>Author: {author}</p>}
      {date && <time dateTime={date}>Published date: {formatDate(date)}</time>}
    </div>
  </div>
);

export default PostMeta;
