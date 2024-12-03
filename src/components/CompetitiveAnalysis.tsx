import React from 'react';
import { Target, Users, DollarSign, Briefcase, Building2, CheckCircle2, XCircle, ArrowUpRight } from 'lucide-react';
import { ProgressBar } from './ui/ProgressBar';

export default function CompetitiveAnalysis() {
  const designerAnalysis = [
    {
      category: '独立设计师',
      description: '华人独立设计师多通过小红书等平台宣传，通常只提供设计服务，材料部分通过收取第三方回扣盈利，收费适中。美国本地独立设计师则多通过本地网络宣传，收费偏高。',
      limitations: [
        '服务较为单一，客户需自行协调设计与材料环节',
        '增加了沟通成本和管理难度',
        '材料采购依赖第三方回扣，价格不透明'
      ],
      ourAdvantages: [
        '一站式服务涵盖设计、材料采购和施工管理',
        '保证高效交付，避免第三方回扣',
        '提升客户体验和信任感'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: '设计工作室',
      description: '多数本地设计工作室由美国本地人创立，设计理念较为传统，材料多从欧洲进口，整体成本较高。价格更高但设计创新性和灵活性有限。',
      limitations: [
        '设计风格传统，难以满足年轻客户需求',
        '材料主要从欧洲进口，成本高昂',
        '设计创新性和灵活性有限'
      ],
      ourAdvantages: [
        '结合国际视野和本地需求的现代设计',
        '直接与国内供应商合作，降低成本',
        '满足年轻工程师和硅谷群体的审美需求'
      ],
      color: 'from-purple-500 to-pink-600'
    },
  ];

  const cabinetAnalysis = [
    {
      category: '低端橱柜店',
      description: '使用低质量材料，款式陈旧，无法提供定制服务，主要依赖走量盈利，服务局限于较低端市场。',
      limitations: [
        '材料质量不高，设计过时',
        '无法满足中高端客户需求',
        '缺乏定制化服务能力'
      ],
      ourAdvantages: [
        '提供高品质材料和现代设计风格',
        '可根据客户需求进行定制',
        '满足中高端客户的品质要求'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      category: '高端橱柜店',
      description: '款式相对新颖，但价格虚高，常利用信息差误导客户。材料主要从欧洲进口，导致成本高昂，价格远超普通客户预算。',
      limitations: [
        '价格过高，超出大多数客户预算',
        '供应链和设计更新速度慢',
        '难以快速适应市场需求变化'
      ],
      ourAdvantages: [
        '优化供应链，降低成本',
        '保持同等品质的同时提供更好价格',
        '快速迭代满足市场需求'
      ],
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const competitiveAdvantages = [
    { icon: <Building2 />, title: '一站式服务', value: '设计、材料、施工全流程' },
    { icon: <DollarSign />, title: '成本优势', value: '较同行降低40-50%' },
    { icon: <Users />, title: '目标客户', value: '年轻工程师和硅谷高收入群体' },
    { icon: <Briefcase />, title: '服务范围', value: '全屋定制到加建新建' }
  ];

  return (
    <section className="mt-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <Target className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold text-white">竞争分析</h2>
        </div>
        <p className="text-lg text-white/90">
          通过分析市场上主要竞争对手的优劣势，我们建立了独特的竞争优势，为客户提供更优质的服务体验。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 mb-8">
        {competitiveAdvantages.map((advantage, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                {advantage.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-500">{advantage.title}</h3>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-900">{advantage.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">设计服务商分析</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {designerAnalysis.map((competitor, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`p-6 bg-gradient-to-br ${competitor.color} rounded-t-xl`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{competitor.category}</h3>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{competitor.description}</p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <h4 className="font-medium text-gray-900">局限性</h4>
                      </div>
                      <ul className="space-y-2">
                        {competitor.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <h4 className="font-medium text-gray-900">我们的优势</h4>
                      </div>
                      <ul className="space-y-2">
                        {competitor.ourAdvantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-gray-600">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">橱柜店分析</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {cabinetAnalysis.map((competitor, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`p-6 bg-gradient-to-br ${competitor.color} rounded-t-xl`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{competitor.category}</h3>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{competitor.description}</p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <h4 className="font-medium text-gray-900">局限性</h4>
                      </div>
                      <ul className="space-y-2">
                        {competitor.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <h4 className="font-medium text-gray-900">我们的优势</h4>
                      </div>
                      <ul className="space-y-2">
                        {competitor.ourAdvantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-gray-600">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       </div>
    </section>
  );
}