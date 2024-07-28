

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// import required modules
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Link } from '@inertiajs/react';
import { ExploreButton } from '.';
import { Badge } from '../ui/badge';

const MultiPostsCarousel = ({
  spacing,
  pagination,
  scrollbar,
  showCategoryTag,
  direction,
  text,
  link,
  children,
  data,
  ...rest
}) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full "
    >
      <CarouselContent>
        {data.map(publication => {
          const media = publication.media.length
            ? publication.media.filter(
                media => media.collection_name === 'publication_featured_image'
              )[0].original_url
            : '/assets/SM-placeholder-150x150.png';
          return (
            <CarouselItem
              key={publication.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div
                className="relative w-[180px] mx-auto aspect-[3/4] flex items-end justify-start text-left bg-cover bg-center rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(${media})`,
                  backgroundSize: 'cover',
                  imageBlendMode: 'grayscale',
                }}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 dark:from-gray300 dark:bg-gray-500/30" />
                <div className="absolute top-0 right-0 left-0 ml-2 mt-3 flex justify-between items-center">
                  <Badge className="px-2 font-sans" size={'sm'}>
                    {publication.category.name}
                  </Badge>
                </div>
                <div className="p-5 z-10">
                  <Link
                    href={`/publications/${publication.file.name}`}
                    class="text-sm tracking-tight font-medium font-regular text-white hover:underline "
                  >
                    {publication.title}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MultiPostsCarousel;
