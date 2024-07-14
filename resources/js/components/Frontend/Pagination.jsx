import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import PrimaryButton from '../Backend/PrimaryButton';
import InertiaChakraLink from './styles/inertia-chakra-link';

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
    <InertiaChakraLink
      as={Link}
      href={link}
      aria-disabled={isDisabled}
      width="100%"
      role="group"
      {...rest}
    >
      <PrimaryButton
        colorScheme={'primary'}
        aria-label={label}
        isDisabled={isDisabled}
        variant="outline"
        w="full"
      >
        {slot === 'before' && children}
        <Box
          className="icon"
          boxSize="30px"
          height="auto"
          as={icon}
          _groupHover={{
            transform:
              slot === 'before' ? 'translateX(10px)' : 'translateX(-10px)',
          }}
        />
        {slot === 'after' && children}
      </PrimaryButton>
    </InertiaChakraLink>
  );
};

const Pagination = ({
  links,
  prevPage,
  nextPage,
  currentPage,
  totalPages,
  ...rest
}) => {
  return (
    <Stack direction="row" spacing="40px" {...rest}>
      <PaginationButton
        link={prevPage}
        isDisabled={!prevPage}
        slot="after"
        icon={ArrowBackIcon}
      >
        <span>Newer posts</span>
      </PaginationButton>
      <PaginationButton
        link={nextPage}
        slot="before"
        isDisabled={!nextPage}
        icon={ArrowForwardIcon}
      >
        <span>Older posts</span>
      </PaginationButton>
    </Stack>
  );
};

export default Pagination;
