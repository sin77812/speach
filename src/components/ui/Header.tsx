'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: '서비스', href: '#services' },
    { name: '사례', href: '#cases' },
    { name: '강사진', href: '#team' },
    { name: '블로그', href: '/blog' },
    { name: '상담', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#06342e] to-[#aa7f61] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">G</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-[#06342e]">
              그레이스스피치
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#06342e] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:02-1234-5678"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#06342e] transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">02-1234-5678</span>
            </Link>
            <Link href="#contact" className="btn-accent">
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴 토글"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-[#06342e] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100">
                <Link
                  href="tel:02-1234-5678"
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#06342e] transition-colors mb-4"
                >
                  <Phone size={18} />
                  <span className="font-medium">02-1234-5678</span>
                </Link>
                <Link
                  href="#contact"
                  className="btn-accent w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  무료 상담 신청
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;