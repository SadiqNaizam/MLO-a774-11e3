import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, CalendarDays, Plus } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 left-60 right-0 z-10 h-16 bg-card border-b border-border',
        'flex items-center justify-between px-6',
        className
      )}
    >
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        {/* Breadcrumbs can be added here if needed */}
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="text-muted-foreground">
          <CalendarDays className="w-4 h-4 mr-2" />
          Last 6 months
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Plus className="w-4 h-4 mr-2" />
              Create
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
