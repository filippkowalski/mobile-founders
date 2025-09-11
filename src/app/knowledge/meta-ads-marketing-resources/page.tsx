"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Lightbulb, Wrench, Twitter, Linkedin, Youtube, MessageSquare, Globe, ExternalLink } from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Meta Ads Marketing Resources: The Complete Knowledge Base for Mobile App Founders",
  "description": "A curated collection of Meta Ads strategies, case studies, tools, and insights from top mobile marketing experts and practitioners.",
  "image": "https://mobile-founders.com/meta-ads-marketing.jpg",
  "author": {
    "@type": "Person",
    "name": "Mobile Founders Community",
    "url": "https://mobile-founders.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mobile Founders",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mobile-founders.com/logo.png"
    }
  },
  "datePublished": "2025-01-09T00:00:00.000Z",
  "dateModified": "2025-01-09T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://mobile-founders.com/knowledge/meta-ads-marketing-resources"
  },
  "keywords": "Meta Ads, Facebook Ads, mobile marketing, app marketing, user acquisition, creative strategy, ad optimization",
  "articleSection": "Mobile Marketing",
  "wordCount": 3000
};

interface ResourceLink {
  url: string;
  title: string;
  description: string;
  author?: string;
  authorHandle?: string;
  type: "twitter" | "linkedin" | "youtube" | "website" | "reddit";
  category: string;
}

const resources: ResourceLink[] = [
  // Creative Strategy
  {
    url: "https://x.com/desmondhth/status/1964541391482343473",
    title: "Creative Strategy Insights",
    description: "Proven creative approaches for Meta Ads campaigns",
    author: "Desmond",
    authorHandle: "@desmondhth",
    type: "twitter",
    category: "Creative Strategy"
  },
  {
    url: "https://x.com/consumerxai/status/1964663993068372007",
    title: "Consumer Psychology in Ad Creatives",
    description: "Understanding consumer behavior for better ad performance",
    author: "ConsumerXAI",
    authorHandle: "@consumerxai",
    type: "twitter",
    category: "Creative Strategy"
  },
  {
    url: "https://www.linkedin.com/posts/lukasszanto_creative-is-king-everybody-knows-that-so-activity-7369395251867746310-Vog-",
    title: "Creative is King: Advanced Creative Strategies",
    description: "Deep dive into creative strategy and execution for mobile apps",
    author: "Lukas Szanto",
    type: "linkedin",
    category: "Creative Strategy"
  },
  {
    url: "https://x.com/PaulNizet/status/1963617357730820115",
    title: "Meta Ads Creative Best Practices",
    description: "Proven creative frameworks that drive results",
    author: "Paul Nizet",
    authorHandle: "@PaulNizet",
    type: "twitter",
    category: "Creative Strategy"
  },
  {
    url: "https://x.com/ivesparrowai/status/1963503360348413977",
    title: "AI-Powered Creative Optimization",
    description: "Leveraging AI for creative testing and optimization",
    author: "Ive Sparrow AI",
    authorHandle: "@ivesparrowai",
    type: "twitter",
    category: "Creative Strategy"
  },
  {
    url: "https://x.com/ivesparrowai/status/1963505346325995679",
    title: "Creative Testing Methodologies",
    description: "Systematic approaches to creative testing and iteration",
    author: "Ive Sparrow AI",
    authorHandle: "@ivesparrowai",
    type: "twitter",
    category: "Creative Strategy"
  },
  
  // Campaign Optimization
  {
    url: "https://www.linkedin.com/posts/hnpvz_everything-i-check-before-i-launch-a-meta-ugcPost-7364214422925365248-ZhqD",
    title: "Pre-Launch Meta Ads Checklist",
    description: "Complete checklist for campaign setup and optimization",
    author: "HNPVZ",
    type: "linkedin",
    category: "Campaign Optimization"
  },
  {
    url: "https://x.com/SinaSinry/status/1941475483717132301",
    title: "Meta Ads Optimization Strategies",
    description: "Advanced optimization techniques for better ROAS",
    author: "Sina Sinry",
    authorHandle: "@SinaSinry",
    type: "twitter",
    category: "Campaign Optimization"
  },
  {
    url: "https://x.com/MugoScales/status/1935195901871440305",
    title: "Scaling Meta Ads Campaigns",
    description: "Proven strategies for scaling profitable campaigns",
    author: "Mugo Scales",
    authorHandle: "@MugoScales",
    type: "twitter",
    category: "Campaign Optimization"
  },
  {
    url: "https://x.com/ivesparrowai/status/1929615353035804983",
    title: "Advanced Campaign Structure",
    description: "Optimal campaign structures for mobile app marketing",
    author: "Ive Sparrow AI",
    authorHandle: "@ivesparrowai",
    type: "twitter",
    category: "Campaign Optimization"
  },
  {
    url: "https://x.com/ivesparrowai/status/1932876099983122781",
    title: "Budget Optimization Strategies",
    description: "Smart budget allocation and optimization techniques",
    author: "Ive Sparrow AI",
    authorHandle: "@ivesparrowai",
    type: "twitter",
    category: "Campaign Optimization"
  },

  // Case Studies & Success Stories
  {
    url: "https://www.reddit.com/r/digital_marketing/comments/10z6dvv/ive_been_running_the_same_profitable_campaign/",
    title: "Long-Term Profitable Campaign Case Study",
    description: "Real case study of a consistently profitable Meta Ads campaign",
    type: "reddit",
    category: "Case Studies"
  },
  {
    url: "https://www.reddit.com/r/FacebookAds/comments/10gdg2z/ive_been_running_the_same_profitable_campaign/",
    title: "Facebook Ads Success Story",
    description: "Detailed breakdown of a successful long-term campaign",
    type: "reddit",
    category: "Case Studies"
  },
  {
    url: "https://www.linkedin.com/posts/lukasszanto_i-helped-this-ios-subscription-app-go-from-activity-7283072980794933248-SftZ/",
    title: "iOS Subscription App Success Story",
    description: "How to scale iOS subscription apps with Meta Ads",
    author: "Lukas Szanto",
    type: "linkedin",
    category: "Case Studies"
  },
  {
    url: "https://x.com/kennandavison/status/1901732154075193751",
    title: "Mobile App Growth Case Study",
    description: "Practical insights from scaling mobile app campaigns",
    author: "Kennan Davison",
    authorHandle: "@kennandavison",
    type: "twitter",
    category: "Case Studies"
  },

  // iOS & ASO Integration
  {
    url: "https://x.com/Thomasbcn/status/1933247205608935633",
    title: "iOS 17 Meta Ads Strategies",
    description: "Adapting Meta Ads strategies for iOS 17 changes",
    author: "Thomas BCN",
    authorHandle: "@Thomasbcn",
    type: "twitter",
    category: "iOS & ASO"
  },
  {
    url: "https://x.com/selimakbey_/status/1871125932049920346",
    title: "iOS Privacy & Meta Ads",
    description: "Navigating iOS privacy changes in Meta advertising",
    author: "Selim Akbey",
    authorHandle: "@selimakbey_",
    type: "twitter",
    category: "iOS & ASO"
  },
  {
    url: "https://x.com/vahebagdasar/status/1863621353515180196",
    title: "ASO and Meta Ads Synergy",
    description: "How to align ASO and Meta Ads strategies for maximum impact",
    author: "Vahe Bagdasar",
    authorHandle: "@vahebagdasar",
    type: "twitter",
    category: "iOS & ASO"
  },

  // Tools & Resources
  {
    url: "https://apparencekit.dev/flutter-meta-ads-course/",
    title: "Flutter Meta Ads Course",
    description: "Complete course on implementing Meta Ads in Flutter apps",
    type: "website",
    category: "Tools & Resources"
  },
  {
    url: "https://www.quickads.ai/",
    title: "QuickAds AI - Creative Generation",
    description: "AI-powered tool for generating Meta Ads creatives",
    type: "website",
    category: "Tools & Resources"
  },

  // Expert Insights
  {
    url: "https://www.youtube.com/watch?v=aHQN8ZRR8TA",
    title: "Meta Ads Strategy Deep Dive",
    description: "Comprehensive video guide on Meta Ads strategies",
    type: "youtube",
    category: "Expert Insights"
  },
  {
    url: "https://www.youtube.com/watch?v=mdqvLXm48aE",
    title: "Advanced Meta Ads Techniques",
    description: "Advanced techniques for Meta Ads optimization",
    type: "youtube",
    category: "Expert Insights"
  },
  {
    url: "https://www.swiftjectivec.com/three-key-takeaways-from-my-deep-dish-swift-talk-on-indie-marketing/",
    title: "Indie App Marketing Insights",
    description: "Key takeaways for independent app developers marketing",
    type: "website",
    category: "Expert Insights"
  },
  {
    url: "https://x.com/codyschneiderxx/status/1869523674979782691",
    title: "Marketing Psychology Principles",
    description: "Core psychology principles for effective ad creative",
    author: "Cody Schneider",
    authorHandle: "@codyschneiderxx",
    type: "twitter",
    category: "Expert Insights"
  },

  // Technical Implementation
  {
    url: "https://x.com/peterczepiga/status/1892546482114384143",
    title: "Meta Pixel Implementation",
    description: "Technical guide to Meta Pixel setup and optimization",
    author: "Peter Czepiga",
    authorHandle: "@peterczepiga",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://x.com/rom1trs/status/1892929919006470486",
    title: "Conversion API Setup",
    description: "How to implement and optimize Meta Conversion API",
    author: "Rom1trs",
    authorHandle: "@rom1trs",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://x.com/nico_jeannen/status/1891832968941068610",
    title: "Attribution & Tracking Setup",
    description: "Complete guide to attribution and tracking setup",
    author: "Nico Jeannen",
    authorHandle: "@nico_jeannen",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://x.com/MobileAppBro/status/1874097503198437412",
    title: "Mobile App Event Tracking",
    description: "Setting up proper event tracking for mobile apps",
    author: "Mobile App Bro",
    authorHandle: "@MobileAppBro",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://x.com/peterczepiga/status/1872674000754671951",
    title: "iOS 17 Tracking Solutions",
    description: "Tracking solutions and workarounds for iOS 17",
    author: "Peter Czepiga",
    authorHandle: "@peterczepiga",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://x.com/LordofAds/status/1868008571394547737",
    title: "Advanced Attribution Models",
    description: "Understanding and implementing advanced attribution models",
    author: "Lord of Ads",
    authorHandle: "@LordofAds",
    type: "twitter",
    category: "Technical Implementation"
  },
  {
    url: "https://www.linkedin.com/posts/davidvargasmontiel_wanna-launch-an-ab-test-in-ios-but-dont-activity-7273289818699149314-bfOY",
    title: "iOS A/B Testing for Meta Ads",
    description: "How to set up A/B testing for iOS apps with Meta Ads",
    author: "David Vargas Montiel",
    type: "linkedin",
    category: "Technical Implementation"
  }
];

export default function MetaAdsMarketingResources() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Creative Strategy': return <Lightbulb className="h-5 w-5" />;
      case 'Campaign Optimization': return <Target className="h-5 w-5" />;
      case 'Case Studies': return <Target className="h-5 w-5" />;
      case 'iOS & ASO': return <Target className="h-5 w-5" />;
      case 'Tools & Resources': return <Wrench className="h-5 w-5" />;
      case 'Expert Insights': return <User className="h-5 w-5" />;
      case 'Technical Implementation': return <Target className="h-5 w-5" />;
      default: return <Target className="h-5 w-5" />;
    }
  };

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-background text-foreground font-sans">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              href="/knowledge"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Knowledge Base
            </Link>
          </div>

          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <header className="not-prose mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                January 9, 2025
                <span>•</span>
                <span>10 min read</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Meta Ads Marketing Resources: The Complete Knowledge Base for Mobile App Founders
              </h1>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4" />
                <span>Curated by Mobile Founders Community</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A comprehensive collection of Meta Ads strategies, case studies, tools, and insights from top mobile marketing experts and practitioners. Everything you need to master Meta advertising for your mobile app.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What You&apos;ll Find</h3>
                    <p className="text-muted-foreground text-sm">
                      This knowledge base contains {resources.length} carefully curated resources covering creative strategy, campaign optimization, case studies, iOS integration, tools, and technical implementation guides from industry experts.
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className="space-y-12">
              {categories.map((category) => {
                const categoryResources = resources.filter(r => r.category === category);
                
                return (
                  <section key={category}>
                    <div className="flex items-center gap-3 mb-6">
                      {getCategoryIcon(category)}
                      <h2 className="text-2xl font-semibold text-foreground">{category}</h2>
                      <span className="text-sm text-muted-foreground">({categoryResources.length} resources)</span>
                    </div>
                    
                    <div className="space-y-4">
                      {categoryResources.map((resource, index) => {
                        const getPlatformIcon = () => {
                          switch (resource.type) {
                            case 'twitter': return <Twitter className="h-4 w-4 text-blue-500" />;
                            case 'linkedin': return <Linkedin className="h-4 w-4 text-blue-700" />;
                            case 'youtube': return <Youtube className="h-4 w-4 text-red-600" />;
                            case 'reddit': return <MessageSquare className="h-4 w-4 text-orange-600" />;
                            default: return <Globe className="h-4 w-4 text-muted-foreground" />;
                          }
                        };

                        return (
                          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                            <div className="flex-shrink-0 mt-1">
                              {getPlatformIcon()}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-foreground hover:text-primary">
                                  <a 
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                  >
                                    {resource.title}
                                  </a>
                                </h3>
                                <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                              </div>
                              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                                {resource.description}
                              </p>
                              {resource.author && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <User className="h-3 w-3" />
                                  <span>
                                    {resource.authorHandle ? (
                                      <a 
                                        href={`https://twitter.com/${resource.authorHandle.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary hover:underline"
                                      >
                                        {resource.authorHandle}
                                      </a>
                                    ) : resource.author}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

            <section className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-semibold text-foreground mb-4">About This Knowledge Base</h2>
              <p className="text-base leading-relaxed">
                This comprehensive collection of Meta Ads marketing resources has been carefully compiled and curated by members of the Mobile Founders community. 
                Each resource represents tested strategies, real insights, and proven techniques from practitioners actively working with Meta advertising for mobile apps.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}