import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "考啦教育｜广东高职高考全科备考",
  description:
    "考啦教育位于广东惠州，以线下面授为主，融合直播、录播、AI学习室与课后1V1答疑，提供语数英全科高职高考备考课程。",
  keywords: [
    "考啦教育",
    "惠州高职高考",
    "广东高职高考培训",
    "高职高考全科班",
    "3+证书",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
