import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
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
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import MegaMenu from './MegaMenu';

export default function DesktopNavigation({ menu }) {
  const { url, props } = usePage();
  const { experts } = props;
  return (
    <NavigationMenu className="hidden max-w-full justify-center lg:flex">
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
                          active ? 'dark:text-white' : 'dark:text-white'
                        )
                      : cn('')
                  }
                >
                  {hasMegaMenu && (
                    <NavigationMenuTrigger
                      className={cn(active && ' ', 'dark:text-white')}
                    >
                      {menuItem.title}
                    </NavigationMenuTrigger>
                  )}

                  {!hasMegaMenu && hasChildren && (
                    <DropDown menuItem={menuItem} />
                  )}

                  {!hasMegaMenu && !hasChildren && menuItem.title}
                </NavigationMenuLink>
              </Link>
              {hasMegaMenu && (
                <NavigationMenuContent>
                  <MegaMenu item={menuItem} experts={experts} />
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

const DropDown = ({ className, menuItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={cn(navigationMenuTriggerStyle(), "w-full justify-between cursor-pointer")}
        onMouseEnter={() => setIsOpen(!isOpen)}
      >
        {menuItem.title}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItem.children?.map(item => {
          return (
            <DropdownMenuItem className="cursor-pointer"  key={item.title}>
              {item.children.length > 0 ? <SubMenu item={item} /> : item.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SubMenu = ({ item }) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{item.title}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {item.children?.map(subitem => {
            return (
              <DropdownMenuItem key={subitem.title}>
                {subitem.children.length > 0 ? (
                  <SubMenu item={subitem} />
                ) : (
                  subitem.title
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
