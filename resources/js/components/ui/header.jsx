import { ChevronLeftCircleIcon } from 'lucide-react';
import { Button } from './button';
import UserNav from './userNav';

export default function Header({ user, isCollapsed, setIsCollapsed }) {
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <header className="w-full flex items-center justify-end mb-6">
      <div className="position-absolute right-[14]">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={toggleSidebar}
        >
          <ChevronLeftCircleIcon className="w-4 h-4" />
          <span className={isCollapsed ? 'hidden' : ''}>Toggle Sidebar</span>
        </Button>
      </div>
      <UserNav user={user} />
    </header>
  );
}


