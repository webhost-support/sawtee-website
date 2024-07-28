import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeaturedSection({ features, ...rest }) {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      direction={{ base: 'column', lg: 'row' }}
      {...rest}
    >
      <div className="w-full space-y-5 md:space-y-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground tracking-tight">
          <span className='relative after:content:"" after:w-full after:h-[30%] after:absolute after:bottom-0 after:left-0 after:bg-primary-100  after:bg-theme-200/50 dark:after:bg-theme-500'>
            {'Reform Monitoring Platform'}
          </span>
          <br />
        </h3>
        <p className="text-base leading-7 text-secondary-foreground/80">
          The <strong>Reform Monitoring Platform</strong> intends to strengthen{' '}
          <strong>monitoring and evaluation</strong> of the policy reform
          process through an online <strong>reform tracking system</strong> to
          increase transparency, inclusiveness, and accountability of{' '}
          <strong>trade and investment</strong> related reforms.
        </p>
      </div>
      <div className="w-full max-w-lg my-10 relative flex items-center justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {features.map(feature => (
              <CarouselItem key={feature.id} className="p-1 ">
                <Link
                  href={feature.link}
                  className="group flex w-full h-full relative p-0 items-center justify-center overflow-hidden rounded-xl "
                >
                  <div className="absolute inset-0 w-full h-full bg-black opacity-20 group-hover:opacity-30 transition-opacity" />

                  <ExternalLink
                    aria-label={'Play Button'}
                    className={
                      'w-12 h-12 absolute text-white/70 group-hover:text-white transform:translateX(-50%) transform:translateY(-50%) transition-all duration-150 ease-in-out'
                    }
                  />
                  <img
                    className="w-full h-full object-cover "
                    alt={feature.name}
                    loading="lazy"
                    src={feature.image_src}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="dark:text-white" />
          <CarouselNext className="dark:text-white" />
        </Carousel>
      </div>
    </Stack>
  );
}
