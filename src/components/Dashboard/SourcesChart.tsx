import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // red-500
  { name: 'Behance', value: 1000, percentage: 20, color: '#F59E0B' }, // amber-500 (yellow was too light)
  { name: 'Instagram', value: 1000, percentage: 20, color: '#14B8A6' }, // teal-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#22C55E' }, // green-500 (light green was too light)
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomPieTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border border-border rounded shadow-lg">
        <p className="text-sm text-foreground">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-xs text-muted-foreground">{`${payload[0].payload.percentage}% of total`}</p>
      </div>
    );
  }
  return null;
};

interface SourcesChartProps {
  className?: string;
}

const SourcesChart: React.FC<SourcesChartProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<'Leads came' | 'Leads Converted' | 'Total deals size'>('Leads Converted' as const);

  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="w-full h-60 md:h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourcesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={40} // For donut chart
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {sourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {sourcesData.map((source) => (
                <div key={source.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span style={{ backgroundColor: source.color }} className="w-3 h-3 rounded-sm mr-2.5"></span>
                    <span className='text-foreground'>{source.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className='text-foreground w-16 text-right'>$ {source.value.toLocaleString()}</span>
                    {source.name === 'Dribbble' ? (
                         <Tooltip>
                            <TooltipTrigger asChild>
                                <span className='text-muted-foreground w-10 text-right cursor-default'>{source.percentage}%</span>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                                <p>from leads total</p>
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <span className='text-muted-foreground w-10 text-right'>{source.percentage}%</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-border">
            <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted p-1 rounded-md">
                <TabsTrigger value="Leads came" className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Leads came</TabsTrigger>
                <TabsTrigger value="Leads Converted" className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Leads Converted</TabsTrigger>
                <TabsTrigger value="Total deals size" className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default SourcesChart;
