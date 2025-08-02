'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, BookOpen, CheckCircle, Star } from 'lucide-react';

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Target,
      title: '맞춤형 교육',
      description: '개인과 조직의 특성을 분석하여 최적화된 교육 프로그램을 설계합니다.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: '실전 중심',
      description: '이론보다는 실제 상황에서 바로 적용 가능한 실무 스킬을 중점적으로 교육합니다.',
      color: 'from-[#06342e] to-[#0a4a3f]',
    },
    {
      icon: Zap,
      title: '즉시 피드백',
      description: '실시간 분석과 개선점 제시로 빠른 성장을 도와드립니다.',
      color: 'from-[#aa7f61] to-[#8a6b4d]',
    },
    {
      icon: BookOpen,
      title: '체계적 커리큘럼',
      description: '단계별로 구성된 과학적 교육 방법론으로 확실한 성과를 보장합니다.',
      color: 'from-green-500 to-green-600',
    },
  ];

  const instructors = [
    {
      name: '김○○ 대표강사',
      title: '그레이스스피치 대표',
      experience: '15년',
      expertise: ['기업 교육', '1:1 코칭', '프레젠테이션 스킬'],
      credentials: [
        '한국스피치커뮤니케이션학회 정회원',
        '국제인증 스피치코치 자격증',
        '○○대학교 언론정보학과 석사'
      ],
      achievements: [
        '대기업 임원 스피치 코칭 1,000+ 시간',
        '공공기관 스피치 교육 강사',
        '스피치 관련 서적 3권 출간'
      ],
      image: '/api/placeholder/300/300',
      rating: 4.9,
      studentCount: 500,
    },
    {
      name: '박○○ 수석강사',
      title: '커뮤니케이션 전문가',
      experience: '12년',
      expertise: ['비즈니스 커뮤니케이션', '리더십 스피치', '면접 코칭'],
      credentials: [
        'CTI 국제인증 코치',
        '비즈니스 커뮤니케이션 전문가',
        '○○대학교 심리학과 박사'
      ],
      achievements: [
        '스타트업 CEO 피칭 코칭 전문',
        '취업 면접 성공률 95% 달성',
        'TEDx 강연 및 워크숍 진행'
      ],
      image: '/api/placeholder/300/300',
      rating: 4.8,
      studentCount: 350,
    },
    {
      name: '이○○ 전문강사',
      title: '스피치 테라피스트',
      experience: '10년',
      expertise: ['발음 교정', '발성 훈련', '무대 공포증 극복'],
      credentials: [
        '언어치료사 국가자격증',
        '스피치 테라피 전문가',
        '○○대학교 특수교육학과 석사'
      ],
      achievements: [
        '아동/성인 발음 교정 전문',
        '스피치 클리닉 운영 경험',
        '언어 발달 관련 논문 10편 발표'
      ],
      image: '/api/placeholder/300/300',
      rating: 4.9,
      studentCount: 280,
    },
  ];

  const certifications = [
    { name: '한국스피치커뮤니케이션학회', type: '정회원' },
    { name: '국제스피치코치협회', type: '인증기관' },
    { name: '한국교육부', type: '평생교육시설' },
    { name: 'ISO 9001', type: '품질경영시스템' },
  ];

  return (
    <section id="team" className="section bg-gray-50">
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
            <Award className="w-4 h-4" />
            <span>전문성</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#06342e] mb-6">
            왜 <span className="text-[#aa7f61]">그레이스스피치</span>를 선택해야 할까요?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            검증된 전문성과 차별화된 교육 방법론으로 확실한 변화를 만들어드립니다.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#06342e] mb-3 group-hover:text-[#aa7f61] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Instructors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#06342e] mb-4">
              전문 강사진 소개
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              각 분야별 최고의 전문가들이 여러분의 성장을 책임지겠습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Profile Image & Basic Info */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">
                      {instructor.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#06342e] mb-1">
                    {instructor.name}
                  </h4>
                  <p className="text-[#aa7f61] font-medium mb-2">
                    {instructor.title}
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span>경력 {instructor.experience}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{instructor.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{instructor.studentCount}+ 학생</span>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-[#06342e] mb-2">전문 분야</h5>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#aa7f61]/10 text-[#aa7f61] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-[#06342e] mb-2">자격 및 학력</h5>
                  <ul className="space-y-1">
                    {instructor.credentials.map((credential, credIndex) => (
                      <li key={credIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-sm font-semibold text-[#06342e] mb-2">주요 성과</h5>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <Award className="w-3 h-3 text-[#aa7f61]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#06342e] mb-4">
              공식 인증 및 신뢰 지표
            </h3>
            <p className="text-gray-600">
              다양한 공식 기관으로부터 인증받은 전문성을 바탕으로 신뢰할 수 있는 교육을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 border border-gray-200 rounded-xl hover:border-[#aa7f61] transition-colors"
              >
                <Award className="w-8 h-8 text-[#aa7f61] mx-auto mb-2" />
                <h4 className="font-semibold text-[#06342e] text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600">{cert.type}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#06342e] mb-1">15+</div>
              <div className="text-sm text-gray-600">년간 운영</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#06342e] mb-1">1000+</div>
              <div className="text-sm text-gray-600">기업 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#06342e] mb-1">99%</div>
              <div className="text-sm text-gray-600">재계약률</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;