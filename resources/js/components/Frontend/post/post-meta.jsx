import { formatDate } from '@/lib/helpers';

const PostMeta = ({ author, date, readingTime, ...rest }) => (
  <div className="post-meta" {...rest}>
    <div className="flex gap-2 space-y-8 justify-start items-center flex-wrap text-sm">
      {readingTime && <p className="p-0">Reading Time: {readingTime}</p>}
      {author && <p className="p-0">Author: {author}</p>}
      {date && (
        <time className="text-sm p-0" dateTime={date}>
          Published date: {formatDate(date)}
        </time>
      )}
    </div>
  </div>
);

export default PostMeta;
