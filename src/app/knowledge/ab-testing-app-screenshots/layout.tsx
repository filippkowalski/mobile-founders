import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Screenshot A/B Testing Often Fails in ASO and When It Works | Mobile Founders Knowledge Base",
  description: "A comprehensive analysis of why screenshot A/B tests frequently fail to improve conversion rates, based on insights from multiple ASO practitioners and mobile app founders working on apps from thousands to hundreds of thousands of downloads per month.",
  keywords: [
    "app store optimization",
    "ASO",
    "A/B testing",
    "app screenshots",
    "mobile app marketing",
    "PPO",
    "product page optimization",
    "app store conversion",
    "mobile founders",
    "app development insights",
    "screenshot optimization",
    "mobile app growth",
    "Apple Search Ads",
    "ASA"
  ],
  authors: [
    { name: "Filip Kowalski", url: "https://twitter.com/filippkowalski" },
    { name: "designerants", url: "https://twitter.com/designerants" },
    { name: "Mark LIVE", url: "https://twitter.com/MarkLIVE" },
    { name: "phlpcrlsn", url: "https://twitter.com/phlpcrlsn" },
    { name: "alpennec", url: "https://twitter.com/alpennec" },
    { name: "Thomasbcn", url: "https://twitter.com/Thomasbcn" }
  ],
  creator: "Filip Kowalski",
  publisher: "Mobile Founders",
  openGraph: {
    title: "Why Screenshot A/B Testing Often Fails in ASO and When It Works",
    description: "A comprehensive analysis of why screenshot A/B tests frequently fail to improve conversion rates, based on insights from multiple ASO practitioners and mobile app founders.",
    url: "https://mobile-founders.com/knowledge/ab-testing-app-screenshots",
    siteName: "Mobile Founders",
    type: "article",
    publishedTime: "2024-08-27T21:31:00.000Z",
    authors: ["Filip Kowalski", "designerants", "Mark LIVE", "phlpcrlsn", "alpennec", "Thomasbcn"],
    tags: ["ASO", "A/B Testing", "App Store Optimization", "PPO", "Mobile Marketing", "Screenshot Testing"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Screenshot A/B Testing Often Fails in ASO and When It Works",
    description: "Comprehensive analysis of why screenshot A/B tests fail 90% of the time and when they actually work, based on insights from ASO practitioners.",
    creator: "@filippkowalski",
    site: "@filippkowalski",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://mobile-founders.com/knowledge/ab-testing-app-screenshots",
  },
};

export default function ABTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}