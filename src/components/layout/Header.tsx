import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader is self-contained regarding its styling and fixed positioning
  // as per src/components/Dashboard/TopHeader.tsx and Layout Requirements.
  // The className prop is passed to TopHeader if it needs additional styling context.
  return <TopHeader className={cn(className)} />;
};

export default Header;
