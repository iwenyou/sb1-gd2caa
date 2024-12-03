import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Animate } from 'recharts';

const data = [
  { year: '2027', revenue: 4000, marketShare: 2.0 },
  { year: '2029', revenue: 8000, marketShare: 4.0 },
  { year: '2031', revenue: 16000, marketShare: 6.0 },
  { year: '2033', revenue: 28000, marketShare: 8.0 },
  { year: '2035', revenue: 40000, marketShare: 10.0 }
];

export default function MarketGrowthChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            stroke="#8884d8"
            label={{ value: '年收入 (万美元)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#82ca9d"
            label={{ value: '市场份额 (%)', angle: 90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            name="年收入 (万美元)"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            animationDuration={2000}
            animationBegin={0}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="marketShare"
            name="市场份额 (%)"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            animationDuration={2000}
            animationBegin={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}