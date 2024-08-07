import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
// Here we have used react-icons package for the icons

const paginate = (totalPages, currentPage) => {
  const delta = 1;
  const pagination = [];

  // Push items from "current - 1" (if available) to current + 1 (if available)
  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    // if current = 1, total = 7, pagination[] => [2]
    // if current = 5, total = 7, pagination[] => [4, 5, 6];
    // current = 7, total = 7, pagination[] => [6];
    pagination.push(i);
  }

  // if 3 or more pages exist before current page
  //  items from 2 to current - 2 will be "..."
  if (currentPage - delta > 2) {
    // add "..." to the beginning
    pagination.unshift('...');
  }

  // if 3 or more exists after current page
  // items from current + 2 to lastPage(totalPage) - 1 will be "..."
  if (currentPage + delta < totalPages - 1) {
    // add "..." to the end
    pagination.push('...');
  }

  // Always add 1 (first page) to the beginning
  pagination.unshift(1);
  // Always add totalPage (last page) to the end
  pagination.push(totalPages);

  return pagination;
};

const NumberedPagination = ({
  links,
  prevPage,
  nextPage,
  currentPage,
  totalPages,
}) => {
  const [hover, setHover] = React.useState([false, false]);

  // Pagination - array of numbers/dots for pages
  const paginationArray = paginate(totalPages, currentPage);

  return (
    <nav className="mt-3 flex w-full flex-col items-center justify-center md:flex-row">
      <div
        onMouseEnter={() => setHover([!hover[0], hover[1]])}
        onMouseLeave={() => setHover([!hover[0], hover[1]])}
      >
        <Link href={prevPage}>
          <PaginationButton isDisabled={!prevPage}>
            {!hover[0] ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ArrowLeft className="h-4 w-4" />
            )}{' '}
            Newer Posts
          </PaginationButton>
        </Link>
      </div>
      <div className="flex" direction="row">
        {paginationArray.map((item, index) => {
          // if item is dots, "..."
          if (item === '...') {
            return (
              <PaginationButton key={`${item} + 1`}>{`...`}</PaginationButton>
            );
          }

          return (
            <Link key={`${item} + 1`} href={links[index + 1].url}>
              <PaginationButton isActive={links[index + 1].active}>
                {item}
              </PaginationButton>
            </Link>
          );
        })}
      </div>
      <div
        onMouseEnter={() => setHover([hover[0], !hover[1]])}
        onMouseLeave={() => setHover([hover[0], !hover[1]])}
      >
        <Link href={nextPage}>
          <PaginationButton isDisabled={!nextPage}>
            Older Posts{' '}
            {!hover[1] ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </PaginationButton>
        </Link>
      </div>
    </nav>
  );
};

const PaginationButton = ({ children, isDisabled, isActive, ...rest }) => {
  return <Button variant="outline">{children}</Button>;
};

export default NumberedPagination;
