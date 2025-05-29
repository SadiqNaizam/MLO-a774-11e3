import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title?: string; // Title seems to be part of the parent card in the design
  stat: string | number;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  stat,
  description,
  icon,
  className,
  textAlign = 'left' as const,
}) => {
  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[textAlign];

  return (
    <div className={cn('flex flex-col', textAlignClass, className)}>
      {title && <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>}
      <p className="text-3xl font-bold text-foreground">{stat}</p>
      <div className="flex items-center mt-1" style={{ justifyContent: textAlign === 'center' ? 'center' : 'flex-start' }}>
        <p className="text-sm text-muted-foreground">{description}</p>
        {icon && <span className="ml-1">{icon}</span>}
      </div>
    </div>
  );
};

export default StatCard;
