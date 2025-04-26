import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "MyCart",
  description: "Приложение для контроля расходов на продукты",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manropeSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
