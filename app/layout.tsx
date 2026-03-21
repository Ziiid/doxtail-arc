import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Readiness Check – Doxtail",
  description: "Hur redo är din organisation för AI? 30 frågor, 10 kategorier, ett ärligt svar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${geist.className} antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
