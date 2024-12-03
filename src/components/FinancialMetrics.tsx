import React, { useState } from 'react';
import { DollarSign, TrendingUp, Building2, ArrowRight, Target, ChevronRight } from 'lucide-react';
import { ProgressBar } from './ui/ProgressBar';

export default function FinancialMetrics() {
  const profitMargins = [
    {
      category: '材料费',
      margin: 40,
      description: '通过国内供应链合作，全屋定制材料（包括室内、室外门）',
      icon: <Building2 className="w-5 h-5" />
    },
    {
      category: '设计费',
      margin: 50,
      description: '与国内设计工作室合作，设计费扣除成本后',
      icon: <Target className="w-5 h-5" />
    },
    {
      category: '项目费',
      margin: 40,
      description: '全包服务（高端项目30-40%）',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const futureExpansion = [
    {
      title: "市场竞争策略",
      content: "展厅开放后，预计两到三年内出现同类竞争者，将凭借先发优势和产品迭代保持领先"
    },
    {
      title: "业务扩展计划",
      content: "计划进军新建领域，从家装工作室扩展至当地建筑商"
    },
    {
      title: "供应链优化",
      content: "持续优化供应链，提升服务效率和质量，保持成本优势"
    }
  ];

  return (
    <section className="mt-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">财务概览</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <DollarSign className="w-6 h-6 text-white mb-2" />
            <div className="text-white/90 text-sm">当前年营收</div>
            <div className="text-white text-2xl font-bold">60万美金</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Target className="w-6 h-6 text-white mb-2" />
            <div className="text-white/90 text-sm">展厅后首年目标</div>
            <div className="text-white text-2xl font-bold">90-150万美金</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <TrendingUp className="w-6 h-6 text-white mb-2" />
            <div className="text-white/90 text-sm">年均增长目标</div>
            <div className="text-white text-2xl font-bold">30-40%</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">利润率分析</h3>
          <div className="space-y-6">
            {profitMargins.map((item, index) => (
              <div key={index} className="relative group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <div className="text-indigo-600">{item.icon}</div>
                    </div>
                    <span className="font-medium text-gray-900">{item.category}</span>
                  </div>
                  <span className="text-lg font-semibold text-indigo-600">{item.margin}%</span>
                </div>
                <div className="mt-2">
                  <ProgressBar value={item.margin} />
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">未来扩展方向</h3>
          <div className="space-y-6">
            {futureExpansion.map((item, index) => (
              <div key={index} className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <ChevronRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform duration-200" />
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 ml-8">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}