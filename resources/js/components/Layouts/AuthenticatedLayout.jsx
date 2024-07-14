import { DashBoardMenuItems } from "@/lib/data";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Authenticated({ user, children }) {
  const onlyWidth = useWindowWidth();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="min-h-screen">
      <div className="max-h-screen w-full grid grid-rows-[auto] grid-cols-[auto,repeat(4,1fr)]">
        {!mobileWidth && (
          <div
            className={cn(
              isCollapsed ? "w-14" : "w-64",
              "px-2 w-full mx-auto row-span-3 border-r-2 col-span-1 bg-white",
            )}
          >
            <Sidebar isCollapsed={isCollapsed} menu={DashBoardMenuItems} />
          </div>
        )}
        <div
          className={cn(
            mobileWidth ? "col-span-5" : "col-span-4",
            " bg-white sticky top-0 z-50 w-full ",
          )}
        >
          <Header
            user={user}
            menu={DashBoardMenuItems}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div
          className={cn(
            mobileWidth ? "col-span-5" : "col-span-4",
            "p-6 w-full row-span-2 min-h-dvh mt-4",
          )}
        >
          <Toaster />

          {children}
        </div>
      </div>
    </div>
  );
}
