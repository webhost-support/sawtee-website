

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

// import required modules
import { Link } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
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
                className="relative group w-[180px] mx-auto aspect-[3/4] flex items-end justify-start text-left bg-cover bg-center rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(${media})`,
                  backgroundSize: 'cover',
                  imageBlendMode: 'grayscale',
                }}
              >
                <Link href={`/publications/${publication.file.name}`} className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />
                <div className="absolute top-3 left-4 flex justify-between items-center">
                  <Badge className="px-2 font-sans text-[0.65rem] text-white bg-theme-600 group-hover:bg-theme-100/80 group-hover:text-theme-700 cursor-pointer transition-all duration-200 ease-in-out" >
                    {publication.category.name}
                  </Badge>
                </div>
                <div className="p-2 z-10 group-hover:bg-black/70 rounded-b-md w-full text-sm leading-4 font-medium text-white group-hover:text-theme-400 transition-all duration-200 ease-in-out">
                  <Link
                    href={`/publications/${publication.file.name}`}
                    class=" hover:underline group-hover:underline "
                  >
                    {publication.title}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="dark:text-white" />
      <CarouselNext className="dark:text-white" />
    </Carousel>
  );
};

export default MultiPostsCarousel;
