"use client";

import Link from "next/link";
import { Smartphone, ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    id: "aso-mystery-article",
    title: "A Curious Case of ASO: How Ghost Installs Are Haunting the App Store",
    description: "A deep dive into the mysterious world of keyword install campaigns and their impact on legitimate app developers, revealing underground tactics used to game App Store algorithms.",
    date: "September 17, 2025",
    author: "Mobile Founders Community",
    authorHandle: "",
    readTime: "15 min read",
    tags: ["ASO", "App Store Optimization", "Keyword Installs", "Algorithm Gaming", "Community Investigation"],
    isExternal: false
  },
  {
    id: "meta-ads-budget-strategy",
    title: "Meta Ads Budget Strategy: Expert Insights from Experienced Practitioners",
    description: "Real-world insights from experienced Meta Ads practitioners on budget planning, campaign setup, and optimization strategies for mobile app marketing.",
    date: "September 11, 2025",
    author: "Mobile Founders Community",
    authorHandle: "",
    readTime: "12 min read",
    tags: ["Meta Ads", "Budget Planning", "Campaign Strategy", "User Acquisition", "Community Insights"],
    isExternal: false
  },
  {
    id: "meta-ads-marketing-resources",
    title: "Meta Ads Marketing Resources: The Complete Knowledge Base",
    description: "A comprehensive collection of 30+ Meta Ads strategies, case studies, tools, and insights from top mobile marketing experts and practitioners.",
    date: "September 9, 2025",
    author: "Filip Kowalski",
    authorHandle: "@filippkowalski",
    readTime: "10 min read",
    tags: ["Meta Ads", "Facebook Ads", "Mobile Marketing", "User Acquisition", "Creative Strategy"],
    isExternal: false
  },
  {
    id: "ab-testing-app-screenshots",
    title: "Why Screenshot A/B Testing Often Fails in ASO and When It Works",
    description: "A comprehensive analysis of why screenshot A/B tests fail 90% of the time, based on insights from multiple ASO practitioners working on apps from thousands to hundreds of thousands of downloads per month.",
    date: "August 27, 2024",
    author: "Mobile Founders Community",
    authorHandle: "",
    readTime: "8 min read",
    tags: ["ASO", "A/B Testing", "PPO", "Mobile Marketing", "Screenshot Testing"],
    isExternal: false
  },
  {
    id: "viral-tiktok-marketing",
    title: "Viral TikTok Marketing Knowledge Base",
    description: "Complete guide to creating viral TikTok content, understanding the algorithm, and leveraging TikTok for mobile app marketing and user acquisition.",
    date: "September 2025",
    author: "Filip Kowalski",
    authorHandle: "@filippkowalski",
    readTime: "External Resource",
    tags: ["TikTok Marketing", "Viral Content", "Social Media", "User Acquisition", "Content Strategy"],
    isExternal: true,
    externalUrl: "https://swanky-stretch-643.notion.site/Viral-TikTok-Marketing-Knowledge-Base-14c59fc7986c80c2a9a9feb6c128fe28"
  },
  {
    id: "paywalls-knowledge",
    title: "Paywalls Knowledge Base",
    description: "Comprehensive guide to implementing and optimizing paywalls for mobile apps. Best practices, strategies, and case studies for subscription monetization.",
    date: "September 2025",
    author: "Filip Kowalski", 
    authorHandle: "@filippkowalski",
    readTime: "External Resource",
    tags: ["Paywalls", "Subscription", "Monetization", "Revenue", "Mobile Apps"],
    isExternal: true,
    externalUrl: "https://swanky-stretch-643.notion.site/Paywalls-Knowledgebase-15259fc7986c80e283a8de787431d057"
  },
  {
    id: "useful-links",
    title: "Useful Links: Curated Mobile Marketing Resources",
    description: "A comprehensive collection of mobile marketing resources covering subscriptions, Apple Search Ads, iOS 14 changes, industry trends, and expert insights from 2017-2023.",
    date: "September 11, 2025",
    author: "Thomas BCN",
    authorHandle: "@Thomasbcn",
    readTime: "Resource Collection",
    tags: ["Resources", "ASA", "Subscriptions", "iOS 14", "Industry Trends", "Links"],
    isExternal: false
  }
];

export default function KnowledgeBase() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <header className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-md border border-border">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              [KNOWLEDGE_BASE]
            </h1>
          </div>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Curated insights, strategies, and lessons learned from mobile founders, developers, and industry experts.
            Real experiences from building and growing mobile products.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const CardComponent = () => (
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl leading-tight hover:text-primary transition-colors flex-1">
                      {article.title}
                    </CardTitle>
                    {article.isExternal && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>by {article.author}</span>
                    {article.authorHandle && (
                      <a 
                        href={`https://twitter.com/${article.authorHandle.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {article.authorHandle}
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return article.isExternal ? (
              <a
                key={article.id}
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardComponent />
              </a>
            ) : (
              <Link key={article.id} href={`/knowledge/${article.id}`}>
                <CardComponent />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}