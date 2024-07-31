import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';

export default function FeaturedSection({ features }) {
  return features.map((feature, index) =>
    index % 2 === 0 ? (
      <div
        key={feature.id}
        className="xs:w-[90%] xs:flex-col xs:gap-2 mx-auto mt-6 flex justify-center sm:w-[85%] md:flex-row md:items-center lg:items-stretch lg:gap-4 xl:w-[80%]"
      >
        <div className="xs:block xs:w-full relative sm:block md:hidden">
          <Link
            href={feature.link}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-0"
          >
            <img
              className="xs:rounded-sm h-full w-full object-cover sm:rounded-sm lg:rounded-lg"
              src={feature.image_src}
              alt={feature.title}
              loading="lazy"
            />
            <div className="absolute inset-0 z-30 h-full w-full bg-black opacity-20 transition-opacity group-hover:opacity-30" />

            <ExternalLink
              aria-label={'Play Button'}
              className={
                'transform:translateX(-50%) transform:translateY(-50%) absolute z-20 h-12 w-12 text-white/70 transition-all duration-150 ease-in-out group-hover:text-white'
              }
            />
          </Link>
        </div>
        <div className="xs:w-full xs:p-0 rounded-md bg-bgDarker dark:text-slate-400 md:p-4 lg:w-[50%]">
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-300">
            <span className='after:content:"" after:bg-primary-100 relative z-20 after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-[30%] after:w-full after:bg-gradient-to-l after:from-theme-50 after:to-theme-300 dark:after:bg-gradient-to-l dark:after:from-theme-300 dark:after:to-theme-500'>
              {feature.title}
            </span>
          </h2>

          <p className="text-md mt-4">{feature.description}</p>
        </div>
        <div className="xs:hidden xs:w-full relative sm:hidden md:block lg:w-[50%]">
          <Link
            href={feature.link}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-0"
          >
            <img
              className="xs:rounded-sm h-full w-full object-cover lg:rounded-lg"
              src={feature.image_src}
              alt={feature.title}
              loading="lazy"
            />
            <div className="absolute inset-0 z-30 h-full w-full bg-black opacity-20 transition-opacity group-hover:opacity-30" />

            <ExternalLink
              aria-label={'Play Button'}
              className={
                'transform:translateX(-50%) transform:translateY(-50%) absolute z-20 h-12 w-12 text-white/70 transition-all duration-150 ease-in-out group-hover:text-white'
              }
            />
          </Link>
        </div>
      </div>
    ) : (
      <div
        key={feature.id}
        className="xs:w-[90%] xs:flex-col xs:gap-2 mx-auto mt-4 flex justify-center sm:w-[85%] md:flex-row md:items-center lg:items-stretch lg:gap-4 xl:w-[80%]"
      >
        <div className="xs:w-full relative lg:w-[50%]">
          <Link
            href={feature.link}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-0"
          >
            <img
              className="xs:rounded-sm h-full w-full object-cover sm:rounded-sm lg:rounded-lg"
              src={feature.image_src}
              alt={feature.title}
              loading="lazy"
            />
            <div className="absolute inset-0 z-30 h-full w-full bg-black opacity-20 transition-opacity group-hover:opacity-30" />

            <ExternalLink
              aria-label={'Play Button'}
              className={
                'transform:translateX(-50%) transform:translateY(-50%) absolute z-20 h-12 w-12 text-white/70 transition-all duration-150 ease-in-out group-hover:text-white'
              }
            />
          </Link>
        </div>
        <div className="xs:w-full xs:p-0 rounded-md bg-bgDarker dark:text-slate-400 sm:w-full md:p-4 lg:w-[50%]">
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-300">
            <span className='after:content:"" after:bg-primary-100 relative z-20 after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-[30%] after:w-full after:bg-gradient-to-l after:from-theme-50 after:to-theme-300 dark:after:bg-gradient-to-l dark:after:from-theme-300 dark:after:to-theme-500'>
              {feature.title}
            </span>
          </h2>
          <p className="text-md mt-4">{feature.description}</p>
        </div>
      </div>
    )
  );
}
