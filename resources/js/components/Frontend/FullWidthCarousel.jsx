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
        className="w-full "
        {...rest}
      >
        <CarouselContent>
          {slides?.map(slide => (
            <CarouselItem
              key={slide.id}
              className="relative group p-0 flex w-full h-full justify-center items-center"
            >
              <img
                src={slide.media[0].original_url}
                alt="slide"
                loading="lazy"
                className="w-full grayscale  lazy group-hover:grayscale-0 transition-all duration-300 ease-in aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center h-full w-full bg-black/20">
                <span className="text-4xl font-semibold tracking-normal text-white leading-5 text-secondary-foreground">
                  {slide.title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute left-4 top-1/2 -translate-y-1/2 z-[999] dark:text-white" />
        <CarouselNext className=" absolute right-4 top-1/2 -translate-y-1/2 z-[999] dark:text-white" />
        <div className=" absolute bottom-0 left-0 right-0 py-2 text-center text-md text-white">
          {current} of {count}
        </div>
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;
