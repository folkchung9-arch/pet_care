import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u6bdb\u7ed2\u661f\u7403\u5ba0\u7269\u6d17\u62a4",
  description: "\u9884\u7ea6\u5236\u5ba0\u7269\u6d17\u62a4\u95e8\u5e97\u5c55\u793a\u4e0e\u9884\u7ea6\u9875\u9762",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
