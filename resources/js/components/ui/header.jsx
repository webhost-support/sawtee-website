import { ChevronLeftCircleIcon } from 'lucide-react';
import { Button } from './button';
import UserNav from './userNav';

export default function Header({ user, isCollapsed, toggleSidebar }) {
  return (
    <header
      style={
        isCollapsed
          ? {
              width: 'calc(100% - 5rem)',
              marginLeft: '5rem',
              
            }
          : {
              width: 'calc(100% - 16rem)',
              marginLeft: '16rem',

            }
      }
      className={
        'fixed top-0 bg-white ease-soft-in-out xl:ml-64 h-14 max-h-screen rounded-xl transition-all duration-200'
      }
    >
      <nav
        class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
        id="navbarTop"
        navbar-scroll="true"
        data-navbar="true"
        data-navbar-value="null"
      >
        <Button className="rounded-full" variant="ghost">
          <ChevronLeftCircleIcon onClick={toggleSidebar} className="w-6 h-6" />
        </Button>
        <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div class="flex items-center md:ml-auto md:pr-4">
              <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <i class="fas fa-search" />
                </span>
                <input
                  type="text"
                  class="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-primary-300 focus:outline-none focus:transition-shadow"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <UserNav user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
}


