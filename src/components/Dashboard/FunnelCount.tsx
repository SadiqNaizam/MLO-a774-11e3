import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStageData {
  name: string;
  count: number;
  value: number;
  time: string;
  color: string;
  showTooltip?: boolean;
}

const funnelData: FunnelStageData[] = [
  { name: 'Discovery', count: 200, value: 200, time: '2 days', color: 'bg-red-500' },
  { name: 'Qualified', count: 100, value: 100, time: '2 days', color: 'bg-yellow-400', showTooltip: true },
  { name: 'In conversation', count: 50, value: 100, time: 'average time on this stage', color: 'bg-indigo-500' },
  { name: 'Negotiations', count: 20, value: 50, time: '8 days', color: 'bg-green-500' },
  { name: 'Closed won', count: 20, value: 50, time: '10 days', color: 'bg-purple-500' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

interface FunnelCountProps {
  className?: string;
}

const FunnelCount: React.FC<FunnelCountProps> = ({ className }) => {
  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-4xl font-bold text-foreground">600</span>
            <span className="ml-2 text-muted-foreground">active leads</span>
          </div>

          {/* Custom Progress Bar */}
          <div className="w-full h-3.5 bg-gray-200 rounded-full flex overflow-hidden mb-6">
            {funnelData.map((stage, index) => (
              <div
                key={index}
                className={cn('h-full', stage.color)}
                style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
              />
            ))}
          </div>

          <div className="space-y-3">
            {funnelData.map((stage) => (
              <div key={stage.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className={cn('w-3 h-3 rounded-sm mr-2.5', stage.color)}></span>
                  <span className='text-foreground'>{stage.name}</span>
                </div>
                <div className="flex items-center space-x-8">
                  <span className='text-foreground w-8 text-right'>{stage.count}</span>
                  <span className='text-muted-foreground w-12 text-right'>$ {stage.value}</span>
                  {stage.name === 'Qualified' && stage.showTooltip ? (
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <span className='text-muted-foreground w-16 text-right cursor-default'>{stage.time}</span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                            <p>average time on this stage</p>
                        </TooltipContent>
                    </Tooltip>
                  ) : stage.name === 'In conversation' ? (
                    <span className='text-xs bg-gray-700 text-white px-2 py-0.5 rounded-sm w-auto text-center'>{stage.time}</span>
                  ) : (
                    <span className='text-muted-foreground w-16 text-right'>{stage.time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default FunnelCount;
