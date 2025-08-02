import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "그레이스스피치 | 언어·스피치 교육 전문 학원",
  description: "개인의 변화에서 시작해 조직의 혁신으로 이어지는 실전 중심의 언어·스피치 교육을 제공합니다. 1:1 코칭부터 기업 교육까지.",
  keywords: "스피치, 발표, 교육, 기업교육, 1:1코칭, 커뮤니케이션, 언어교육",
  openGraph: {
    title: "그레이스스피치 | 언어·스피치 교육 전문 학원",
    description: "말 한마디로 운명이 바뀌는 순간을 만듭니다",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
