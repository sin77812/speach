'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Building2, Award, BarChart3, LucideIcon } from 'lucide-react';

interface StatData {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const OurImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    {
      icon: Users,
      number: 1200,
      suffix: '+',
      label: '교육 참여자',
      description: '개인부터 기업까지 다양한 분야의 참여자들이 스피치 교육을 통해 변화를 경험했습니다.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      number: 50,
      suffix: '+',
      label: '파트너 기업',
      description: '대기업부터 스타트업까지 다양한 규모의 기업들과 장기적인 파트너십을 구축하고 있습니다.',
      color: 'from-[#06342e] to-[#0a4a3f]',
    },
    {
      icon: Award,
      number: 98,
      suffix: '%',
      label: '교육 만족도',
      description: '체계적인 교육 시스템과 전문적인 피드백으로 높은 만족도를 기록하고 있습니다.',
      color: 'from-[#aa7f61] to-[#8a6b4d]',
    },
    {
      icon: TrendingUp,
      number: 85,
      suffix: '%',
      label: '성과 향상',
      description: '교육 참여 후 업무 성과와 자신감 향상을 경험한 참여자들의 평균 개선율입니다.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section ref={ref} className="section bg-[#06342e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#aa7f61] rounded-full blur-3xl -translate-x-36 -translate-y-36" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#aa7f61] rounded-full blur-3xl translate-x-48 translate-y-48" />
      </div>

      <div className="container relative z-10">
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <BarChart3 className="w-4 h-4" />
            <span>성과 지표</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            숫자로 증명하는 <span className="text-[#aa7f61]">우리의 성과</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            체계적인 교육과 전문적인 지도를 통해 쌓아온 신뢰할 수 있는 성과를 확인하세요.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            분야별 성과 분석
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProgressBar 
              label="발표 자신감 향상" 
              percentage={92} 
              color="bg-[#aa7f61]"
              delay={0.8}
            />
            <ProgressBar 
              label="의사소통 능력 개선" 
              percentage={89} 
              color="bg-blue-500"
              delay={1.0}
            />
            <ProgressBar 
              label="리더십 스킬 강화" 
              percentage={86} 
              color="bg-green-500"
              delay={1.2}
            />
            <ProgressBar 
              label="업무 성과 향상" 
              percentage={88} 
              color="bg-purple-500"
              delay={1.4}
            />
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <blockquote className="text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed mb-6">
              &ldquo;그레이스스피치 교육을 통해 우리 팀의 프레젠테이션 품질이 혁신적으로 개선되었습니다. 
              단순히 말하는 기술이 아닌, 사람의 마음을 움직이는 진정한 소통의 힘을 배웠습니다.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#aa7f61] to-[#8a6b4d] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">김</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">김○○ 팀장</div>
                <div className="text-white/70 text-sm">○○ 대기업 마케팅팀</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Counter Component
const StatCard = ({ stat, index, isInView }: { stat: StatData; index: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.number / 60;
        const counter = setInterval(() => {
          setCount((prev) => {
            if (prev < stat.number) {
              return Math.min(prev + increment, stat.number);
            }
            clearInterval(counter);
            return stat.number;
          });
        }, 50);
      }, index * 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, stat.number, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
          {Math.round(count)}{stat.suffix}
        </div>
        
        <div className="text-xl font-semibold text-[#aa7f61] mb-3">
          {stat.label}
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};

// Progress Bar Component
const ProgressBar = ({ label, percentage, color, delay }: { label: string; percentage: number; color: string; delay: number }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{label}</span>
        <span className="text-[#aa7f61] font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default OurImpactSection;