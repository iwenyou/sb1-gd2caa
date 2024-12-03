import React from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  description?: string;
  percentage?: string;
}

export function ProgressBar({ value, label, description, percentage }: ProgressBarProps) {
  return (
    <div className="relative pt-1">
      {(label || percentage) && (
        <div className="flex items-center justify-between">
          {label && (
            <div>
              <span className="text-sm font-semibold text-gray-700">{label}</span>
              {description && (
                <span className="ml-2 text-sm font-medium text-gray-500">{description}</span>
              )}
            </div>
          )}
          {percentage && (
            <span className="text-sm font-medium text-indigo-600">{percentage}</span>
          )}
        </div>
      )}
      <div className="mt-2 overflow-hidden h-3 bg-gray-100 rounded-full shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}