import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base - Mobile Founders Community",
  description: "Curated insights, strategies, and lessons learned from mobile founders, developers, and industry experts. Real experiences from building and growing mobile products.",
  keywords: [
    "mobile founders",
    "app development",
    "mobile app insights",
    "startup advice",
    "mobile marketing",
    "app store optimization",
    "mobile growth strategies",
    "app monetization",
    "mobile development community"
  ],
  authors: [{ name: "Mobile Founders Community" }],
  creator: "Mobile Founders",
  publisher: "Mobile Founders",
  openGraph: {
    title: "Knowledge Base - Mobile Founders Community",
    description: "Curated insights, strategies, and lessons learned from mobile founders and developers.",
    url: "https://mobile-founders.com/knowledge",
    siteName: "Mobile Founders",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Knowledge Base - Mobile Founders Community",
    description: "Curated insights and strategies from mobile founders and developers.",
    creator: "@filippkowalski",
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
    canonical: "https://mobile-founders.com/knowledge",
  },
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}