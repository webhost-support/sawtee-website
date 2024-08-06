import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ModeToggle } from '../Frontend/header/mode-toggle';
import { Button } from './button';
import UserNav from './userNav';

export default function Header({ user, toggleSidebar }) {
  return (
    <header className={'sticky top-0 z-50 w-full'}>
      <nav className="duration-250 ease-soft-in flex w-full flex-wrap items-center justify-between border-b-2 bg-white px-0 py-2 shadow-xl transition-all dark:bg-bgDarker lg:flex-nowrap lg:justify-start">
        <div className={cn('flex h-16 w-full justify-between px-4')}>
          <Link
            href={route('admin.dashboard')}
            className="m-0 flex items-center whitespace-nowrap p-4 font-serif text-sm font-bold text-secondary-foreground"
          >
            <span
              className={
                'ease-nav-brand font-display text-center text-xl font-semibold tracking-[-0.02em] drop-shadow-sm transition-all duration-200 md:text-3xl md:leading-[5rem]'
              }
            >
              SAWTEE CMS
            </span>

            {/* <StaggeredLetterPullUp className="md:text-3xl font-bold" /> */}
          </Link>
          <div className={cn('flex shrink-0 items-center gap-4')}>
            <Button
              className="hidden p-2 sm:inline"
              variant="ghost"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <title>Sidebar Toggle</title>
              </svg>
            </Button>
          </div>

          <div className="relative ml-auto mr-6 flex gap-4 sm:items-center">
            <ModeToggle />
            <UserNav user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
}
