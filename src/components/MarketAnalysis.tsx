import React from 'react';
import { BarChart3, Target, TrendingUp, Users } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import MarketGrowthChart from './charts/MarketGrowthChart';

export default function MarketAnalysis() {
  const marketStats = [
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      title: "年度建筑许可",
      value: "25,000-30,000",
      description: "湾区每年发放的建筑许可数量"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "市场规模",
      value: "30-40亿美金",
      description: "不含简单装修的市场总规模"
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: "目标市场",
      value: "20%",
      description: "中高收入家庭市场份额"
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-600" />,
      title: "预期份额",
      value: "5-10%",
      description: "展厅建成后的目标市场份额"
    }
  ];

  return (
    <section className="mt-12">
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {marketStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                {stat.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            </div>
            <p className="mt-2 text-3xl font-semibold text-indigo-600">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">长期市场增长预测</h3>
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <MarketGrowthChart />
          <p className="mt-4 text-sm text-gray-600">
            基于湾区家装市场需求持续旺盛，特别是年轻工程师和硅谷新贵对高品质居住空间需求不断增长的预测
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">市场驱动因素</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-gray-600">湾区土地稀缺，房屋需求持续上升，家装翻新需求强劲</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-gray-600">年轻工程师和硅谷新贵逐渐步入家庭生活阶段</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-gray-600">对高品质居住空间的需求不断增长</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-gray-600">无论经济环境如何，家装始终是许多家庭的刚性需求</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}