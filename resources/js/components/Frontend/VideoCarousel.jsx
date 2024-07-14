import {
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';

// import required modules
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../css/video-carousel.css';
import { PlayIcon } from './icons';

const VideoCarousel = ({
  posts,
  spacing,
  pagination,
  scrollbar,
  showCategoryTag = false,
  direction,
  children,
  ...rest
}) => {
  const swiperElRef = useRef(null);

  return (
    <Grid
      maxW={'8xl'}
      mx="auto"
      gap={10}
      gridTemplateColumns={{ base: '1fr', lg: 'repeat(5, 1fr)' }}
    >
      <GridItem colSpan={{ base: 1, lg: 3 }} placeSelf={'center'}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view={1}
          pagination={pagination}
          keyboard={true}
          loop={true}
          space-between={spacing}
          thumbs-swiper=".thumbs-swiper"
          class={'video-carousel'}
          {...rest}
        >
          <div slot="container-start">
            <Box
              position="absolute"
              top="50%"
              inset={0}
              transform="translateY( 45%)"
              w={'full'}
              zIndex={100}
            >
              <IconButton
                position="absolute"
                colorScheme="blackAlpha"
                color={'white'}
                id="prev-button"
                icon={<ChevronLeftIcon w="8" h="8" />}
                aria-label="previous"
                left="10"
                onClick={() => swiperElRef.current.swiper.slidePrev()}
              />

              <IconButton
                position="absolute"
                id="next-button"
                colorScheme="blackAlpha"
                color={'white'}
                aria-label="next"
                icon={<ChevronRightIcon w="8" h="8" />}
                right="10"
                onClick={() => swiperElRef.current.swiper.slideNext()}
              />
            </Box>
          </div>
          {posts.map(article => {
            const media =
              article.media.length > 0
                ? article.media?.filter(
                    m => m.collection_name === 'post-featured-image'
                  )[0]
                : null;
            return (
              <swiper-slide key={article.id} class="swiper-slide video-slide">
                <LinkBox
                  w="full"
                  aspectRatio={5 / 3}
                  rounded={'xl'}
                  overflow={'hidden'}
                >
                  <IconButton
                    aria-label={'Play Button'}
                    variant={'ghost'}
                    color={'red.500'}
                    opacity={0.5}
                    _groupHover={{
                      opacity: 1,
                    }}
                    icon={<PlayIcon w={16} h={16} />}
                    size={'lg'}
                    position={'absolute'}
                    left={'50%'}
                    top={'50%'}
                    transition={'all .25s ease'}
                    transform={'translateX(-50%) translateY(-50%)'}
                  />
                  <LinkOverlay target="_blank" href={article.link}>
                    <Image
                      h="full"
                      w="full"
                      objectFit={'cover'}
                      alt={article.title}
                      src={
                        media
                          ? media.original_url
                          : '/assets/SM-placeholder-1024x512.png'
                      }
                      fallbackSrc="/assets/SM-placeholder-1024x512.png"
                    />
                  </LinkOverlay>
                </LinkBox>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </GridItem>
      <GridItem colSpan={{ base: 1, lg: 2 }} placeSelf={'center'}>
        <swiper-container
          class="thumbs-swiper"
          space-between="10"
          slides-per-view="5"
          direction="vertical"
          free-mode="true"
          watch-slides-progress="true"
        >
          {posts.map(article => {
            const media = article.media.filter(
              m => m.collection_name === 'post-featured-image'
            )[0];
            return (
              <swiper-slide key={article.id} class="thumb-slide">
                <HStack w="full" spacing={4} cursor="pointer">
                  <Box
                    pos="relative"
                    w="full"
                    maxW={'6rem'}
                    aspectRatio={5 / 3}
                  >
                    <IconButton
                      aria-label={'Play Button'}
                      variant={'ghost'}
                      color={'red.500'}
                      opacity={0.5}
                      _groupHover={{
                        opacity: 1,
                      }}
                      icon={<PlayIcon w={6} h={6} />}
                      position={'absolute'}
                      left={'50%'}
                      top={'50%'}
                      transition={'all .25s ease'}
                      transform={'translateX(-50%) translateY(-50%)'}
                      size={'xs'}
                    />
                    <Image
                      w="full"
                      h="full"
                      alt={article.title}
                      src={media ? media.original_url : null}
                      rounded="md"
                      fallbackSrc="/assets/SM-placeholder-300x150.png"
                    />
                  </Box>

                  <Text fontSize={'sm'}>{article.title}</Text>
                </HStack>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </GridItem>
    </Grid>
  );
};

export default VideoCarousel;
