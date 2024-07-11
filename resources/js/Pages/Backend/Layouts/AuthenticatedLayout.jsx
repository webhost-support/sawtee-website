import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Authenticated({ user, children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className={cn('min-h-screen w-full bg-white text-black flex')}>
      <div className="py-6">
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      <div className={cn('flex-1 bg-muted/40 p-6')}>
        <Header
          user={user}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <div className={cn('p-8 w-full')}>{children}</div>
      </div>
    </div>
  );
}
