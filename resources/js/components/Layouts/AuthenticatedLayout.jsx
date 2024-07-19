import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Toaster } from '@/components/ui/toaster';
import { DashBoardMenuItems } from '@/lib/data';
import { cn } from "@/lib/utils";
import { useWindowWidth } from "@react-hook/window-size";
import React from 'react';
import Footer from '../ui/footer';

export default function Authenticated({ user, children }) {
  const onlyWidth = useWindowWidth();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <main className="min-h-screen">
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
          'relative transition-all duration-200'
        )}
      >
        <div className="w-full px-6 py-12 min-h-screen  mx-auto rounded-xl">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
