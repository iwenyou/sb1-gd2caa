import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Building2, Target, Briefcase, DollarSign } from 'lucide-react';
import { SectionDivider } from './components/ui/SectionDivider';
import { MetricCard } from './components/ui/MetricCard';
import CompanyOverview from './components/CompanyOverview';
import MarketPainPoints from './components/MarketPainPoints';
import MarketAnalysis from './components/MarketAnalysis';
import SolutionSection from './components/SolutionSection';
import BusinessModel from './components/BusinessModel';
import ProductAdvantages from './components/ProductAdvantages';
import RevenueProjection from './components/RevenueProjection';
import TeamSection from './components/TeamSection';
import InvestmentHighlights from './components/InvestmentHighlights';
import InvestmentStructure from './components/InvestmentStructure';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import FinancialMetrics from './components/FinancialMetrics';
import Navigation from './components/Navigation';
import FundingProgress from './components/FundingProgress';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">超好住 Living Well Studio</h1>
          <p className="mt-4 text-xl text-gray-600">湾区最具性价比的家装工作室</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <MetricCard
            icon={<Building2 />}
            title="市场规模"
            value="30-40亿美金"
            description="年度建筑许可"
          />
          <MetricCard
            icon={<Target />}
            title="目标市场份额"
            value="5-10%"
            description="中高端市场"
          />
          <MetricCard
            icon={<TrendingUp />}
            title="年增长率"
            value="30-40%"
            description="展厅投用后"
          />
          <MetricCard
            icon={<DollarSign />}
            title="最终市场份额"
            value="2000-4000万"
            description="美金"
          />
        </div>
        <FundingProgress />


        <div className="space-y-24">
          <div id="company-overview">
            <SectionDivider title="公司概览" icon={Building2} />
            <CompanyOverview />
          </div>
          
          <div id="market-analysis">
            <SectionDivider title="市场分析" icon={BarChart3} />
            <MarketAnalysis />
          </div>
          
          <div id="market-pain-points">
            <SectionDivider title="市场痛点" icon={PieChart} />
            <MarketPainPoints />
          </div>
          
          <div id="solutions">
            <SectionDivider title="解决方案" icon={Target} />
            <SolutionSection />
          </div>
          
          <div id="product-advantages">
            <SectionDivider title="产品优势" icon={Briefcase} />
            <ProductAdvantages />
          </div>
          
          <div id="revenue-projection">
            <SectionDivider title="收入预测" icon={TrendingUp} />
            <RevenueProjection />
          </div>
          
          <div id="team">
            <SectionDivider title="核心团队" icon={Users} />
            <TeamSection />
          </div>
          
          <div id="competitive-analysis">
            <SectionDivider title="竞争分析" icon={Target} />
            <CompetitiveAnalysis />
          </div>
          
          <div id="financial-metrics">
            <SectionDivider title="财务指标" icon={DollarSign} />
            <FinancialMetrics />
          </div>
          
          <div id="investment-highlights">
            <SectionDivider title="投资亮点" icon={TrendingUp} />
            <InvestmentHighlights />
          </div>
          
          <div id="investment-structure">
            <SectionDivider title="融资结构" icon={DollarSign} />
            <InvestmentStructure />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;