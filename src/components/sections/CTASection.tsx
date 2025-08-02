'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    participantCount: '',
    educationType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const educationTypes = [
    '1:1 맞춤 코칭',
    '기업 교육',
    '단체 강의',
    '온라인 교육',
    '기타 (메시지에 상세 내용 작성)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현시에는 여기에 폼 제출 로직 추가
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        participantCount: '',
        educationType: '',
        message: '',
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: '전화 상담',
      content: '02-1234-5678',
      description: '월-금 09:00-18:00',
      action: 'tel:02-1234-5678',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MessageCircle,
      title: '카카오톡 상담',
      content: '@그레이스스피치',
      description: '24시간 언제든지',
      action: 'https://pf.kakao.com/_grace-speech',
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      icon: Mail,
      title: '이메일 문의',
      content: 'info@gracespeech.co.kr',
      description: '상세한 문의사항',
      action: 'mailto:info@gracespeech.co.kr',
      color: 'from-blue-500 to-blue-600',
    },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="section bg-gradient-to-br from-[#06342e] to-[#aa7f61] relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">
              상담 신청이 완료되었습니다!
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              빠른 시일 내에 전문 컨설턴트가 연락드리겠습니다. <br />
              궁금한 점이 있으시면 언제든 연락주세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:02-1234-5678"
                className="bg-white text-[#06342e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>02-1234-5678</span>
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    participantCount: '',
                    educationType: '',
                    message: '',
                  });
                }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06342e] transition-colors duration-300"
              >
                추가 상담 신청
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section bg-gradient-to-br from-[#06342e] to-[#aa7f61] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-36 translate-y-36" />
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
            <Calendar className="w-4 h-4" />
            <span>상담 신청</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            조직의 <span className="text-yellow-300">소통 혁신</span>을 시작하세요
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            전문 컨설턴트가 귀하의 목표와 상황에 맞는 최적의 교육 솔루션을 제안해드립니다. <br />
            지금 바로 무료 상담을 신청하고 변화의 첫 걸음을 내디뎌보세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">무료 상담 신청</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="○○ 회사"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    교육 유형
                  </label>
                  <select
                    name="educationType"
                    value={formData.educationType}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-colors"
                  >
                    <option value="" className="text-gray-800">선택해주세요</option>
                    {educationTypes.map((type, index) => (
                      <option key={index} value={type} className="text-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    예상 참여 인원
                  </label>
                  <input
                    type="text"
                    name="participantCount"
                    value={formData.participantCount}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="예: 1명, 10-20명"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
                  placeholder="교육 목표, 일정, 예산 등 상세한 내용을 알려주시면 더 정확한 상담을 도와드릴 수 있습니다."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#06342e] py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#06342e] border-t-transparent rounded-full animate-spin" />
                    <span>제출 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>무료 상담 신청하기</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">빠른 상담 방법</h3>
              
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={method.action}
                      className="block bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {method.title}
                          </h4>
                          <p className="text-yellow-300 font-medium mb-1">
                            {method.content}
                          </p>
                          <p className="text-white/70 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Office Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>오시는 길</span>
              </h4>
              
              <div className="space-y-3 text-white/90">
                <p>
                  <strong>주소:</strong> 서울시 강남구 ○○로 123, ○○빌딩 5층
                </p>
                <p>
                  <strong>지하철:</strong> 2호선 강남역 3번 출구 도보 5분
                </p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span><strong>운영시간:</strong> 월-금 09:00-18:00, 토 09:00-15:00</span>
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">
                🚨 긴급 상담 필요시
              </h4>
              <p className="text-white/90 text-sm mb-3">
                당일 교육이나 긴급한 상담이 필요하신 경우
              </p>
              <Link
                href="tel:010-1234-5678"
                className="text-yellow-300 font-semibold hover:text-yellow-100 transition-colors"
              >
                010-1234-5678 (24시간 핫라인)
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;