import { cn } from '@/lib/utils';

export const PostContent = ({ className, ...props }) => (
  <div
    className={cn(
      'z-10 mt-auto flex w-full flex-col items-center p-10 text-left uppercase text-white',
      className
    )}
    {...props}
  />
);

export const PostTitle = ({ className, ...props }) => (
  <h2
    className={cn(
      'pointer-events-none relative text-2xl font-medium',
      className
    )}
    {...props}
  />
);

export const PostOverlay = ({ className, ...props }) => (
  <div
    className={cn("duration-250 ease pointer-events-none absolute inset-0 z-10 h-full w-full bg-[rgba(0,0,0,0.4)] transition-all group-hover:bg-[rgba(0,0,0,0.6)]", className)}
    {...props}
  />
);

export const PostImageWithOverlay = ({ src, srcSet, alt, ...props }) => (
  <div className="relative w-full cursor-pointer overflow-hidden" {...props}>
    <PostOverlay />
    <PostImage
      className={'linear transition-all duration-500 group-hover:scale-105'}
      src={src}
      srcSet={srcSet}
      alt={alt}
    />
  </div>
);

export const PrimaryPostArticle = ({ className, ...props }) => (
  <article
    className={cn(
      'relative flex h-auto min-h-[unset] cursor-pointer flex-col items-end pt-20 md:h-full md:min-h-[530px] md:pt-[250px]',
      className
    )}
    {...props}
  />
);

export const SecondaryPostArticle = ({ className, ...props }) => (
  <article
    className={cn(
      'relative flex h-full min-h-[unset] grow cursor-pointer flex-col lg:min-h-[300px]',
      className
    )}
    {...props}
  />
);

export const PostImage = ({ className, ...props }) => (
  <img
    className={cn(
      'absolute left-0 top-0 aspect-[5/2] w-full object-cover',
      className
    )}
    {...props}
  />
);
