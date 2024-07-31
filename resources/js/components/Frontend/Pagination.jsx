import { cn } from '@/lib/utils';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

const PaginationButton = ({
  link,
  isDisabled,
  label = '',
  icon,
  slot,
  children,
  ...rest
}) => {
  return (
    <Link
      className="group w-full"
      href={link}
      aria-disabled={isDisabled}
      {...rest}
    >
      <Button
        aria-label={label}
        isDisabled={isDisabled}
        variant="outline"
        size="lg"
        className="w-full dark:border-borderColor dark:bg-bgDarker dark:text-white"
      >
        {slot === 'before' && children}
        <span>{label}</span>
        {slot === 'after' && children}
      </Button>
    </Link>
  );
};

const Pagination = ({
  links,
  prevPage,
  nextPage,
  currentPage,
  totalPages,
  className,
}) => {
  return (
    <div className={cn('flex w-full gap-10', className)}>
      <PaginationButton
        link={prevPage}
        label="Older posts"
        isDisabled={!prevPage}
        slot="before"
      >
        <ArrowBackIcon className="mr-3 h-8 w-8 translate-x-[100%] opacity-0 transition-all duration-100 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:mr-4" />
      </PaginationButton>
      <PaginationButton
        link={nextPage}
        label="Newer Posts"
        slot="after"
        isDisabled={!nextPage}
      >
        <ArrowForwardIcon className="ml-3 -translate-x-[100%] opacity-0 transition-all duration-100 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:ml-4" />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
