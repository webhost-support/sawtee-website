import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';

export default function FeaturedSection({ features, className }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-start lg:flex-row gap-8',
        className
      )}
    >
      <div className="w-full space-y-5 md:space-y-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground tracking-tight ">
          <span className='relative z-20 after:content:"" after:w-full after:h-[30%] after:absolute after:bottom-1 after:left-0 after:bg-primary-100 after:z-[-1]  after:bg-gradient-to-l after:from-theme-50 after:to-theme-300 dark:after:bg-gradient-to-l dark:after:from-theme-300 dark:after:to-theme-500'>
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
    </div>
  );
}
