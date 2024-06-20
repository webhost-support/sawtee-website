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
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
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

export function FrontDataTable({
  data,
  defaultColumns,
  showColumnFilters = true,
  pagination = true,
  showSearch = true,
}) {
  const [sorting, setSorting] = React.useState([]);
  const [showItems, setShowItems] = React.useState(10);
  const [columns] = React.useState(defaultColumns);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');

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
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    state: {
      sorting,
      columnVisibility,
      globalFilter,
    },
  });

  React.useEffect(() => {
    table.setPageSize(showItems);
  }, [showItems]);

  return (
    <>
      <Stack spacing={4} direction={'row'} justifyContent={showColumnFilters ? 'space-between' : 'end'} mb={4}>
        {showColumnFilters && (
          <HStack spacing={4}>
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
          </HStack>
        )}

        {showSearch && (
          <div>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              className="p-2 font-lg shadow border border-block"
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
        <Table variant={'striped'} size={'sm'} colorScheme={'blackAlpha'} layout={'responsive'}>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const meta = header.column.columnDef.meta;
                  return (
                    <Th key={header.id} onClick={header.column.getToggleSortingHandler()} isNumeric={meta?.isNumeric}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'desc' ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
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
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta = cell.column.columnDef.meta;
                  return (
                    <Td key={cell.id} isNumeric={meta?.isNumeric}>
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
              <IconButton
                className="border rounded p-1"
                onClick={() => table.setPageIndex(0)}
                isDisabled={!table.getCanPreviousPage()}
                icon={<ArrowLeftIcon />}
              />

              <IconButton
                className="border rounded p-1"
                onClick={() => table.previousPage()}
                isDisabled={!table.getCanPreviousPage()}
                icon={<ArrowBackIcon />}
              />
              <IconButton
                className="border rounded p-1"
                onClick={() => table.nextPage()}
                isDisabled={!table.getCanNextPage()}
                icon={<ArrowForwardIcon />}
              />

              <IconButton
                className="border rounded p-1"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                isDisabled={!table.getCanNextPage()}
                icon={<ArrowRightIcon />}
              />
            </HStack>
            <HStack justify="center" spacing={4}>
              <Text>Page</Text>
              <strong>
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </HStack>
            <HStack justify="center" spacing={4}>
              | Go to page:
              <Input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                padding={2}
                w={16}
              />
            </HStack>
            <Select
              w={64}
              value={showItems}
              onChange={e => {
                setShowItems(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Stack>
        )}
      </TableContainer>
    </>
  );
}
