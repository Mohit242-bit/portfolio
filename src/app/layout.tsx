import type { Metadata } from "next";
import "./globals.css";
import GSAPPluginLoader from './GSAPPluginLoader';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Mohit Rawat - Full Stack Developer & AI Automation Specialist",
  description: "Experienced web developer specializing in React, Next.js, and AI automation solutions. Creating modern, responsive websites and business automation systems.",
  keywords: "web developer, full stack developer, React, Next.js, AI automation, business automation, SEO optimization, portfolio",
  authors: [{ name: "Mohit Rawat" }],
  creator: "Mohit Rawat",
  openGraph: {
    title: "Mohit Rawat - Full Stack Developer",
    description: "Creating modern web experiences and AI automation solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Rawat - Full Stack Developer",
    description: "Creating modern web experiences and AI automation solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-black">
        <GSAPPluginLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
