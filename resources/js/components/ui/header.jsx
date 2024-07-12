import { ChevronLeftCircleIcon, SearchIcon } from 'lucide-react';
import { Button } from './button';
import UserNav from './userNav';

export default function Header({ user, toggleSidebar }) {
  return (
    <header className={' transition-all border-b duration-200 shadow-md mt-4'}>
      <nav
        className="relative bg-white ease-soft-in-out flex flex-wrap px-4 items-center justify-between *:transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
        id="navbarTop"
        navbar-scroll="true"
        data-navbar="true"
        data-navbar-value="null"
      >
        <Button
          className="rounded-full sm:hidden lg:inline-flex p-0"
          variant="ghost"
        >
          <ChevronLeftCircleIcon onClick={toggleSidebar} className="w-6 h-6" />
        </Button>
        <div className="flex items-center justify-between py-1 lg:w-full flex-wrap-inherit">
          <div className="flex items-center mt-2 sm:mt-0 grow sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
              <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <SearchIcon className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-primary-300 focus:outline-none focus:transition-shadow"
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


