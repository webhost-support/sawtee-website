import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, IconButton, useBreakpoint } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

// import required modules
import 'swiper/css';
import 'swiper/css/scrollbar';
import { ExploreButton } from '.';

const MultiPostsCarousel = ({
  spacing,
  pagination,
  scrollbar,
  showCategoryTag,
  direction,
  text,
  link,
  children,
  ...rest
}) => {
  const swiperElRef = useRef(null);
  const windowSize = useBreakpoint();
  const [progressValue, setProgressValue] = useState(0);
  const params = {
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  };

  useEffect(() => {
    if (swiperElRef.current !== null) {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', e => {
        const [_, progress] = e.detail;
        setProgressValue(progress);
      });
      Object.assign(swiperElRef.current, params);
    }
  }, [windowSize]);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={1}
      slides-per-group={1}
      navigation={false}
      pagination={pagination}
      keyboard={true}
      scrollbar={scrollbar ? true : false}
      space-between={spacing}
      grab-cursor={true}
      direction={direction ? direction : 'horizontal'}
      class={'multi-post-carousel'}
      id="multi-post-slider"
    >
      <div slot="container-start">
        <HStack w="full" justify={'space-between'} spacing={4}>
          <HStack spacing={4} justify={{ base: 'justify-between', md: 'end' }}>
            <IconButton
              id="prev-button"
              colorScheme="gray"
              variant="outline"
              icon={<ChevronLeftIcon w="5" h="5" />}
              aria-label="previous button"
              onClick={() => {
                swiperElRef.current?.swiper.slidePrev();
              }}
              size={'sm'}
              isDisabled={progressValue === 0}
            />

            <IconButton
              id="next-button"
              colorScheme="gray"
              variant="outline"
              icon={<ChevronRightIcon w="5" h="5" />}
              aria-label="next button"
              onClick={() => {
                swiperElRef.current?.swiper.slideNext();
              }}
              size={'sm'}
              isDisabled={progressValue === 1}
            />
          </HStack>

          <ExploreButton size={['xs', 'sm']} text={text} px={10} link={link} />
        </HStack>
      </div>
      {children}
    </swiper-container>
  );
};

export default MultiPostsCarousel;
