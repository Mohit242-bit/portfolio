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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/models/laptop.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="prefetch" href="/models/laptop.glb" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black tap-highlight-none">
        <GSAPPluginLoader />
        <Header />
        <div className="touch-action-manipulation">
          {children}
        </div>
      </body>
    </html>
  );
}
