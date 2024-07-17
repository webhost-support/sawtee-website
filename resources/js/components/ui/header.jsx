import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Button } from './button';
import UserNav from './userNav';

export default function Header({ user, isCollapsed, toggleSidebar }) {
  return (
    <header className={'sticky top-0 z-50'}>
      <nav className=" flex flex-wrap w-full items-center justify-between px-0 py-2 transition-all shadow-xl duration-250 ease-soft-in  lg:flex-nowrap lg:justify-start bg-white border-b-2 border-b-slate-700 dark:bg-gray-800 dark:border-slate-700 ">
        <div className={cn('flex justify-between w-full h-16 px-6')}>
          <Link
            href={route('admin.dashboard')}
            className="p-4 m-0 text-sm flex items-center whitespace-nowrap text-slate-700"
          >
            <span
              className={
                'font-semibold transition-all duration-200 ease-nav-brand'
              }
            >
              SAWTEE CMS
            </span>
          </Link>
          <div className={cn('shrink-0 flex gap-4 items-center')}>
            <Button
              className="p-2 hidden sm:inline"
              variant="ghost"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <title>Sidebar Toggle</title>
              </svg>
            </Button>
          </div>

          <div className="ml-auto mr-6 relative flex sm:items-center">
            <UserNav user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
}
