import {
  Box,
  Button,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
import React, { useEffect } from 'react';
// Here we have used react-icons package for the icons
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';

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
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      as="nav"
      aria-label="Pagination"
      // spacing={2}
      w="full"
      justify="center"
      alignItems="center"
      mt={{ base: 3, md: 0 }}
    >
      <Box
        onMouseEnter={() => setHover([!hover[0], hover[1]])}
        onMouseLeave={() => setHover([!hover[0], hover[1]])}
      >
        <StyledLink href={prevPage}>
          <PaginationButton
            isDisabled={!prevPage}
            leftIcon={!hover[0] ? <HiChevronLeft /> : <HiArrowLeft />}
          >
            Newer Posts
          </PaginationButton>
        </StyledLink>
      </Box>
      <Stack direction="row">
        {paginationArray.map((item, index) => {
          // if item is dots, "..."
          if (item === '...') {
            return (
              <PaginationButton key={`${item} + 1`}>{`...`}</PaginationButton>
            );
          }

          return (
            <StyledLink key={`${item} + 1`} href={links[index + 1].url}>
              <PaginationButton isActive={links[index + 1].active}>
                {item}
              </PaginationButton>
            </StyledLink>
          );
        })}
      </Stack>
      <Box
        onMouseEnter={() => setHover([hover[0], !hover[1]])}
        onMouseLeave={() => setHover([hover[0], !hover[1]])}
      >
        <StyledLink href={nextPage}>
          <PaginationButton
            isDisabled={!nextPage}
            rightIcon={!hover[1] ? <HiChevronRight /> : <HiArrowRight />}
          >
            Older Posts
          </PaginationButton>
        </StyledLink>
      </Box>
    </Stack>
  );
};

const PaginationButton = ({ children, isDisabled, isActive, ...rest }) => {
  const activeStyle = {
    bg: useColorModeValue('primary.500', 'primary.700'),
    color: 'white',
    outline: 'none',
    border: 'none',
  };

  const hoverStyle = {
    bg: 'var(--color-darker)',
    color: 'white',
    border: 'none',
  };
  const size = useBreakpointValue(['sm', 'md']);
  const ButtonColor = useColorModeValue(
    'var(--color-dark)',
    'var(--color-light)'
  );

  return (
    <Button
      py={1}
      px={3}
      // colorScheme={useColorModeValue("whiteAlpha", "BlackAlpha")}
      size={size}
      variant="outline"
      rounded="md"
      color={isDisabled ? 'grey' : ButtonColor}
      _hover={!isDisabled && hoverStyle}
      cursor={isDisabled && 'not-allowed'}
      {...(isActive && activeStyle)}
      {...rest}
      _focus={{
        outline: 'none',
        border: 'none',
      }}
    >
      {children}
    </Button>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default NumberedPagination;
