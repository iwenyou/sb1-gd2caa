import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionDividerProps {
  title: string;
  icon: LucideIcon;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ title, icon: Icon }) => {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 flex items-center space-x-4">
          <Icon className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900">{title}</span>
        </div>
      </div>
    </div>
  );
};