import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { ChevronDown, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: ChartDataPoint[] = [
  { month: 'March', closedWon: 68, closedLost: 85 },
  { month: 'April', closedWon: 42, closedLost: 38 },
  { month: 'May', closedWon: 75, closedLost: 52 },
  { month: 'June', closedWon: 62, closedLost: 10 },
  { month: 'July', closedWon: 88, closedLost: 40 },
  { month: 'August', closedWon: 30, closedLost: 95 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 border border-border rounded shadow-lg">
        <p className="text-sm font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-xs">
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface LeadsTrackingChartProps {
  className?: string;
}

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
          <div className="mt-1">
            <span className="text-3xl font-bold text-foreground">680</span>
            <span className="ml-1 text-sm text-muted-foreground">total closed</span>
            <span className="text-3xl font-bold text-foreground ml-4">70</span>
            <span className="ml-1 text-sm text-muted-foreground">total lost</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="text-muted-foreground text-xs">
          <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
          Last 6 months
          <ChevronDown className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomChartTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                align="left" 
                height={40}
                iconSize={10}
                iconType='square'
                formatter={(value) => <span className="text-sm text-muted-foreground capitalize">{value.replace(/([A-Z])/g, ' $1').trim()}</span>}
              />
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="closedWon" stroke="#14B8A6" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, fill: '#14B8A6', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, fill: '#EF4444', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
