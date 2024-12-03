import React from 'react';
import { DollarSign, Target } from 'lucide-react';

export default function FundingProgress() {
  const goalAmount = 400000;
  const currentAmount = 200000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <DollarSign className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">融资进度</h3>
            <p className="text-sm text-gray-600">目标金额：40万美金</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-indigo-600">50%</div>
          <div className="text-sm text-gray-600">已完成</div>
        </div>
      </div>
      
      <div className="relative">
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-1000 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>已募集: {(currentAmount / 10000).toFixed(0)}万美金</span>
          <span>目标: {(goalAmount / 10000).toFixed(0)}万美金</span>
        </div>
      </div>
    </div>
  );
}