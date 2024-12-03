import React from 'react';
import { AlertTriangle, TrendingUp, AlertCircle, CheckCircle2, ArrowUpRight, Building2, Wrench, Palette } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import MarketPainPointsChart from './charts/MarketPainPointsChart';

export default function MarketPainPoints() {
  const painPoints = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "市场分散，缺乏整合",
      description: "设计、材料、施工各自为政，客户往往面临信息不透明、进度延误等问题。对大部分人来说，家装完成即已不易，更别提做到高质量。",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "材料市场质量参差不齐",
      description: "普通材料质量较低且工艺落后，与国内相比差距10-15年；优质材料价格则高出5-10倍，成本过于高昂。",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "施工市场不规范",
      description: "施工队水平参差不齐，不乏无执照工人低价接单后加价或中途停工现象，烂尾情况频发。",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "设计普及度低",
      description: "大多数客户缺乏设计概念，最终效果杂乱，难以实现舒适、宜居的空间布局。",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const opportunities = [
    {
      title: "中美家装行业差距",
      description: "国内设计和材料的质量远超美国同类产品且价格低廉。部分客户已意识到差距，但自助从国内采购常因流程复杂、售后缺失而困难重重。",
      benefits: [
        "直接对接国内优质供应商",
        "提供完善的售后服务",
        "简化跨境采购流程"
      ]
    },
    {
      title: "高端需求空白",
      description: "即便是美国高端市场也在设计和质量上远远落后于国内，而这类客户对高品质家装的需求日益增长。我们作为连接中美的桥梁，提供性价比高、售后有保障的解决方案。",
      benefits: [
        "引入国际化设计理念",
        "满足高端客户需求",
        "提供高性价比解决方案"
      ]
    }
  ];

  return (
    <section className="mt-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <AlertTriangle className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold text-white">市场痛点分析</h2>
        </div>
        <p className="text-lg text-white/90">
          湾区家装市场存在多个亟待解决的痛点，这些问题为我们提供了巨大的市场机会。
          通过创新的解决方案，我们能够有效地解决这些行业痛点，为客户创造更好的家装体验。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">市场痛点分布</h3>
          <MarketPainPointsChart />
        </div>

        <div className="grid gap-4">
          {painPoints.map((point, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`p-4 bg-gradient-to-br ${point.color} rounded-t-xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{opportunity.description}</p>
            <div className="space-y-3">
              {opportunity.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          <h3 className="text-xl font-semibold text-gray-900">市场机遇总结</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          通过解决这些市场痛点，我们不仅能为客户提供更好的服务体验，
          还能在这个快速增长的市场中占据领先地位。我们的一站式服务模式和跨境供应链优势，
          让我们能够有效地填补市场空白，满足不同层次客户的需求。
        </p>
      </div>
    </section>
  );
}