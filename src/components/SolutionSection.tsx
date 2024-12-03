import React from 'react';
import { Lightbulb, Truck, Users, Target, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  metrics: {
    value: string;
    label: string;
  };
}

function SolutionCard({ icon, title, description, benefits, metrics }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl">
              <div className="text-indigo-600 w-6 h-6">{icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">{metrics.value}</div>
            <div className="text-sm text-gray-500">{metrics.label}</div>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-b-2xl">
        <ul className="space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "高性价比的一站式服务",
      description: "覆盖从设计、材料采购到施工的所有环节，确保过程流畅，实现成本节约和效果提升。",
      benefits: [
        "全流程服务降低50%沟通成本",
        "透明定价无隐藏费用",
        "一站式解决所有装修需求",
        "专业团队全程质量把控"
      ],
      metrics: {
        value: "50%",
        label: "成本节约"
      }
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "跨境供应链合作",
      description: "与国内多家优质工厂及运输公司合作，将更优质的建筑材料引入美国，满足客户对美观、耐用的高标准要求。",
      benefits: [
        "直接对接优质工厂降低成本",
        "严格质量控制确保品质",
        "高效物流保证交付时间",
        "完善的售后服务体系"
      ],
      metrics: {
        value: "40%",
        label: "材料成本优化"
      }
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "高效的专业团队",
      description: "由合作多年的资深建筑师和执照承包商（GC）组成的团队，以优于同行的速度和质量完成项目。",
      benefits: [
        "持证专业人员保障",
        "丰富项目经验积累",
        "高效协作缩短工期",
        "严格施工质量管理"
      ],
      metrics: {
        value: "30%",
        label: "工期缩短"
      }
    }
  ];

  return (
    <section className="mt-12">
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900">我们的承诺</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            我们通过在美同业价格的一半，为客户提供包括设计、材料、施工在内的一站式解决方案，在性价比和设计美感上全面领先。
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <div className="flex items-center space-x-3 mb-4">
            <ArrowRight className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900">解决方案优势</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            通过整合一站式服务、跨境供应链和专业团队三大核心优势，我们为客户提供了一个全面、高效且具有成本优势的家装解决方案。
            这不仅简化了客户的装修流程，还确保了更高的性价比和更好的装修效果。
          </p>
        </div>
      </div>
    </section>
  );
}