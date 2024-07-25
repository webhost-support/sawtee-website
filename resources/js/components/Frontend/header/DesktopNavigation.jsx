import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import MegaMenu from './MegaMenu';

export default function DesktopNavigation({ menu }) {
  const { url, props } = usePage();
  const { experts } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationMenu className="max-w-full justify-center ">
      <NavigationMenuList className="gap-4">
        {menu.map(menuItem => {
          const active = menuItem.url === `${url}`;
          const hasMegaMenu =
            menuItem.name === 'Our Work' || menuItem.name === 'Know Us';
          const hasChildren = menuItem.children.length > 0;
          return (
            <NavigationMenuItem key={menuItem.title}>
              <Link href={menuItem.url}>
                <NavigationMenuLink
                  active={active}
                  className={
                    !hasMegaMenu && !hasChildren
                      ? cn(
                          navigationMenuTriggerStyle(),
                          active ? ' dark:text-white ' : 'dark:text-white '
                        )
                      : cn('')
                  }
                  onMouseEnter={() =>
                    !hasMegaMenu && !hasChildren && setIsOpen(!isOpen)
                  }
                >
                  {hasChildren ? (
                    <NavigationMenuTrigger
                      className={cn(active && ' ', 'dark:text-white')}
                    >
                      {menuItem.title}
                    </NavigationMenuTrigger>
                  ) : (
                    menuItem.title
                  )}
                </NavigationMenuLink>
              </Link>
              {hasMegaMenu ? (
                <NavigationMenuContent className="border-none">
                  <MegaMenu item={menuItem} experts={experts} />
                </NavigationMenuContent>
              ) : (
                <NavigationMenuContent className="border-none">
                  <DropDown
                    menu={menuItem.children}
                    isOpen={isOpen}
                    onToggle={setIsOpen}
                  />
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      {/* <NavigationMenuViewport className="bg-transparent right-0" /> */}
    </NavigationMenu>
  );
}


const DropDown = ({ menu, isOpen, onToggle }) => {
  console.log(isOpen);
  return (
    <DropdownMenu open={isOpen} onOpenChange={onToggle}>
      {menu.menu?.map(menuItem => {
        return (
          <DropdownMenuItem key={menuItem.title}>
            {menuItem.children.length > 0 ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Link href={menuItem.url}>{menuItem.title}</Link>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {menuItem.children.map(child => (
                      <DropdownMenuItem key={child.title}>
                        {child.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <Link href={menuItem.url}>{menuItem.title}</Link>
            )}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenu>
  );
};
