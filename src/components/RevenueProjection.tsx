import React from 'react';
import { TrendingUp, DollarSign, Target, ArrowUpRight, BarChart, Building2 } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const projectionData = [
  { year: '2024', revenue: 60, profit: 19 },
  { year: '2025', revenue: 150, profit: 50 },
  { year: '2026', revenue: 230, profit: 76 },
  { year: '2027', revenue: 345, profit: 138 },
  { year: '2028', revenue: 517, profit: 207 }
];

const currentMetrics = [
  {
    icon: <Building2 />,
    title: "当前营收",
    value: "60万美金",
    subtext: "净利润19万美金"
  },
  {
    icon: <Target />,
    title: "展厅后首年",
    value: "90-150万美金",
    subtext: "净利润30-50万美金"
  },
  {
    icon: <BarChart />,
    title: "年均增长",
    value: "30-40%",
    subtext: "展厅投用后"
  }
];

export default function RevenueProjection() {
  return (
    <section className="mt-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <TrendingUp className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold text-white">收入预测分析</h2>
        </div>
        <p className="text-lg text-white/90 mb-8">
          基于当前业务增长趋势和展厅投入后的市场扩张，预计未来5年将实现显著的收入增长
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {currentMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-white">{metric.icon}</div>
                <span className="text-white/80">{metric.title}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-white/70">{metric.subtext}</div>
            </div>
          ))}
      </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5年收入增长预测</h3>
          <div className="h-[400px]">
            <ResponsiveContainer>
              <LineChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  name="年收入 (万美金)"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  name="净利润 (万美金)"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">增长驱动因素</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-600">展厅投入带来的品牌效应和客户信任度提升</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-600">高端市场份额的逐步扩大</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-600">供应链优化带来的成本优势</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">利润保障</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">材料和设计环节30-50%的稳定利润率</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">高端项目服务30-40%的高利润率</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">规模效应带来的运营成本优化</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}