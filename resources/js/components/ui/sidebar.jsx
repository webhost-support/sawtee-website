
import { DashBoardMenuItems } from '@/Utils/data';
import { Nav } from './nav';

import { Link } from '@inertiajs/react';
import { useWindowWidth } from '@react-hook/window-size';
export default function Sidebar({ isCollapsed }) {
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <aside
      className={`bg-background border-r px-4 py-6 transition-all duration-300 ${
        isCollapsed ? 'w-14' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link
          href={route('admin.dashboard')}
          className="flex items-center gap-2"
        >
          <img
            src={'/favicon.ico'}
            alt="logo"
            width={30}
            height={30}
            className="w-6 h-6 text-primary"
          />
          <span
            className={`font-semibold text-lg ${isCollapsed ? 'hidden' : ''}`}
          >
            SAWTEE CMS
          </span>
        </Link>
      </div>
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={DashBoardMenuItems}
      />
    </aside>
  );
}


