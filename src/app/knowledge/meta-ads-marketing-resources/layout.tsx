import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Marketing Resources: Complete Knowledge Base | Mobile Founders",
  description: "A comprehensive collection of Meta Ads strategies, case studies, tools, and insights from top mobile marketing experts. Everything you need to master Meta advertising for your mobile app with 30+ curated resources.",
  keywords: [
    "Meta Ads",
    "Facebook Ads",
    "mobile marketing",
    "app marketing",
    "user acquisition",
    "creative strategy",
    "ad optimization",
    "mobile app growth",
    "iOS marketing",
    "campaign optimization",
    "Meta Ads tools",
    "ad creative",
    "mobile advertising",
    "app promotion",
    "user acquisition strategy",
    "Meta Ads case studies",
    "mobile marketing resources",
    "Facebook advertising",
    "Meta advertising",
    "mobile app advertising"
  ],
  authors: [{ name: "Mobile Founders Community" }],
  creator: "Mobile Founders Community",
  publisher: "Mobile Founders",
  openGraph: {
    title: "Meta Ads Marketing Resources: Complete Knowledge Base",
    description: "A comprehensive collection of Meta Ads strategies, case studies, tools, and insights from top mobile marketing experts. 30+ curated resources for mobile app founders.",
    url: "https://mobile-founders.com/knowledge/meta-ads-marketing-resources",
    siteName: "Mobile Founders",
    type: "article",
    publishedTime: "2025-01-09T00:00:00.000Z",
    authors: ["Mobile Founders Community"],
    tags: ["Meta Ads", "Facebook Ads", "Mobile Marketing", "User Acquisition", "Creative Strategy", "Campaign Optimization"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Marketing Resources: Complete Knowledge Base",
    description: "30+ curated Meta Ads resources: strategies, case studies, tools & expert insights for mobile app founders.",
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
    canonical: "https://mobile-founders.com/knowledge/meta-ads-marketing-resources",
  },
};

export default function MetaAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}