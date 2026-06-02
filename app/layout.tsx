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
  title: "SpringVox Solution Limited | AI, Enterprise Software & Digital Innovation",
  description:
    "SpringVox Solution Limited is a Nigerian technology company building AI platforms, enterprise software, cybersecurity, and digital transformation solutions for startups and enterprises.",
  keywords: [
    "SpringVox", "AI software Nigeria", "enterprise solutions Africa",
    "ReKallIQ", "knowledge AI", "cybersecurity Nigeria",
    "digital transformation", "enterprise software development",
    "web development Nigeria", "mobile app development",
  ].join(", "),
  openGraph: {
    title: "SpringVox Solution Limited",
    description:
      "AI, Enterprise Software & Digital Innovation - Building intelligent solutions for the future.",
    url: "https://spring-vox-solution-limited.vercel.app",
    siteName: "SpringVox Solution Limited",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpringVox Solution Limited",
    description: "AI, Enterprise Software & Digital Innovation",
  },
  robots: {
    index: true,
    follow: true,
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
