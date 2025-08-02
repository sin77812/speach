'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Users, TrendingUp, Quote, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FeaturedCasesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      company: '○○ 대기업',
      industry: '제조업',
      participants: 120,
      duration: '3개월',
      type: '기업 교육',
      challenge: '전사 임직원의 프레젠테이션 스킬 부족으로 인한 의사소통 문제',
      solution: '부서별 맞춤형 스피치 교육 및 실전 프레젠테이션 트레이닝 진행',
      results: [
        '프레젠테이션 품질 85% 향상',
        '회의 효율성 70% 개선',
        '직원 자신감 지수 92% 상승',
        '고객 만족도 78% 증가'
      ],
      testimonial: "단순히 말하는 기술이 아닌, 사람의 마음을 움직이는 진정한 소통의 힘을 배웠습니다. 전사적으로 커뮤니케이션 문화가 완전히 바뀌었어요.",
      author: "김○○ 상무",
      position: "인사총괄",
      rating: 5,
      image: "/api/placeholder/400/300",
      beforeAfter: {
        before: "회의 시간 평균 2시간, 의사결정 지연",
        after: "회의 시간 평균 1시간, 즉석 의사결정"
      }
    },
    {
      id: 2,
      company: '○○ 스타트업',
      industry: 'IT/테크',
      participants: 25,
      duration: '2개월',
      type: '팀 코칭',
      challenge: '투자 피칭과 고객 프레젠테이션에서의 설득력 부족',
      solution: '피칭 전문 트레이닝 및 스토리텔링 기법 집중 교육',
      results: [
        '투자 유치 성공률 300% 증가',
        '고객 전환율 45% 상승',
        '팀 내 소통 만족도 95% 달성',
        '브랜드 인지도 60% 향상'
      ],
      testimonial: "시리즈 A 투자 유치에 성공할 수 있었던 건 그레이스스피치의 피칭 교육 덕분입니다. 데이터만으로는 전달할 수 없는 감동을 만들어내는 법을 배웠어요.",
      author: "박○○ 대표",
      position: "CEO",
      rating: 5,
      image: "/api/placeholder/400/300",
      beforeAfter: {
        before: "투자 피칭 성공률 15%",
        after: "투자 피칭 성공률 60%"
      }
    },
    {
      id: 3,
      company: '○○ 대학교',
      industry: '교육기관',
      participants: 200,
      duration: '4개월',
      type: '학생 교육',
      challenge: '취업 면접 및 발표 역량 부족으로 인한 낮은 취업률',
      solution: '면접 스피치 특화 프로그램 및 실전 모의면접 시뮬레이션',
      results: [
        '취업률 40% 증가',
        '면접 통과율 85% 달성',
        '학생 만족도 96% 기록',
        '기업 평가점수 30% 상승'
      ],
      testimonial: "학생들의 자신감이 눈에 띄게 향상되었습니다. 이론적인 지식뿐만 아니라 실제 사회에서 통용되는 소통 능력을 기를 수 있어 정말 만족스럽습니다.",
      author: "이○○ 교수",
      position: "취업지원센터장",
      rating: 5,
      image: "/api/placeholder/400/300",
      beforeAfter: {
        before: "졸업생 취업률 65%",
        after: "졸업생 취업률 91%"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentSlide];

  return (
    <section id="cases" className="section bg-white">
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
            className="inline-flex items-center space-x-2 bg-[#aa7f61] text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Building2 className="w-4 h-4" />
            <span>성공 사례</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#06342e] mb-6">
            변화를 만들어낸 <span className="text-[#aa7f61]">실제 스토리</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 분야의 기업과 조직이 그레이스스피치와 함께 이뤄낸 놀라운 변화의 여정을 확인해보세요.
          </p>
        </motion.div>

        {/* Main Case Study */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Company Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#06342e]">{currentCase.company}</h3>
                  <p className="text-gray-600">{currentCase.industry}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <Users className="w-6 h-6 text-[#aa7f61] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#06342e]">{currentCase.participants}</div>
                  <div className="text-sm text-gray-600">참여자</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 text-[#aa7f61] mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#aa7f61] rounded-full"></div>
                  </div>
                  <div className="text-2xl font-bold text-[#06342e]">{currentCase.duration}</div>
                  <div className="text-sm text-gray-600">교육기간</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-[#aa7f61] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#06342e]">{currentCase.type}</div>
                  <div className="text-sm text-gray-600">교육유형</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#06342e] mb-2">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#06342e] mb-2">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.solution}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div>
              <h4 className="text-2xl font-bold text-[#06342e] mb-6">성과 및 결과</h4>
              
              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentCase.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-[#aa7f61] rounded-full"></div>
                      <span className="text-sm font-medium text-[#06342e]">결과 {index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{result}</p>
                  </motion.div>
                ))}
              </div>

              {/* Before/After */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
                <h5 className="text-lg font-semibold text-[#06342e] mb-4">Before & After</h5>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Before: {currentCase.beforeAfter.before}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">After: {currentCase.beforeAfter.after}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#06342e] rounded-xl p-6 text-white">
                <Quote className="w-8 h-8 text-[#aa7f61] mb-4" />
                <blockquote className="text-lg leading-relaxed mb-4">
                  &ldquo;{currentCase.testimonial}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{currentCase.author}</div>
                    <div className="text-sm text-white/80">{currentCase.position}</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(currentCase.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#aa7f61] text-[#aa7f61]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-[#06342e] hover:bg-[#aa7f61] text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-[#aa7f61]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#06342e] hover:bg-[#aa7f61] text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              당신의 조직도 이런 변화를 경험할 수 있습니다
            </h3>
            <p className="text-lg mb-6 opacity-90">
              맞춤형 교육 프로그램을 통해 조직의 소통 문화를 혁신하고 성과를 극대화하세요.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-[#06342e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <span>성공 사례 상담받기</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCasesSection;