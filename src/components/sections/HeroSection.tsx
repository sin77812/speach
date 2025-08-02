'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play, Users, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06342e] via-[#0a4a3f] to-[#aa7f61]" />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              <span>실전 중심 스피치 교육 전문</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              말 한마디로{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#aa7f61] to-[#d4b896] bg-clip-text text-transparent">
                  운명이 바뀌는
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-[#aa7f61]/30 -z-10"
                />
              </span>{' '}
              순간을 만듭니다
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              개인의 변화에서 시작해 조직의 혁신으로 이어지는 <br className="hidden lg:block" />
              실전 중심의 언어·스피치 교육
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
            >
              <div className="flex items-center space-x-2 text-white/80">
                <Users className="w-5 h-5 text-[#aa7f61]" />
                <span className="font-semibold">1,200+ 교육 참여자</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <TrendingUp className="w-5 h-5 text-[#aa7f61]" />
                <span className="font-semibold">50+ 파트너 기업</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Award className="w-5 h-5 text-[#aa7f61]" />
                <span className="font-semibold">98% 만족도</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="group relative bg-[#aa7f61] hover:bg-white text-white hover:text-[#06342e] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>무료 상담 신청</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group flex items-center justify-center space-x-2 text-white border border-white/30 hover:border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10">
                <Play className="w-5 h-5" />
                <span>소개 영상 보기</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Users className="w-16 h-16 mx-auto mb-4 text-[#aa7f61]" />
                    <p className="text-lg font-medium">프리미엄 스피치 교육</p>
                    <p className="text-sm opacity-80">개인 맞춤형 1:1 코칭</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">실시간 피드백</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-[#aa7f61]" />
                  <span className="text-sm font-medium text-gray-700">성과 향상 98%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium">아래로 스크롤</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-white/30 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;