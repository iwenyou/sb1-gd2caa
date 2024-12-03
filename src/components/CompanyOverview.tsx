import React from 'react';
import { Building2, Target, Briefcase, Flag, Star, ArrowUpRight, Globe, Shield } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

export default function CompanyOverview() {
  const highlights = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "公司名称",
      content: "超好住（Living Well Studio）",
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "定位",
      content: "湾区最具性价比的家装工作室",
      bgColor: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "核心理念",
      content: "帮助客户以最具性价比的价格实现理想家装，让普通人也能在合理预算内享受优秀设计。",
      bgColor: "from-amber-50 to-yellow-50",
      iconColor: "text-amber-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "业务领域",
      content: "全屋材料定制、房屋设计、加建及新建房屋",
      bgColor: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    }
  ];

  const visionPoints = [
    "专注于高品质家装设计与施工",
    "打造最具性价比的一站式服务",
    "引领湾区家装市场创新发展",
    "建立长期可持续的品牌价值"
  ];

  return (
    <section className="mt-12">
      <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold text-white">公司愿景</h3>
          </div>
          <p className="text-xl text-white/90 font-medium">
            成为湾区首选的、性价比最高的家装工作室
          </p>
        </div>
        <div className="p-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="grid gap-6 md:grid-cols-2">
            {visionPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <div className="mt-1 p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-200">
                  <Star className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className={`p-6 bg-gradient-to-br ${item.bgColor} rounded-t-xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-white/50 backdrop-blur-sm rounded-lg ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <ArrowUpRight className={`w-5 h-5 ${item.iconColor}`} />
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}