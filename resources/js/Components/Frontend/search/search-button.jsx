import { Button } from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchButton = props => (
	<Button aria-label="Search this site" _focus={{ boxShadow: 'none' }} variant="ghost" size="sm" {...props}>
		<SearchIcon />
	</Button>
);

export default SearchButton;
