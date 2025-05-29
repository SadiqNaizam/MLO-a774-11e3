import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PageHeaderProps {
  className?: string;
  activeTab?: 'Sales' | 'Leads';
  onTabChange?: (tab: 'Sales' | 'Leads') => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  activeTab = 'Leads' as const,
  onTabChange,
}) => {
  const [currentTab, setCurrentTab] = React.useState<'Sales' | 'Leads'>(activeTab);

  const handleTabChange = (value: string) => {
    const newTab = value as 'Sales' | 'Leads';
    setCurrentTab(newTab);
    if (onTabChange) {
      onTabChange(newTab);
    }
  };

  return (
    <div className={cn('pb-4 border-b border-border', className)}>
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <TabsList className="bg-transparent p-0">
          <TabsTrigger 
            value="Sales"
            className={cn(
              'pb-2 px-1 mr-4 text-lg font-medium rounded-none border-b-2 border-transparent',
              'data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-none',
              'data-[state=inactive]:text-muted-foreground hover:text-foreground'
            )}
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="Leads"
            className={cn(
              'pb-2 px-1 mr-4 text-lg font-medium rounded-none border-b-2 border-transparent',
              'data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-none',
              'data-[state=inactive]:text-muted-foreground hover:text-foreground'
            )}
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
