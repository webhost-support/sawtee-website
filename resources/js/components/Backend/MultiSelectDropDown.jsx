'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MultiSelectDropDown({
  options,
  triggerLabel,
  menuLabel,
  className,
  onCheckedChange,
}) {
  return (
    <DropdownMenu className={className}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        {options.map(option => {
          return (
            <div key={option.label}>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={option.checked}
                onCheckedChange={onCheckedChange}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
