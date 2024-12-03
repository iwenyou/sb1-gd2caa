import React from 'react';
import { Lightbulb, Truck, Users, Globe, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

export default function ProductAdvantages() {
  const advantages = [
  {
    icon: <Lightbulb />,
    title: "一站式服务与透明定价",
    description: "从设计、材料采购到施工的全流程一站式服务，极大简化客户家装流程",
    highlight: "40%",
    highlightText: "沟通成本降低",
    benefits: [
      "减少客户沟通与协调成本",
      "透明定价模式，无第三方回扣",
      "建立客户信任，提升体验",
      "全流程质量把控"
    ]
  },
  {
    icon: <Truck />,
    title: "高性价比的供应链优势",
    description: "与国内优质工厂直接合作，从源头采购高质量材料，大幅降低成本",
    highlight: "50%",
    highlightText: "材料成本优化",
    benefits: [
      "材料成本降低40-50%",
      "确保材料品质稳定性",
      "快速响应市场需求变化",
      "完善的售后保障体系"
    ]
  },
  {
    icon: <Users />,
    title: "本地团队与创新设计理念",
    description: "拥有本地资深建筑师和持牌承包商团队，专注现代化创新设计",
    highlight: "100%",
    highlightText: "持证专业团队",
    benefits: [
      "满足年轻工程师审美需求",
      "提供全屋一致性设计风格",
      "专业团队保障施工质量",
      "持续创新设计理念"
    ]
  },
  {
    icon: <Globe />,
    title: "国际视野与本地适应",
    description: "将国内先进设计风格与本地需求相结合，打造现代感和个性化家装设计",
    highlight: "2×",
    highlightText: "设计创新速度",
    benefits: [
      "融合国际设计趋势",
      "适应本地生活习惯",
      "个性化定制方案",
      "持续更新设计理念"
    ]
  },
  {
    icon: <DollarSign />,
    title: "低运营成本与市场适应力",
    description: "精简高效的供应链管理和本地资源配置，降低运营成本",
    highlight: "30%",
    highlightText: "运营成本优化",
    benefits: [
      "降低仓储和人工成本",
      "缩短项目周期",
      "灵活应对市场变化",
      "优化资源配置效率"
    ]
  }
];

  return (
    <section className="mt-12">
      
      <div className="grid gap-6 lg:grid-cols-2">
        {advantages.map((advantage, index) => (
          <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl group-hover:from-indigo-200 group-hover:to-indigo-100 transition-colors duration-300">
                    <div className="text-indigo-600 w-6 h-6">{advantage.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">{advantage.highlight}</div>
                  <div className="text-sm text-gray-500">{advantage.highlightText}</div>
                </div>
              </div>
              <p className="text-gray-600">{advantage.description}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-b-2xl">
              <ul className="space-y-3">
                {advantage.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group/item">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5 opacity-75 group-hover/item:opacity-100" />
                    <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-4">
          <ArrowRight className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">差异化优势总结</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          超好住（Living Well Studio）通过一站式服务、高透明度、供应链和成本优势，满足了对价格敏感的中端客户和追求高质量的高端客户的双重需求。
          这一策略不仅提升了客户体验，还帮助我们在湾区激烈的家装市场中建立了独特的竞争壁垒，确保了长期的市场竞争力和持续增长潜力。
        </p>
      </div>
    </section>
  );
}