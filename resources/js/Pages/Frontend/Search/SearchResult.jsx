import WebsiteHead from '@/Components/Frontend/Head';
import SearchResults from '@/Components/Frontend/search/search-results';
import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import MainLayout from '../../../components/Layouts/MainLayout';

export default function SearchResult({ posts, query }) {
  return (
    <MainLayout>
      <WebsiteHead title={'search results for ' + query} />

      <SearchResults data={posts} query={query} />
    </MainLayout>
  );
}
