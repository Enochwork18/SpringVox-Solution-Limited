import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import Script from "next/script";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://springvoxsl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "SpringVox Solution Limited | AI, Enterprise Software & Digital Innovation",
    template: "%s | SpringVox Solution Limited",
  },
  description:
    "SpringVox Solution Limited is a Nigerian technology company building AI platforms, enterprise software, cybersecurity, and digital transformation solutions for startups and enterprises across Africa.",
  keywords: [
    "SpringVox",
    "AI software Nigeria",
    "enterprise solutions Africa",
    "ReKallIQ",
    "knowledge AI",
    "cybersecurity Nigeria",
    "digital transformation",
    "enterprise software development",
    "web development Nigeria",
    "mobile app development",
    "NDPR compliant AI",
    "African enterprise AI",
  ].join(", "),
  openGraph: {
    title: "SpringVox Solution Limited",
    description:
      "AI, Enterprise Software & Digital Innovation - Building intelligent solutions for the future.",
    url: siteUrl,
    siteName: "SpringVox Solution Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SpringVox Solution Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpringVox Solution Limited",
    description: "Enterprise AI & Software Solutions for African Businesses",
    images: [`${siteUrl}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpringVox Solution Limited",
  url: siteUrl,
  description:
    "AI, Enterprise Software & Digital Innovation company building intelligent solutions for the future.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressLocality: "Lagos",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business",
    url: `${siteUrl}/contact`,
  },
  sameAs: [
    "https://springvox-knowledge-ai.vercel.app/",
    "https://linkedin.com/company/springvox",
    "https://twitter.com/springvox",
  ],
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
      style={{ scrollBehavior: "auto" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark-bg text-white font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
