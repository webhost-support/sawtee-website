import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

const FullWidthCarousel = ({
  slides,
  responsiveImages,
  autoplay = false,
  ...rest
}) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
        {...rest}
      >
        <CarouselContent>
          {slides?.map(slide => (
            <CarouselItem
              key={slide.id}
              className="group relative flex h-full w-full items-center justify-center p-0"
            >
              <img
                src={slide.media[0].original_url}
                alt="slide"
                loading="lazy"
                className="lazy aspect-video w-full object-cover grayscale transition-all duration-500 ease-in group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/20">
                <span className="text-4xl font-semibold leading-5 tracking-normal text-secondary-foreground text-white">
                  {slide.title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 z-[999] -translate-y-1/2 dark:text-white" />
        <CarouselNext className="absolute right-4 top-1/2 z-[999] -translate-y-1/2 dark:text-white" />
        <div className="text-md absolute bottom-0 left-0 right-0 py-2 text-center text-white">
          {current} of {count}
        </div>
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;
