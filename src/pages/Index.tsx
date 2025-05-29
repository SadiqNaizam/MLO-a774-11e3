import React, { useState } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelCount from '../components/Dashboard/FunnelCount';
import SourcesChart from '../components/Dashboard/SourcesChart';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import StatisticsGrid from '../components/Dashboard/StatisticsGrid';

/**
 * IndexPage serves as the main dashboard view, specifically the "Leads Overview".
 * It orchestrates various dashboard components within the MainAppLayout.
 * - PageHeader: Displays navigation tabs like 'Sales' and 'Leads'.
 * - FunnelCount: Shows a visual funnel of lead progression.
 * - SourcesChart: Displays a pie chart of lead sources.
 * - LeadsTrackingChart: Shows a line chart for leads won/lost over time.
 * - StatisticsGrid: Presents key statistics in a grid format.
 */
const IndexPage: React.FC = () => {
  // State for managing the active tab in the PageHeader component.
  // Defaults to 'Leads' as this is the Leads Overview page.
  const [activeMainTab, setActiveMainTab] = useState<'Sales' | 'Leads'>('Leads' as const);

  /**
   * Handles tab changes from the PageHeader component.
   * @param tab The newly selected tab ('Sales' or 'Leads').
   */
  const handleMainTabChange = (tab: 'Sales' | 'Leads') => {
    setActiveMainTab(tab);
    // In a real application, this might trigger data refetching or component changes
    // based on the selected tab. For this example, it primarily updates the UI state.
  };

  return (
    <MainAppLayout>
      {/* 
        The main content container. As per layout requirements (mainContent.container),
        it uses a grid layout with a defined gap for its direct children.
        'auto-rows-min' ensures that grid rows only take up as much height as their content needs.
      */}
      <div className="grid auto-rows-min gap-6">
        {/* PageHeader for displaying 'Sales'/'Leads' tabs */}
        <PageHeader activeTab={activeMainTab} onTabChange={handleMainTabChange} />

        {/* 
          Row for FunnelCount and SourcesChart.
          On large screens (lg and up), these components are displayed side-by-side 
          in a 5-column grid layout (FunnelCount spans 2, SourcesChart spans 3).
          On smaller screens, they stack vertically.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <FunnelCount className="lg:col-span-2" />
          <SourcesChart className="lg:col-span-3" />
        </div>

        {/* LeadsTrackingChart, takes full width of the parent grid column */}
        <LeadsTrackingChart />

        {/* StatisticsGrid, takes full width of the parent grid column */}
        <StatisticsGrid />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
