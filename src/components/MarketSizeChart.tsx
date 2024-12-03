import React from 'react';
import { BarChart3 } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import MarketGrowthChart from './charts/MarketGrowthChart';

export default function MarketSizeChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <SectionHeader title="市场规模分析" icon={BarChart3} />
      
      <MarketGrowthChart />

      <div className="mt-6 text-sm text-gray-600">
        <p>基于湾区每年25000-30000份建筑许可的市场规模预估，展示预期增长轨迹</p>
      </div>
    </div>
  );
}