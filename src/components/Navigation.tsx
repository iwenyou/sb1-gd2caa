import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu } from 'lucide-react';

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'company-overview', title: '公司概览' },
    { id: 'market-analysis', title: '市场分析' },
    { id: 'market-pain-points', title: '市场痛点' },
    { id: 'solutions', title: '解决方案' },
    { id: 'product-advantages', title: '产品优势' },
    { id: 'business-model', title: '商业模式' },
    { id: 'revenue-projection', title: '收入预测' },
    { id: 'team', title: '核心团队' },
    { id: 'competitive-analysis', title: '竞争分析' },
    { id: 'financial-metrics', title: '财务指标' },
    { id: 'investment-highlights', title: '投资亮点' },
    { id: 'investment-structure', title: '融资结构' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isHovered && isExpanded) {
      timeout = setTimeout(() => {
        setIsExpanded(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [isHovered, isExpanded]);

  return (
    <nav 
      className={`fixed right-0 top-1/3 z-50 transition-all duration-300 ${
        isExpanded ? 'translate-x-0' : 'translate-x-[calc(100%-3rem)]'
      }`}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsExpanded(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-white/95 backdrop-blur-sm rounded-l-xl shadow-lg
        transition-all duration-300
        ${isExpanded ? 'w-64 p-4' : 'w-12 py-4'}
        flex flex-col gap-2
      `}>
        <div className="flex items-center mb-4">
          {isExpanded ? (
            <>
              <ChevronRight className="w-5 h-5 text-indigo-600 transition-transform duration-300 rotate-180" />
              <span className="ml-2 text-sm font-medium text-gray-900">导航菜单</span>
            </>
          ) : (
            <div className="w-full flex flex-col items-center">
              <Menu className="w-5 h-5 text-indigo-600 mb-1" />
              <span className="text-[10px] font-medium text-gray-600 writing-mode-vertical">导航</span>
            </div>
          )}
        </div>
        {sections.map((section) => (
          <div key={section.id} className="overflow-hidden">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`
                flex items-center text-sm w-full transition-all duration-200
                ${isExpanded ? 'px-3 py-1.5 hover:bg-indigo-50 rounded-lg' : 'justify-center'} 
                ${activeSection === section.id ? 'text-indigo-600 font-medium' : 'text-gray-600'}
                hover:text-indigo-600
              `}
            >
              {isExpanded && <span>{section.title}</span>}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}