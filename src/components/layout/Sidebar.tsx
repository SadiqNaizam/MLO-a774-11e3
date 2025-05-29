import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is self-contained regarding its styling and fixed positioning
  // as per src/components/Dashboard/SidebarNav.tsx and Layout Requirements.
  // The className prop is passed to SidebarNav if it needs additional styling context.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
