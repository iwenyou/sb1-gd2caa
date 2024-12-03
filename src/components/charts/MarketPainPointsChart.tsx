import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: '市场分散', value: 35, color: '#FF6B6B' },
  { name: '材料质量参差不齐', value: 25, color: '#4ECDC4' },
  { name: '施工市场不规范', value: 25, color: '#45B7D1' },
  { name: '设计普及度低', value: 15, color: '#96CEB4' }
];

export default function MarketPainPointsChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}