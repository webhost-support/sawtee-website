import { DashBoardMenuItems } from '@/Utils/data';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useWindowWidth } from '@react-hook/window-size';
import React from 'react';

export default function Authenticated({ user, children }) {
    const onlyWidth = useWindowWidth();
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
      setIsCollapsed(!isCollapsed);
    }

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto] grid-cols-[auto,repeat(4,1fr)] gap-4 px-4">
      <div
        className={cn(
          isCollapsed ? 'w-14' : 'w-64',
          'px-2 w-full mx-auto rounded-xl row-span-3 border-r-2 col-span-1'
        )}
      >
        <Sidebar
          isCollapsed={mobileWidth ? true : isCollapsed}
          setIsCollapsed={setIsCollapsed}
          menu={DashBoardMenuItems}
        />
      </div>
      <div className=" bg-white sticky top-0 z-50 p-4 w-full col-span-4 rounded-xl">
        <Header user={user} toggleSidebar={toggleSidebar} />
      </div>
      <div className="p-6 w-full rounded-xl row-span-2 col-span-4 min-h-dvh mt-4 text-slate-500">
        {children}
      </div>
    </div>
  );
}
