import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ScrollArea } from './scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
export default function Sidebar({ isCollapsed, menu }) {
  return (
    <aside className="ease-nav-brand my-4 block w-full max-h-fit flex-wrap items-center justify-between rounded-2xl bg-white p-0 antialiased shadow-none border-r-slate-200 xl:left-0 xl:translate-x-0 xl:bg-transparent transition-all duration-300 ">
      <div className="h-19.5">
        <Link
          href={route('admin.dashboard')}
          className="block px-4 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
        >
          <img
            src={'/favicon.ico'}
            alt="logo"
            className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
          />
          <span
            className={`ml-2 font-semibold transition-all duration-200 ease-nav-brand ${isCollapsed ? 'hidden' : ''}`}
          >
            SAWTEE CMS
          </span>
        </Link>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
      <ul className="flex flex-col pl-0 mb-0">
        {menu?.map(menuItem => {
          const routeLink = route(menuItem.route);
          const active = routeLink.includes(route().current());
          return isCollapsed ? (
            <li key={menuItem.name} className="mt-0.5 w-full">
              <TooltipProvider>
                <Link
                  href={route(menuItem.route)}
                  className={
                    'flex justify-start items-center px-2 py-2 gap-2 text-foreground hover:text-muted-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  }
                >
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div className="shadow-soft-2xl flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <menuItem.icon className="h-4 w-4" />
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
                  'shadow-soft-2xl flex items-center bg-secondary bg-center stroke-0 xl:p-1',
                'mt-2 w-full'
              )}
            >
              <Link
                href={route(menuItem.route)}
                className={
                  'flex justify-start items-center px-2 gap-2 text-foreground hover:text-muted-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                }
              >
                <div
                  className={cn(
                    active ? 'bg-primary' : 'bg-white',
                    'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'
                  )}
                >
                  <menuItem.icon
                    className="h-4 w-4"
                    color={active ? 'white' : 'currentColor'}
                  />
                </div>
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
    </aside>
  );
}
