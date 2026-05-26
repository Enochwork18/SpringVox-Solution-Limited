import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpringVox Solution Limited | Intelligent Software Solutions for the Future",
  description:
    "SpringVox Solution Limited is a forward-thinking technology company specializing in AI, cybersecurity, enterprise software, VoIP, web & mobile development, and digital transformation services.",
  keywords: [
    "SpringVox",
    "software development",
    "artificial intelligence",
    "cybersecurity",
    "enterprise solutions",
    "VoIP",
    "digital transformation",
    "web development",
    "mobile apps",
  ],
  openGraph: {
    title: "SpringVox Solution Limited",
    description:
      "Building intelligent software solutions for the future. AI, enterprise software, cybersecurity & digital innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-white font-sans">
        {children}
      </body>
    </html>
  );
}
