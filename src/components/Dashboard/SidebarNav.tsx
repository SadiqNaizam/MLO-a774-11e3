import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserCircle2,
  FileText,
  Receipt,
  ShoppingCart,
  Mail as MailIcon,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu,
  Briefcase
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md',
        'transition-colors duration-150 ease-in-out',
        isActive
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activeItem, setActiveItem] = React.useState<string>('Dashboard');

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    // Add navigation logic here if using React Router, e.g., navigate(href)
  };

  const mainNavItems = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard' },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: UserCircle2, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: ShoppingCart, label: 'Items' },
    { href: '#', icon: MailIcon, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: CalendarDays, label: 'Calendar' },
  ];

  const bottomNavItems = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={cn('w-60 bg-sidebar text-sidebar-foreground fixed top-0 left-0 h-screen flex flex-col p-4 space-y-2', className)}>
      <div className="flex items-center justify-between h-16 px-2 mb-4">
        {/* Placeholder for Logo, matching the image's 'bo' style */}
        <div className="flex items-center">
          <Briefcase className="w-8 h-8 text-primary" /> 
          <span className="ml-2 text-2xl font-bold text-primary-text">bo</span>
        </div>
        <button className="p-1 rounded-md lg:hidden hover:bg-sidebar-accent">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="flex-grow space-y-1.5">
        {mainNavItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => handleNavClick(item.label)}
          />
        ))}
      </nav>

      <div className="mt-auto space-y-1.5 border-t border-sidebar-border pt-4">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => handleNavClick(item.label)}
          />
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
