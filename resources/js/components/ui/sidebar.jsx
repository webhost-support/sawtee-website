import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { ScrollArea } from './scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
export default function Sidebar({ isCollapsed, menu }) {
    const { url } = usePage();
    return (
      <aside
        className={cn(
          isCollapsed ? 'w-20' : 'w-64',
          'ease-nav-brand fixed z-40 min-h-screen top-20 pt-4 flex flex-wrap items-start justify-center border-r-2 border-slate-700 bg-white antialiased transition-transform duration-200 shadow-xl left-0 translate-x-0'
        )}
      >
        <ScrollArea className="h-screen w-full px-4">
          <ul className="flex flex-col gap-1 pl-0 mb-0">
            {menu?.map(menuItem => {
              const routeLink = route(menuItem.route);
              const active = routeLink.includes(url);
              return isCollapsed ? (
                <li key={menuItem.name} className=" w-full">
                  <TooltipProvider>
                    <Link
                      href={route(menuItem.route)}
                      className={
                        'flex justify-center items-center px-2 py-2 gap-2 text-foreground hover:text-muted-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                      }
                    >
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div
                            className={cn(
                              active ? 'bg-primary' : 'bg-white',
                              'shadow-soft-2xl flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'
                            )}
                          >
                            <menuItem.icon
                              className="h-4 w-4"
                              color={active ? 'white' : 'currentColor'}
                            />
                            <span className={'sr-only'}>{menuItem.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="z-50">
                          <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                            {menuItem.name}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  </TooltipProvider>
                </li>
              ) : (
                <li
                  key={menuItem.name}
                  className={cn(
                    active &&
                      'shadow-soft-2xl flex rounded-lg items-center bg-center stroke-0 border-2 border-slate-700 ',
                    ' w-full hover:bg-secondary xl:p-1'
                  )}
                >
                  <Link
                    href={route(menuItem.route)}
                    className={
                      'flex justify-start w-full mr-2 h-8 items-center px-2 gap-2 text-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white '
                    }
                  >
                    <menuItem.icon className="h-4 w-4" />
                    {menuItem.name && (
                      <span
                        className={cn(
                          menuItem.variant === 'default' &&
                            'ml-1 duration-300 opacity-100 pointer-events-none ease-soft'
                        )}
                      >
                        {menuItem.name}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </aside>
    );
}
