"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Useful Links: Curated Mobile Marketing Resources",
  "description": "A comprehensive collection of mobile marketing resources, presentations, podcasts, and case studies covering subscriptions, ASA, iOS 14, and industry trends.",
  "image": "https://mobile-founders.com/useful-links.jpg",
  "author": {
    "@type": "Person",
    "name": "Thomas BCN",
    "url": "https://twitter.com/Thomasbcn"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mobile Founders",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mobile-founders.com/logo.png"
    }
  },
  "datePublished": "2025-09-11T00:00:00.000Z",
  "dateModified": "2025-09-11T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://mobile-founders.com/knowledge/useful-links"
  },
  "keywords": "mobile marketing, ASA, subscriptions, iOS 14, ATT, SKAdNetwork, app marketing resources",
  "articleSection": "Mobile Marketing Resources",
  "wordCount": 1500
};

const resourceCategories = {
  "Subscriptions": [
    {
      title: "Subclub Office Hours: Price Testing & Experiments",
      url: "#",
      description: "Event recording"
    },
    {
      title: "MGS: Subscription Apps RAMA, from Acquisition to Revenue",
      url: "#",
      description: "Slides on-demand"
    }
  ],
  "Apple Search Ads (ASA)": [
    {
      title: "Searchads.com: ASA, What to Expect in 2021",
      url: "https://bit.ly/3tzVawq"
    }
  ],
  "iOS 14 / ATT / SKAdNetwork": [
    {
      title: "AGS: The Aftermath of the Apocalypse",
      url: "#",
      description: "Conference presentation"
    },
    {
      title: "MDM: Why Doesn't Google Have to Show ATT?",
      url: "https://bit.ly/3bzXrQf"
    }
  ],
  "2021 Trends": [
    {
      title: "Incrmntl & Vungle: 2021 & Beyond",
      url: "https://bit.ly/2MKnb3Q"
    },
    {
      title: "MDM 2021 Predictions",
      url: "https://bit.ly/36CL3gA"
    },
    {
      title: "Appfollow: The State of Mobile 2020, Forecast for 2021",
      url: "https://bit.ly/3tosZQP"
    },
    {
      title: "ASODesk: 7 Mobile App Marketing Trends in 2021",
      url: "https://bit.ly/36FCWQp"
    }
  ],
  "Various": [
    {
      title: "StoreMaven Mobile Growth & Pancakes",
      url: "http://bit.ly/2OY1ZI8"
    },
    {
      title: "GrowthHouse: How to Avoid 30% Fees by Admiral Media",
      url: "#",
      description: "Conference presentation"
    },
    {
      title: "WHAT the Data?! #13: Data Culture for Startup",
      url: "https://bit.ly/2YDO9wa"
    },
    {
      title: "Appsflyer/Batch: Optimiser l'Engagement en Temps de Crise",
      url: "https://bit.ly/3oJnZmv"
    }
  ],
  "Selected Publications (2017-2023)": [
    {
      title: "MobileDevMemo - 2020 Predictions for Mobile Marketing",
      url: "https://bit.ly/34hzR4M"
    },
    {
      title: "SplitMetrics - #AppGrowthTalks",
      url: "https://bit.ly/2CkDlf2"
    },
    {
      title: "MobileUserAcquisitionShow - The Mysterious LAT, and How to Tame It",
      url: "https://bit.ly/360qB7B"
    },
    {
      title: "Singular - ASO, Subscriptions, Tool Stack & the Duopoly",
      url: "https://bit.ly/31RdfIJ"
    },
    
};

export default function UsefulLinks() {
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
                September 11, 2025
                <span>•</span>
                <span>Resource Collection</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Useful Links: Curated Mobile Marketing Resources
              </h1>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4" />
                <span>Curated by </span>
                <a 
                  href="https://twitter.com/Thomasbcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Thomas BCN
                </a>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A comprehensive collection of mobile marketing resources covering subscriptions, Apple Search Ads, iOS 14 changes, industry trends, and expert insights. These resources represent years of Thomas BCN&apos;s work in mobile marketing, including presentations, publications, and case studies from 2017-2023.
              </p>
            </header>

            <div className="space-y-12">
              {Object.entries(resourceCategories).map(([category, links]) => (
                <section key={category} className="not-prose">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-2">
                    {category}
                  </h2>
                  
                  <div className="grid gap-3">
                    {links.map((link, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                        <ExternalLink className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-foreground leading-tight">
                                {link.url === "#" ? (
                                  <span className="text-muted-foreground">{link.title}</span>
                                ) : (
                                  <a 
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary hover:underline"
                                  >
                                    {link.title}
                                  </a>
                                )}
                              </h3>
                              {'description' in link && link.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  {link.description}
                                </p>
                              )}
                            </div>
                            {link.url !== "#" && (
                              <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded flex-shrink-0">
                                {link.url.includes('bit.ly') ? 'bit.ly' : 
                                 link.url.includes('apple.co') ? 'apple.co' : 
                                 new URL(link.url).hostname}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 pt-8 border-t not-prose">
              <h2 className="text-2xl font-semibold text-foreground mb-4">About This Collection</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                This curated collection represents years of mobile marketing expertise from Thomas BCN, covering key topics from subscription monetization to iOS privacy changes. 
                The resources span his presentations, publications, podcasts, and case studies that have shaped mobile marketing strategies from 2017 to 2023.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}