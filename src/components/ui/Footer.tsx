'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: '1:1 맞춤 코칭', href: '/services/personal-coaching' },
      { name: '기업 교육', href: '/services/corporate-training' },
      { name: '단체 강의', href: '/services/group-training' },
      { name: '온라인 교육', href: '/services/online-training' },
    ],
    company: [
      { name: '회사 소개', href: '/about' },
      { name: '강사진', href: '/instructors' },
      { name: '성공 사례', href: '/cases' },
      { name: '블로그', href: '/blog' },
    ],
    support: [
      { name: '자주 묻는 질문', href: '/faq' },
      { name: '상담 신청', href: '#contact' },
      { name: '교육 자료', href: '/resources' },
      { name: '고객 지원', href: '/support' },
    ],
    legal: [
      { name: '개인정보처리방침', href: '/privacy' },
      { name: '이용약관', href: '/terms' },
      { name: '환불 정책', href: '/refund' },
      { name: '사업자 정보', href: '/business-info' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/gracespeech', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/gracespeech', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/gracespeech', name: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gracespeech', name: 'LinkedIn' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: '대표 전화',
      value: '02-1234-5678',
      href: 'tel:02-1234-5678',
    },
    {
      icon: Mail,
      label: '이메일',
      value: 'info@gracespeech.co.kr',
      href: 'mailto:info@gracespeech.co.kr',
    },
    {
      icon: MapPin,
      label: '주소',
      value: '서울시 강남구 ○○로 123, ○○빌딩 5층',
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: '운영시간',
      value: '월-금 09:00-18:00, 토 09:00-15:00',
      href: null,
    },
  ];

  return (
    <footer className="bg-[#06342e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#aa7f61] rounded-full blur-3xl -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#aa7f61] rounded-full blur-3xl translate-x-48 translate-y-48" />
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#aa7f61] to-[#d4b896] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold">그레이스스피치</span>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                말 한마디로 운명이 바뀌는 순간을 만듭니다. 
                개인의 변화에서 시작해 조직의 혁신으로 이어지는 
                실전 중심의 언어·스피치 교육을 제공합니다.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#aa7f61] transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links Grid */}
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-[#aa7f61]">서비스</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white hover:text-[#aa7f61] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-[#aa7f61]">회사</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white hover:text-[#aa7f61] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-[#aa7f61]">고객지원</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white hover:text-[#aa7f61] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6 text-[#aa7f61]">연락처</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  const content = (
                    <div className="flex items-start space-x-3 group">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#aa7f61] transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">{contact.label}</div>
                        <div className="text-sm text-white/90 group-hover:text-[#aa7f61] transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  );

                  return (
                    <div key={index}>
                      {contact.href ? (
                        <Link href={contact.href} className="block">
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact CTA */}
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">빠른 상담</h4>
                <p className="text-xs text-white/70 mb-3">
                  궁금한 점이 있으시면 언제든 연락주세요
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-[#aa7f61] hover:bg-[#8a6b4d] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>상담 신청</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright & Business Info */}
            <div className="text-center lg:text-left">
              <div className="text-sm text-white/60 mb-2">
                © 2025 그레이스스피치. All rights reserved.
              </div>
              <div className="text-xs text-white/50">
                사업자등록번호: 123-45-67890 | 대표: 김○○ | 
                통신판매업신고번호: 제2025-서울강남-1234호
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-[#aa7f61] hover:bg-[#8a6b4d] rounded-lg flex items-center justify-center transition-colors duration-300"
              aria-label="맨 위로 이동"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;