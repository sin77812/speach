'use client';

import { motion } from 'framer-motion';
import { User, Users, Building2, ChevronRight, Clock, Target, Award } from 'lucide-react';
import Link from 'next/link';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: User,
      title: '1:1 맞춤 코칭',
      subtitle: '3주 만에 발표 공포 → 자신감 있는 리더로',
      description: '40대 임원, 3주 만에 프레젠테이션 공포 극복',
      features: ['개별 맞춤 커리큘럼', '실시간 피드백', '영상 분석', '발음/발성 교정'],
      price: '월 80만원부터',
      successRate: '성공률 94%',
      popular: false,
      badge: '⚡ 빠른 변화',
    },
    {
      icon: Building2,
      title: '기업 소통 혁신',
      subtitle: '팀 커뮤니케이션 질 40% 향상 보장',
      description: '기업 50+ 곳이 선택한 검증된 교육 솔루션',
      features: ['팀별 맞춤 교육', '리더십 스피치', '프레젠테이션 스킬', '성과 측정 리포트'],
      price: '협의 가능',
      successRate: '50+ 기업 선택',
      popular: true,
      badge: '🏆 1위 선택',
    },
    {
      icon: Users,
      title: '조직 전체 교육',
      subtitle: '대규모 조직의 소통 문화 완전 변화',
      description: '스타트업 대표 → 투자유치 발표 성공률 300% 증가',
      features: ['그룹 인터랙션', '실전 시뮬레이션', '동기부여 프로그램', '지속적 관리'],
      price: '인원별 상담',
      successRate: 'ROI 300%',
      popular: false,
      badge: '💼 대규모',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#06342e] text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Target className="w-4 h-4" />
            <span>전문 서비스</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#06342e] mb-6">
            2025년을 선도할 <span className="text-[#aa7f61]">소통 혁신</span>의 모든 것!
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-[#aa7f61]">개인 변화부터 조직 성과까지</span> <br />
            검증된 교육 솔루션으로 당신의 팀을 소통 전문가로 만들어드립니다
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-[#aa7f61] ring-offset-4' : ''
                }`}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-4">
                  <div className="bg-gradient-to-r from-[#aa7f61] to-[#d4b896] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {service.badge}
                  </div>
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                      <Award className="w-3 h-3" />
                      <span>BEST</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#06342e] mb-2 group-hover:text-[#aa7f61] transition-colors">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-[#aa7f61] mb-3 leading-tight">
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                    ✨ {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#aa7f61] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success Rate & Price */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{service.successRate}</div>
                      <div className="text-sm text-gray-600">검증된 성과</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">투자 금액</span>
                      <div className="text-lg font-bold text-[#06342e]">{service.price}</div>
                    </div>
                    <div className="flex items-center text-sm text-[#aa7f61] font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>즉시 상담</span>
                    </div>
                  </div>
                  
                  <Link
                    href="#contact"
                    className="w-full bg-gradient-to-r from-[#06342e] to-[#aa7f61] hover:from-[#aa7f61] hover:to-[#06342e] text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>🚀 3분 만에 상담 신청</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06342e]/5 to-[#aa7f61]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#06342e] mb-4">
              🤔 어떤 솔루션이 우리 팀에 적합할까요?
            </h3>
            <p className="text-gray-600 mb-6">
              <span className="font-bold text-[#aa7f61]">15년 경력 전문가</span>가 귀하의 목표와 상황에 맞는 <br />
              <span className="font-semibold">최적의 솔루션을 무료로 진단</span>해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-[#aa7f61] to-[#d4b896] hover:from-[#06342e] hover:to-[#aa7f61] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>🎯 무료 진단 받기</span>
              </Link>
              <Link
                href="tel:02-1234-5678"
                className="flex items-center justify-center space-x-2 text-[#06342e] border-2 border-[#06342e] hover:bg-[#06342e] hover:text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <span>📞 긴급 상담</span>
                <span className="text-sm">02-1234-5678</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;