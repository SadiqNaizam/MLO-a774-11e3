import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      <Sidebar />
      <Header />
      {/* 
        Main content area. 
        - ml-60: offset for the fixed sidebar (w-60).
        - pt-16: offset for the fixed header (h-16).
        - h-screen: ensures the main area can utilize full viewport height for scrolling.
        - min-w-0: prevents content from breaking layout (e.g., long words/tables).
        - overflow-y-auto: enables vertical scrolling for content exceeding viewport height.
      */}
      <main className="ml-60 pt-16 h-screen min-w-0 overflow-y-auto">
        {/* 
          Inner padding for the content as per mainContent.layout ("p-6").
          The "mainContent.container: grid gap-6" requirement is typically applied by the specific page component 
          that renders its content within this layout, allowing flexibility for different page structures.
        */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
