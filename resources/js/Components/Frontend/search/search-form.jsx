import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Icon, Input } from '@chakra-ui/react';
import React from 'react';

// A11y: Add a hidden search button
const SearchForm = ({ setPosts, setQuery }) => {
	const [searchQuery, setSearchQuery] = React.useState(null);
	function handleSubmit(e) {
		e.preventDefault();
		const URL = `/search?query=${searchQuery}`;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', URL);
		xhr.onload = function () {
			if (xhr.status === 200) {
				setPosts(JSON.parse(xhr.responseText));
			}
		};
		xhr.send();
	}

	return (
		<Flex
			as="form"
			maxWidth="lg"
			mx="auto"
			pos="relative"
			width="100%"
			height="100%"
			justifyContent="center"
			alignItems="center"
			onSubmit={handleSubmit}
			mb={10}
		>
			<Input
				placeholder="Type search query and Hit Enter"
				variant="flushed"
				name="search"
				id="search"
				size="lg"
				fontSize={{ base: '16px', md: '24px' }}
				height="auto"
				focusBorderColor="primary.500"
				py={{ base: 1, md: 2 }}
				onChange={e => {
					setSearchQuery(e.target.value);
					setQuery(e.target.value);
				}}
			/>
			<Icon as={SearchIcon} size="1.5rem" color="gray.400" position="absolute" right="0" />
		</Flex>
	);
};

export default SearchForm;
