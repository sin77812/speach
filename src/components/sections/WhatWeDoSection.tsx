'use client';

import { motion } from 'framer-motion';
import { User, Users, Building2, ChevronRight, Clock, Target, Award } from 'lucide-react';
import Link from 'next/link';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: User,
      title: '1:1 맞춤 코칭',
      description: '개인의 특성과 목표에 맞춘 전문적인 스피치 코칭으로 자신감과 표현력을 극대화합니다.',
      features: ['개별 맞춤 커리큘럼', '실시간 피드백', '영상 분석', '발음/발성 교정'],
      price: '월 80만원부터',
      popular: false,
    },
    {
      icon: Building2,
      title: '기업 교육',
      description: '조직의 커뮤니케이션 역량 강화를 통해 업무 효율성과 팀워크를 향상시킵니다.',
      features: ['팀별 맞춤 교육', '리더십 스피치', '프레젠테이션 스킬', '성과 측정 리포트'],
      price: '협의 가능',
      popular: true,
    },
    {
      icon: Users,
      title: '단체 강의',
      description: '학교, 단체, 기관을 위한 체계적인 스피치 교육 프로그램을 제공합니다.',
      features: ['그룹 인터랙션', '실전 시뮬레이션', '동기부여 프로그램', '지속적 관리'],
      price: '인원별 상담',
      popular: false,
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
            우리가 제공하는 <span className="text-[#aa7f61]">솔루션</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            개인부터 조직까지, 각자의 니즈에 맞춘 체계적이고 실전적인 스피치 교육을 통해 
            진정한 변화와 성장을 경험하세요.
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
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#aa7f61] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>인기</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#06342e] mb-3 group-hover:text-[#aa7f61] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
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

                {/* Price & CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">가격</span>
                      <div className="text-lg font-bold text-[#06342e]">{service.price}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>상담 후 결정</span>
                    </div>
                  </div>
                  
                  <Link
                    href="#contact"
                    className="w-full bg-[#06342e] hover:bg-[#aa7f61] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>자세히 알아보기</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
              어떤 서비스가 적합한지 모르시겠나요?
            </h3>
            <p className="text-gray-600 mb-6">
              전문 컨설턴트가 귀하의 목표와 상황에 맞는 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="btn-accent"
              >
                무료 상담 받기
              </Link>
              <Link
                href="tel:02-1234-5678"
                className="flex items-center justify-center space-x-2 text-[#06342e] border border-[#06342e] hover:bg-[#06342e] hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                <span>전화 상담</span>
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