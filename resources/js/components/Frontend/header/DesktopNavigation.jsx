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
                      className={cn(active && ' ', 'relative dark:text-white')}
                    >
                      {menuItem.title}
                    </NavigationMenuTrigger>
                  )}

                  {hasChildren && !hasMegaMenu && (
                    <div class="dropdown relative inline-block">
                      <button class={navigationMenuTriggerStyle()}>
                        <span class="mr-1">{menuItem.title}</span>
                        <svg
                          class="h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      {!hasMegaMenu && hasChildren && (
                        <DropDown menuItem={menuItem} />
                      )}
                    </div>
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
    </NavigationMenu>
  );
}

const DropDown = ({ className, menuItem }) => {
  return (
    <div
      class="dropdown-menu rounded-xlpt-2 absolute top-full hidden w-72 shadow-lg group-hover:block"
      aria-labelledby="dropdown-hover"
    >
      <ul className={cn('absolute w-[280px] bg-popover p-4 pt-1', className)}>
        {menuItem.children?.map(item => {
          return (
            <ListItem
              title={item.title}
              children={item.children}
              href={item.url}
            />
          );
        })}
      </ul>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className="dropdown relative inline-flex w-full">
        <Link
          ref={ref}
          className={cn(
            'flex select-none items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <span class="ext-sm mr-1 font-medium leading-none">{title}</span>
          {children.length > 0 && (
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          )}
          {children?.map(item => {
            return <DropDown key={item.title} menuItem={item} />;
          })}
        </Link>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
