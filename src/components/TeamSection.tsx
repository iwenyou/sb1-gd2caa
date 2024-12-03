import React from 'react';
import { Users, Star, Award, Briefcase } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

export default function TeamSection() {
  const team = [
    {
      name: 'Wen Zhang',
      role: '创始人，高级软件工程师',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      description: '拥有10年以上软件工程经验，对家装怀有深厚的热情。五年前自学家装设计和施工管理，积累了丰富的实践经验。',
      achievements: [
        '首年完成超过6个家装项目',
        '客户满意度极高',
        '全面负责设计、材料采购及施工管理'
      ]
    },
    {
      name: 'Tiger Wang',
      role: '资深承包商',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: '从业13年，拥有B级建商执照，超好住投资人。以高效率和高完成度著称。',
      achievements: [
        '同时高效管理7-8个项目',
        '验收一次性通过率100%',
        '项目全部通过客户口碑推荐'
      ]
    },
    {
      name: 'Erik Zang',
      role: '资深建筑师',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      description: '拥有6年以上建筑从业经验，超好住投资人，师从湾区知名建筑师Martin Kobus。',
      achievements: [
        '完成百余个项目',
        '深谙各城市建筑规范',
        '全程跟进从设计到竣工的项目'
      ]
    },
    {
      name: 'Zhi Zhao',
      role: '国内合作设计工作室负责人',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      description: '业务能力出众且认真负责，拥有超过十年的行业经验。',
      achievements: [
        '年完成20-30个高品质家装项目',
        '全面负责室内设计和全屋定制生产',
        '确保产品高质量输出'
      ]
    },
    {
      name: 'Leo Wang',
      role: '国内运输商',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
      description: '资深运输商，专注于货物运输和清关业务，服务网络覆盖湾区、西雅图和纽约等主要城市。',
      achievements: [
        '成功护送1000+集装箱安全抵达美国',
        '丰富的跨境物流经验',
        '高效的物流操作流程'
      ]
    },
    {
      name: 'Sara Wang',
      role: '美国合作仓储供应商',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      description: '业务能力强且认真负责，在湾区多个城市拥有大型仓库，是加州Temu的主要仓储供应商。',
      achievements: [
        '出色的仓储设施和物流管理',
        '确保材料供应链稳定性',
        '提升材料交付速度和准确性'
      ]
    }
  ];

  return (
    <section className="mt-12">

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src={member.image}
              alt={member.name}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-indigo-600">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.description}</p>
              <div className="mt-4 space-y-2">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">团队优势</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900">专业资质</h4>
              <p className="mt-1 text-sm text-gray-600">团队成员均具备相关领域的专业资质和丰富经验</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Briefcase className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900">跨国协作</h4>
              <p className="mt-1 text-sm text-gray-600">完善的跨国供应链和设计团队协作体系</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900">高效执行</h4>
              <p className="mt-1 text-sm text-gray-600">优秀的项目管理能力和执行效率</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}