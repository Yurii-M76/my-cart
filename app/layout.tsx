import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components";
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
      <link rel="shortcut icon" href="/logo.svg" />
      <body className={`${manropeSans.variable}`}>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
