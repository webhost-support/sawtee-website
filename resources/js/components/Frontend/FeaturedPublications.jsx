import { Link } from '@inertiajs/react';
import { Badge } from '../ui/badge';
import Glassbox from './Glassbox';
import SimpleList from './SimpleList';

export const FeaturedPublications = ({ publications }) => {
  return (
    <Glassbox className="bg-white dark:bg-bgDarker">
      <SimpleList
        className="mx-auto max-w-lg rounded-xl border-none"
        heading={'featured publications'}
      >
        {publications.map((publication, idx) => {
          const media = publication.media.length
            ? publication.media.filter(
                media => media.collection_name === 'publication_featured_image'
              )[0].original_url
            : '/assets/SM-placeholder-150x150.png';
          return (
            <li
              className={idx === publications.length - 1 ? 'mb-0' : 'mb-4'}
              key={publication.id}
            >
              <Link
                className="group flex w-full items-center justify-between gap-6"
                href={`category/publications/${publication.category?.slug}`}
              >
                <div className="w-2/3">
                  <Badge
                    variant="outline"
                    className="mb-2 px-2 font-sans"
                    size={'sm'}
                  >
                    {publication.category?.name}
                  </Badge>

                  <p className="md:text-md font-sans text-sm leading-4 group-hover:underline">
                    {publication.title}
                  </p>

                  <p className="mt-1 text-xs">{publication.subtitle}</p>
                </div>

                {media && (
                  <div className="mx-auto w-[20%] max-w-20 overflow-hidden rounded-md">
                    <img
                      className="aspect-[3/4] h-full w-full border object-cover"
                      src={media || '/assets/SM-placeholder-150x150.png'}
                      alt="Publication Cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </SimpleList>
    </Glassbox>
  );
};
