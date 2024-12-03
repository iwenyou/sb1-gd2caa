import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      <Icon className="w-8 h-8 text-indigo-600 mb-3" />
      <h2 className="text-2xl font-bold text-gray-900 text-center">{title}</h2>
    </div>
  );
}