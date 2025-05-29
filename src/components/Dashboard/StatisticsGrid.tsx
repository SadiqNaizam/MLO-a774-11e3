import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from './StatCard';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface StatisticsGridProps {
  className?: string;
}

interface ReasonLostStat {
  percentage: string;
  reason: string;
}

const reasonsLostData: ReasonLostStat[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' }, // Duplicate reason from image for 30%
];

const StatisticsGrid: React.FC<StatisticsGridProps> = ({ className }) => {
  return (
    <TooltipProvider>
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {reasonsLostData.map((item, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-foreground">{item.percentage}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 pt-2">
          <StatCard 
            stat="900" 
            description="total leads count"
            textAlign="left"
          />
          <StatCard 
            stat="12" 
            description="days in average to convert lead" 
            textAlign="left"
          />
          <StatCard 
            stat="30" 
            description="inactive leads" 
            textAlign="left"
            icon={<Tooltip>
                    <TooltipTrigger asChild>
                        <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help ml-1" />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p>Information about inactive leads.</p>
                    </TooltipContent>
                  </Tooltip>}
          />
        </CardContent>
      </Card>
    </div>
    </TooltipProvider>
  );
};

export default StatisticsGrid;
