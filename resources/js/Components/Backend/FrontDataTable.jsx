import { DataTablePagination } from '@/components/DataTablePagination';
import { DataTableViewOptions } from '@/components/DataTableViewOptions';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [rowSelection, setRowSelection] = React.useState({});
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
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
      rowSelection,
    },
  });

  React.useEffect(() => {
    if (!showItems) return;
    table.setPageSize(showItems);
  }, [showItems, table]);

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter title..."
          value={table.getColumn('title')?.getFilterValue() ?? ''}
          onChange={event =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DataTableViewOptions table={table} />
      </div>
      <div className="rounded-md border">
        {/* <Stack
        spacing={4}
        direction={'row'}
        justifyContent={showColumnFilters ? 'space-between' : 'end'}
        mb={4}
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
              className="p-2 font-lg shadow border border-block"
              placeholder="Search all columns..."
            />
          </div>
        )}
      </Stack> */}

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <TableCell key={cell.id} className="max-w-72">
                        {' '}
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
