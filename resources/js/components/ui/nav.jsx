
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ScrollArea } from './scroll-area';

export function Nav({ links, isCollapsed }) {
  const { url } = usePage();
  return (
    <TooltipProvider>
      <ScrollArea
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 h-[screen] w-full"
      >
        <nav className="grid gap-2 px-2">
          {links.map(link => {
            const routeLink = route(link.route);
            return isCollapsed ? (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={route(link.route)}
                    className={cn(
                      buttonVariants({
                        variant: routeLink.includes(url) ? 'default' : 'ghost',
                        size: 'icon',
                      }),
                      'h-9 w-9',

                      'flex justify-start px-2 py-2 gap-2 text-muted-foreground hover:text-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className={'hidden sr-only'}>{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  <span className="ml-auto text-muted-foreground">
                    {link.name}
                  </span>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={link.name}
                href={route(link.route)}
                className={cn(
                  'flex justify-start px-2 py-2 gap-2 text-muted-foreground hover:text-foreground dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' &&
                        'text-background dark:text-white'
                    )}
                  >
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </TooltipProvider>
  );
}
