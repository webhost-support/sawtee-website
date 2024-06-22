import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import {
  Checkbox,
  HStack,
  IconButton,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { rankItem } from '@tanstack/match-sorter-utils';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { DebouncedInput } from '../Frontend/index';

export function DataTable({ data, defaultColumns, showColumnFilters = true, pagination = true, showSearch = true }) {
  const [sorting, setSorting] = React.useState([]);
  const [columns] = React.useState(defaultColumns);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [categoryName] = React.useState(() => {
    const array = data.path ? data.path.split('/admin/') : [];
    return array[array.length - 1];
  });
  const fuzzyFilter = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data: data.data,
    manualPagination: false,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    // globalFilterFn: "fuzzy",
    state: {
      sorting,
      columnVisibility,
      globalFilter,
    },
  });

  return (
    <>
      <Stack
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={showColumnFilters ? 'space-between' : 'end'}
        mb={4}
        flexWrap="wrap"
      >
        {showColumnFilters && (
          <Stack
            spacing={4}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-evenly'}
            mb={4}
            flexWrap="wrap"
          >
            <Checkbox
              defaultChecked={table.getIsAllColumnsVisible()}
              onChange={table.getToggleAllColumnsVisibilityHandler()}
            >
              Show All Columns
            </Checkbox>
            {table.getAllLeafColumns().map(column => {
              return (
                <Checkbox
                  key={column.id}
                  defaultChecked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                >
                  {column.columnDef.header}
                </Checkbox>
              );
            })}
          </Stack>
        )}

        {showSearch && (
          <div>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder="Search all columns..."
            />
          </div>
        )}
      </Stack>
      <TableContainer
        p={[4, 8]}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.700')}
        rounded={'xl'}
      >
        <Table
          variant={'simple'}
          size={{ base: 'sm', xxl: 'md' }}
          colorScheme={'light'}
          layout={'responsive'}
          fontSize={{ base: 'sm', xl: 'md' }}
        >
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const meta = header.column.columnDef.meta;
                  return (
                    <Th key={header.id} onClick={header.column.getToggleSortingHandler()} isNumeric={meta?.isNumeric}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <Text as="span" pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'desc' ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </Text>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Tr
                key={row.id}
                _hover={{
                  bg: useColorModeValue('gray.200', 'blackAlpha.300'),
                }}
              >
                {row.getVisibleCells().map(cell => {
                  const meta = cell.column.columnDef.meta;
                  return (
                    <Td key={cell.id} isNumeric={meta?.isNumeric} maxW={'48'} overflow="hidden">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
        {pagination && (
          <Stack direction="row" mx="auto" justify="center" spacing={6} mt={6}>
            <HStack justify="center" spacing={4}>
              <Link href={data.first_page_url} only={[categoryName]}>
                <IconButton
                  p={1}
                  variant="outline"
                  onClick={() => table.setPageIndex(0)}
                  isDisabled={!data.prev_page_url}
                  icon={<ArrowLeftIcon />}
                />
              </Link>

              <Link href={data.prev_page_url} only={[categoryName]}>
                <IconButton p={1} variant="outline" isDisabled={!data.prev_page_url} icon={<ArrowBackIcon />} />
              </Link>
              <Link href={data.next_page_url} only={[categoryName]}>
                <IconButton
                  p={1}
                  variant="outline"
                  onClick={() => table.nextPage()}
                  isDisabled={!data.next_page_url}
                  icon={<ArrowForwardIcon />}
                />
              </Link>
              <Link href={data.last_page_url} only={[categoryName]}>
                <IconButton p={1} variant="outline" isDisabled={!data.next_page_url} icon={<ArrowRightIcon />} />
              </Link>
            </HStack>
            <HStack justify="center" spacing={4}>
              <Text>
                {'Page '}
                <Text as="span" fontWeight={'semibold'}>
                  {data.current_page}
                </Text>
                {' of '}
                <Text as="span" fontWeight={'semibold'}>
                  {data.last_page}
                </Text>
              </Text>
            </HStack>
            <HStack justify="center" spacing={4}>
              <Text fontWeight={'semibold'}>| Go to page:</Text>

              <Input
                type="number"
                defaultValue={data.current_page}
                onChange={e => {
                  const page = setTimeout(() => {
                    Inertia.visit(`${data.path}?page=${e.target.value}`, {
                      method: 'get',
                      replace: true,
                      preserveState: true,
                      only: [categoryName],
                    });
                  }, 1500);
                  clearTimeout(page);
                }}
                padding={2}
                maxW={10}
              />
            </HStack>
          </Stack>
        )}
      </TableContainer>
    </>
  );
}
