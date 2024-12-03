import React from 'react';
import { TrendingUp, Target, DollarSign, Users, Lightbulb, Flag, BarChart3, Award, ArrowUpRight, Building2, Star } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { ProgressBar } from './ui/ProgressBar';

export default function InvestmentHighlights() {
  const highlights = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "广阔的市场前景",
      subtitle: "湾区家装市场规模30-40亿美金",
      points: [
        "湾区家装市场需求旺盛，年轻高收入群体对高品质家装需求持续增长",
        "市场规模达30-40亿美金，并保持稳定增长",
        "土地稀缺推动翻新和加建需求"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "强劲的增长潜力",
      subtitle: "年收入增长率30-50%",
      points: [
        "展厅运营后预计占领5-10%市场份额",
        "年收入目标达千万美金以上",
        "未来3-5年内年收入增长率30-50%"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "高利润率",
      subtitle: "高端项目利润率30-40%",
      points: [
        "材料利润率：30-40%",
        "设计利润率：40-50%",
        "项目服务利润率：15-20%（高端项目30-40%）"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "专业团队",
      subtitle: "跨国合作的专业团队",
      points: [
        "资深本地建筑师和持牌承包商团队",
        "与国内顶级设计工作室深度合作",
        "跨国供应链管理经验"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "差异化优势",
      subtitle: "一站式服务与透明定价",
      points: [
        "一站式服务与透明定价模式",
        "高性价比的国际供应链",
        "创新设计与本地适应相结合"
      ],
      color: "from-rose-500 to-red-600"
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "先发优势",
      subtitle: "率先进入高性价比市场",
      points: [
        "率先进入湾区高性价比家装市场",
        "展厅建设提升品牌形象",
        "持续产品迭代保持竞争优势"
      ],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="mt-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <Star className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold text-white">投资亮点总览</h2>
        </div>
        <p className="text-lg text-white/90 leading-relaxed">
          超好住（Living Well Studio）以广阔的市场前景、强劲的增长潜力、高利润率和经验丰富的团队为基础，
          凭借差异化优势和先发优势，在湾区家装市场中建立了强大的竞争壁垒。
        </p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className={`p-6 bg-gradient-to-br ${highlight.color} rounded-t-xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                    <p className="text-sm text-white/80">{highlight.subtitle}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {highlight.points.map((point, idx) => (
                  <li key={idx} className="flex items-start group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <span className={`mr-2 mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r ${highlight.color} opacity-70 group-hover/item:opacity-100`}></span>
                    <span className="text-sm text-gray-600 group-hover/item:text-gray-900">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}