

import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { buttonVariants } from './button';
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
        `max-w-64 ease-nav-brand z-990 absolute inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl bg-white p-0 antialiased shadow-none border-r-slate-200 xl:left-0 xl:translate-x-0 xl:bg-transparent text-slate-500 transition-all duration-300 ${
          isCollapsed ? 'w-14' : 'w-64'
        }`
      )}
    >
      <div class="h-19.5 items-center block w-auto ">
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
      <hr class="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
      <div class="items-center block w-auto max-h-screen overflow-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          {menu?.map(menuItem => {
            const routeLink = route(menuItem.route);
            return isCollapsed ? (
              <li key={menuItem.name} className="mt-0.5 w-full">
                <TooltipProvider>
                  <Link
                    href={route(menuItem.route)}
                    className={cn(
                      buttonVariants({
                        variant: routeLink.includes(url) ? 'default' : 'ghost',
                        size: 'icon',
                      }),
                      'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors'
                    )}
                  >
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <div class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                          <menuItem.icon className="h-4 w-4" />
                          <span className={'hidden sr-only'}>
                            {menuItem.name}
                          </span>
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
              <li key={menuItem.name} className="mt-0.5 w-full">
                <Link
                  href={route(menuItem.route)}
                  className={cn(
                    'flex justify-start items-center px-2 py-2 gap-2 text-muted-foreground hover:text-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <div class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                    <menuItem.icon className="h-4 w-4" />
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
      </div>
    </aside>
  );
}


