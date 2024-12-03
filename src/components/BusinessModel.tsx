import React from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { ProgressBar } from './ui/ProgressBar';

export default function BusinessModel() {
  const revenueStreams = [
    {
      title: "材料费",
      margin: 35,
      description: "通过国内供应链的合作，全屋定制材料（包括室内、室外门）"
    },
    {
      title: "设计费",
      margin: 45,
      description: "与国内设计工作室合作，设计费扣除成本后"
    },
    {
      title: "项目费",
      margin: 17.5,
      description: "全包服务（高端项目30-40%）"
    }
  ];

  const futureExpansion = [
    "展厅开放后，预计两到三年内出现同类竞争者",
    "凭借先发优势和与国内的同步产品迭代保持领先",
    "计划进军新建领域，从家装工作室扩展至当地建筑商",
    "持续优化供应链，提升服务效率和质量"
  ];

  return (
    <section className="mt-12">      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">收入来源和利润率</h3>
          <div className="space-y-6">
            {revenueStreams.map((stream, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{stream.title}</span>
                  <span className="text-sm font-semibold text-indigo-600">{stream.margin}%</span>
                </div>
                <ProgressBar
                  value={parseInt(stream.margin)}
                  description={stream.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">未来扩展方向</h3>
          </div>
          <div className="space-y-3">
            {futureExpansion.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1.5">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}