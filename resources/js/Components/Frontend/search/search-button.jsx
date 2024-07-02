import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const SearchButton = props => (
  <Button
    aria-label="Search this site"
    _focus={{ boxShadow: 'none' }}
    variant="ghost"
    size="sm"
    {...props}
  >
    <SearchIcon />
  </Button>
);

export default SearchButton;
