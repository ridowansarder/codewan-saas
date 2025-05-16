import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Codewan",
  description: "A software SaaS app using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
