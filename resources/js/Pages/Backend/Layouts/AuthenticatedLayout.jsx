import { DashBoardMenuItems } from '@/Utils/data';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
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
    <div className={'min-h-screen w-full bg-white text-black'}>
      <Sidebar
        isCollapsed={mobileWidth ? true : isCollapsed}
        setIsCollapsed={setIsCollapsed}
        menu={DashBoardMenuItems}
      />
      <Header
        user={user}
        isCollapsed={mobileWidth ? true : isCollapsed}
        toggleSidebar={toggleSidebar}
      />

      <div
        style={
          isCollapsed || mobileWidth
            ? {
                width: 'calc(100% - 3.5rem)',
                marginLeft: '5rem',
                marginTop: '3.5rem',
              }
            : {
                width: 'calc(100% - 16rem)',
                marginLeft: '16rem',
                marginTop: '3.5rem',
              }
        }
        className={'px-6 py-6 min-h-dvh mt-14 text-slate-500'}
      >
        {children}
      </div>
    </div>
  );
}
