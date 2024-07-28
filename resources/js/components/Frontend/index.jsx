import FullWidthCarousel from '@/components/Frontend/FullWidthCarousel';
import MultiPostsCarousel from '@/components/Frontend/MultiPostsSlider';
import InertiaChakraLink from '@/components/Frontend/styles/inertia-chakra-link';
import InertiaChakraLinkOverlay from '@/components/Frontend/styles/inertia-chakra-link-overlay';
import Section from '@/components/Frontend/styles/section';
import { formatDate } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import {
  ArrowForwardIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  LinkBox,
  LinkOverlay,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import SimpleList from './SimpleList';
import { Blob } from './icons';

export const ListItemVariant = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const ListVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const CarouselSection = ({
  slides,
  responsiveImages,
  carouselHeight,
}) => {
  return (
    <FullWidthCarousel
      slides={slides}
      navigation={false}
      loop={true}
      rewind={true}
      carouselHeight={carouselHeight}
      responsiveImages={responsiveImages}
    />
  );
};

export const TwoColumnImageSection = ({
  data,
  showBlobIcon = false,
  showBorderBox = false,
  children,
}) => {
  return (
    <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto justify-center items-center">
      {data.map(item => {
        return (
          <div
            key={item.id}
            className="flex flex-1 justify-center items-center my-10 relative max-w-[30rem]"
          >
            {showBorderBox && (
              <div className="absolute border-4 left-6 -top-5 w-full h-full rounded-2xl" />
            )}

            {showBlobIcon && (
              <Blob
                className={
                  'w-full h-[150%] absolute -top-[20%] left-0 text-theme-100 dark:text-theme-400 '
                }
                w={'100%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                color={useColorModeValue('primary.100', 'primary.400')}
              />
            )}
            {children}

            <Link
              href={item.link}
              className="group relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute w-full h-full inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-200 ease" />

              <ExternalLink
                aria-label={'Play Button'}
                className="absolute w-12 h-12 text-white/60 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease group-hover:text-white/100 "
              />

              <Image
                src={item.image_src}
                loading="lazy"
                fallbackSrc="assets/SM-placeholder-300x150.png"
                alt={item.title}
                fit="cover"
                rounded="xl"
                align={'center'}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const InfoSection = () => {
  return (
    <div className="section">
      <div
        className="grid grid-cols-2 justify-center items-center p-6 lg:p-8 min-h-96"
        id="chart-wrapper"
      >
        <iframe
          title="Reform Meter Dashboard_revised"
          width="100%"
          height="804"
          src="https://app.powerbi.com/view?r=eyJrIjoiOGRhNGUzNzUtYTk2NS00YzFjLWE3NDAtM2NjMjdjYTg1NmE1IiwidCI6IjIzM2IyYmFhLTdjNzUtNGI0YS04YjNiLTE3NTNkYmQzODBmOSIsImMiOjF9"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export const OutreachSection = ({ sawteeInMedia, events }) => {
  return (
    <div className="grid lg:grid-cols-6 gap-10">
      <div className="md:col-span-3">
        <SimpleList heading={'sawtee in media'}>
          {sawteeInMedia.map(item => {
            const hasContent = item.content !== null || '';
            const file = item.media?.filter(
              media => media.collection_name === 'post-files'
            )[0];

            return (
              <li className="mb-4 group" key={item.id}>
                <div>
                  {file && !hasContent && (
                    <a
                      href={file?.original_url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-secondary-foreground group-hover:underline-offset-4 group-hover:text-primary/80 dark:group-hover:text-secondary-foreground/80"
                    >
                      <p className="text-sm md:text-md lg:text-lg leading-5">
                        {item.title}
                      </p>
                    </a>
                  )}
                  {hasContent && (
                    <Link
                      href={`/category/${item.category.slug}/${item.slug}`}
                      className="underline underline-offset-2 text-secondary-foreground group-hover:underline-offset-4 group-hover:text-primary/80 dark:group-hover:text-secondary-foreground/80"
                    >
                      <p className="text-sm md:text-md lg:text-lg leading-5">
                        {item.title}
                      </p>
                    </Link>
                  )}
                  <p className="text-muted-foreground text-xs mt-2">
                    {formatDate(item.published_at)}
                  </p>
                </div>
              </li>
            );
          })}
        </SimpleList>
        <ExploreButton
          size={['xs', 'sm']}
          text="More in sawtee in media "
          link={'/category/sawtee-in-media'}
        />
      </div>

      <div className="md:col-span-3">
        <SimpleList heading={'Featured Events'}>
          {events.map(event => {
            const featured_image =
              event.media.length > 0
                ? event.media.filter(
                    item => item.collection_name === 'post-featured-image'
                  )[0]?.original_url
                : '/assets/SM-placeholder-150x150.png';
            // const srcSet = featured_image
            //     ? featured_image.responsive_images.responsive.urls
            //     : null;

            return (
              <li
                key={event.id}
                className="group flex w-full justify-between items-center gap-4 mb-4"
              >
                <Link
                  // w="full"
                  href={`/category/featured-events/${event.slug}`}
                  className=" flex gap-2 w-2/3 grow"
                >
                  <div className="flex flex-col w-full ">
                    <p className="text-sm md:text-md lg:text-lg font-sans text-secondary-foreground underline underline-offset-2 group-hover:underline-offset-4 group-hover:text-primary/80 dark:group-hover:text-secondary-foreground/80 leading-5">
                      {event.title}
                    </p>

                    <p className="text-muted-foreground text-xs mt-2">
                      {formatDate(event.published_at)}
                    </p>
                  </div>

                  {featured_image && (
                    <div className="max-w-[90px] w-full aspect-auto rounded-md overflow-hidden p-1 border">
                      <img
                        src={featured_image}
                        className="w-full h-full object-cover"
                        alt={'Event cover'}
                        loading="lazy"
                      />
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </SimpleList>
        <ExploreButton
          size={['xs', 'sm']}
          text="More on featured events"
          link={'/category/featured-events'}
        />
      </div>
    </div>
  );
};

export const InfocusSection = ({ data }) => {
  return (
    <SimpleList heading={null} borderLeft={'none'}>
      {data.map(item => {
        return (
          <li
            className="mb-6 flex flex-col w-full gap-3 text-zinc-700 dark:text-zinc-300"
            key={item.id}
          >
            <Link
              className="underline underline-offset-2 hover:underline-offset-4"
              target="_blank"
              href={`/category/in-focus/${item.slug}`}
            >
              <h3 className="text-lg font-semibold font-sans text-primary dark:text-secondary-foreground hover:text-primary/80 dark:hover:text-secondary-foreground/80">
                {item.title}
              </h3>
            </Link>
            <p className="text-sm">{item.excerpt}</p>
          </li>
        );
      })}
    </SimpleList>
  );
};

export const FeaturedPublications = ({ publications }) => {
  return (
    <GlassBox className="bg-white dark:bg-bgDarker">
      <SimpleList
        className="border-none mx-auto rounded-xl max-w-lg"
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
                className="group flex w-full justify-between gap-6 items-center"
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

                  <p className="group-hover:underline text-sm md:text-md font-sans leading-4">
                    {publication.title}
                  </p>

                  <p className="text-xs mt-1 ">{publication.subtitle}</p>
                </div>

                {media && (
                  <Box
                    w="20%"
                    maxW="80px"
                    aspectRatio={3 / 4}
                    overflow="hidden"
                    border="1px solid"
                    borderColor="gray.400"
                    rounded="md"
                    mx="auto"
                    p={1}
                  >
                    <Image
                      src={media}
                      objectFit="cover"
                      alt="Publication Cover"
                      loading="lazy"
                      fallbackSrc="/assets/SM-placeholder-150x150.png"
                    />
                  </Box>
                )}
              </Link>
            </li>
          );
        })}
      </SimpleList>
    </GlassBox>
  );
};

export const PublicationsSection = ({ publications }) => {
  return (
    <MultiPostsCarousel
      spacing={30}
      pagination={false}
      navigation={true}
      scrollbar={true}
      link={'/category/publications'}
      text={'More in publications'}
      data={publications}
    />
  );
};

// A debounced input react component
export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce]);

  return (
    <Input {...props} value={value} onChange={e => setValue(e.target.value)} />
  );
}

export const Content = styled(Section)`
  word-break: break-word;
  white-space: collapse balance;

//   line-height: var(--chakra-lineHeights-taller);

  * {
    max-width: 100%;
  }

  ul,
  ol {
  list-style: inherit;
    padding: 0;
    margin-left: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    word-break: break-word;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }
`;

export const GlassBox = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(
        'w-full rounded-md border py-4 bg-bgDarker dark:text-muted-foreground shadow-md',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Title = ({ title, ...rest }) => {
  return (
    <div className="mb-12">
      <h3
        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-bold text-primary flex items-center"
        {...rest}
      >
        {title}
      </h3>
      <div className="h-2 w-[8%] bg-theme-500 " />
    </div>
  );
};

export const MapModel = ({ isOpen, onClose, mapLink }) => {
  const modalContentColor = useColorModeValue(
    'rgba(255, 255, 255, 0.7)',
    'rgba(0, 0, 0, 0.7)'
  );
  const modelHeaderColor = useColorModeValue('gray.700', 'whiteAlpha.900');
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      closeOnOverlayClick={true}
      scrollBehavior="inside"
      size={'full'}
    >
      <ModalOverlay />
      <ModalContent bg={modalContentColor}>
        <ModalHeader color={modelHeaderColor}>Our Location</ModalHeader>
        <ModalCloseButton />
        <ModalBody px="8">
          <Flex gap={2}>
            <Image
              objectFit={'cover'}
              src={'/assets/location-map-resized.webp'}
            />
            <iframe
              src={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8576852768524!2d85.329329!3d27.72168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913dfb0b0b3%3A0x4d5d3519d24d3c38!2sSouth%20Asia%20Watch%20on%20Trade%2C%20Economics%20and%20Environment%20(SAWTEE)!5e0!3m2!1sen!2snp!4v1700216228197!5m2!1sen!2snp'
              }
              width="100%"
              allowFullScreen="true"
              loading="lazy"
              title="sawtee location map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const ExploreButton = ({
  text = 'Explore All',
  link,
  className,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      type="button"
      role="button"
      href={link ? link : '#'}
      className={cn(
        'flex max-w-max gap-1 items-center px-6 py-2 underline underline-offset-2 rounded-md text-sm font-medium text-primary hover:underline-offset-4 hover:text-primary/70',
        className
      )}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => hovered && setHovered(!hovered)}
    >
      {text}
      {hovered ? (
        <ArrowForwardIcon className="w-4 h-4" />
      ) : (
        <ChevronRightIcon className="w-4 h-4" />
      )}
    </Link>
  );
};

export const StyledChakraLink = styled(InertiaChakraLink)`
  position: relative;
  text-decoration: none;
  font-family: ${props => (props.fontFamily ? `var(--chakra-fonts-${props.fontFamily})` : 'var(--chakra-fonts-body)')};
  font-size: ${props => (props.fontSize ? `var(--chakra-fontSizes-${props.fontSize})` : 'var(--chakra-fontSizes-sm)')};
  color: ${props => (props.color ? props.color : 'var(--chakra-colors-gray-700)')};

  &::after {
    content: '';
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;

    background: ${props => (props.color ? props.color : '#fff')};
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover {
    text-decoration: none;

    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
