import React from 'react';

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
                          active
                            ? 'dark:bg-sky-800/90 dark:text-white '
                            : 'dark:text-white '
                        )
                      : cn('')
                  }
                >
                  {hasChildren ? (
                    <NavigationMenuTrigger
                      className={cn(
                        active && 'bg-sky-500/20 dark:bg-sky-800/90 ',
                        'dark:text-white'
                      )}
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
                <NavigationMenuContent className="bg-sky-800/95 backdrop-blur-md border-none">
                  <DropDown menu={menuItem.children} />
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

const ListItem = React.forwardRef(
  ({ className, title, hasChildren, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            // className={cn(
            //   'block select-none text-left space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            //   className
            // )}
            {...props}
          >
            {hasChildren ? (
              <NavigationMenuLink>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {title}
              </NavigationMenuLink>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const DropDown = menu => {
  return (
    <NavigationMenu className="flex w-[400px] p-2 justify-start">
      <NavigationMenuList className="flex-col w-full items-start content-start">
        {menu.menu?.map(menuItem => {
          return (
            <NavigationMenuItem key={menuItem.title}>
              <ListItem
                key={menuItem.title}
                href={menuItem.url}
                title={menuItem.title}
                hasChildren={menuItem.children.length > 0}
              />

              {menuItem.children.length > 0 && (
                <NavigationMenuContent>
                  <DropDown menu={menuItem.children} />
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
