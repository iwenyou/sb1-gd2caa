import React from 'react';
import { DollarSign, TrendingUp, Target, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const roiProjections = [
  { year: '2024', revenue: 150, profit: 37.5, equity10: 3.75, equity26: 9.98 },
  { year: '2025', revenue: 225, profit: 56.25, equity10: 5.62, equity26: 15 },
  { year: '2026', revenue: 337.5, profit: 84.37, equity10: 8.43, equity26: 22.5 },
  { year: '2027', revenue: 506.25, profit: 126.56, equity10: 12.65, equity26: 33.75 },
  { year: '2028', revenue: 759.37, profit: 189.84, equity10: 18.98, equity26: 50.62 }
];

const exitStrategies = [
  {
    title: '战略收购',
    description: '作为湾区高性价比家装市场的先行者，公司具备被大型家装或房地产企业收购的潜力',
    icon: <Target className="w-5 h-5" />
  },
  {
    title: '公开上市',
    description: '达到预期市场份额后计划IPO，投资人可在公开市场获取回报',
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    title: '股权回购',
    description: '根据盈利情况，以溢价回购早期投资人股权，提供灵活退出方式',
    icon: <ArrowUpRight className="w-5 h-5" />
  }
];

export default function InvestmentStructure() {
  return (
    <section className="mt-12">
      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">投资结构</h3>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">融资目标</span>
                <span className="text-sm font-semibold text-indigo-600">30-40万美元</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">公司估值</span>
                <span className="text-sm font-semibold text-indigo-600">150-300万美元</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">股权范围</span>
                <span className="text-sm font-semibold text-indigo-600">10-26.67%</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-900 mb-3">预期回报 (ROI)</h4>
              <div className="h-[300px]">
                <ResponsiveContainer>
                  <LineChart data={roiProjections}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="equity10"
                      name="10%股权收益(万美元)"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="equity26"
                      name="26.67%股权收益(万美元)"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">退出方案</h3>
          <div className="space-y-6">
            {exitStrategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {strategy.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{strategy.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">投资回报预期</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">3-5年内获得2-3倍投资回报</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">10%股权：30-40万美元总利润回报</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">26.67%股权：80-100万美元总利润回报</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}