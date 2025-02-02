import React, { useState } from 'react';
import { ThemeProvider } from '@/components/shared/theme-provider';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { DashBoardMenuItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useWindowWidth } from '@react-hook/window-size';

export default function Authenticated({ user, children }) {
  const onlyWidth = useWindowWidth();
  const [collapse, setCollapse] = useState(false);
  const isCollapsed = React.useMemo(() => {
    return onlyWidth < 768 ? true : collapse;
  }, [onlyWidth, collapse]);

  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setCollapse(!collapse);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Toaster />

        <Sidebar
          isCollapsed={mobileWidth ? true : isCollapsed}
          menu={DashBoardMenuItems}
        />
        <Header
          user={user}
          isCollapsed={mobileWidth ? true : isCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={cn(
            mobileWidth || isCollapsed ? 'ml-20' : 'ml-64',
            'relative border-l-2 border-slate-700 py-12 shadow-xl transition-all duration-200 dark:bg-bgDarker'
          )}
        >
          <div className="w-full min-h-screen px-6 mx-auto rounded-xl">
            {children}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
