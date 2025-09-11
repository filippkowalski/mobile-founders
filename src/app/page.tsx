"use client";

import { useState } from "react";
import { Smartphone, BookOpen } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      introduction: formData.get('introduction') as string,
      email: formData.get('email') as string,
      socialHandle: formData.get('socialHandle') as string,
      portfolio: formData.get('portfolio') as string,
    };

    // Auto-wrap Twitter handles with URLs for Slack
    const formatSocialHandle = (handle: string) => {
      if (!handle) return handle;
      
      // Check if it's already a URL
      if (handle.startsWith('http://') || handle.startsWith('https://')) {
        return handle;
      }
      
      // Check if it looks like a Twitter handle
      if (handle.startsWith('@') || handle.match(/^[a-zA-Z0-9_]+$/)) {
        const cleanHandle = handle.replace('@', '');
        return `https://twitter.com/${cleanHandle}`;
      }
      
      return handle;
    };

    try {
      // Use a CORS-enabled proxy service to post to Slack
      const slackMessage = {
        text: '📱 New Mobile Founders Application',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '📱 *New Mobile Founders Application*'
            }
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Name:* ${data.name}`
              },
              {
                type: 'mrkdwn',
                text: `*Email:* ${data.email}`
              },
              {
                type: 'mrkdwn',
                text: `*Social:* ${formatSocialHandle(data.socialHandle)}`
              },
              {
                type: 'mrkdwn',
                text: `*Portfolio:* ${data.portfolio || 'Not provided'}`
              }
            ]
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Introduction:*\n${data.introduction}`
            }
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: '👍 React with 20 thumbs up to approve this application'
              }
            ]
          }
        ]
      };

      const response = await fetch(`https://corsproxy.io/?${process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch {
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/30" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <nav className="flex justify-center mb-8">
          <Link 
            href="/knowledge"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted/50 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            [KNOWLEDGE_BASE]
          </Link>
        </nav>

        <header className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-md border border-border">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              [MOBILE_FOUNDERS]
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Created by <a href="https://twitter.com/filippkowalski" target="_blank" rel="noopener noreferrer" className="text-foreground underline-offset-4 hover:underline transition-colors">@filippkowalski</a>
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A Slack community for mobile founders, developers, and entrepreneurs building mobile apps and products.
            Share technical insights, discuss growth strategies, get feedback on your projects, and connect with others
            in the mobile ecosystem.
          </p>
        </header>


        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border shadow-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-semibold mb-6 tracking-tight">[JOIN_REQUEST]</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                Tell us about your background, what you&apos;re building, and how you&apos;ll contribute to the community.
                <br />
                <span className="text-muted-foreground mt-4 block text-sm">
                  We encourage active participation and knowledge sharing among members.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-md border border-border flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">[APPLICATION_SENT]</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Your application has been posted to our community channel for review.
                    <br />
                    The team will evaluate your background and contribution potential.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll receive an invite if the community approves your application.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium text-foreground">
                    [YOUR_NAME]
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className=""
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="introduction" className="text-base font-medium text-foreground">
                    [BACKGROUND_INFO]
                  </Label>
                  <Textarea
                    id="introduction"
                    name="introduction"
                    placeholder="Tell us about your background, current mobile projects, and how you plan to contribute to the Mobile Founders community..."
                    className="min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium text-foreground">
                    [EMAIL_ADDRESS]
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className=""
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll use this to send you an invitation if approved.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="socialHandle" className="text-base font-medium text-foreground">
                    [SOCIAL_HANDLE]
                  </Label>
                  <Input
                    id="socialHandle"
                    name="socialHandle"
                    type="text"
                    placeholder="@yourtwitter or linkedin.com/in/yourname"
                    className=""
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Your Twitter or LinkedIn profile for community verification.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-base font-medium text-foreground">
                    [PORTFOLIO/APPS] <span className="text-muted-foreground text-sm font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://your-website.com, https://apps.apple.com/app/..., or https://play.google.com/store/apps/..."
                    className=""
                  />
                  <p className="text-sm text-muted-foreground">
                    Your website, portfolio, or app store links to showcase your work.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-medium"
                >
                  {isSubmitting ? '[SUBMITTING...]' : '[SUBMIT_APPLICATION]'}
                </Button>
              </form>
              )}

              <div className="mt-8 p-6 bg-muted border rounded-md">
                <h3 className="font-semibold text-foreground mb-3 tracking-tight">[REVIEW_PROCESS]</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your application will be posted publicly to the #new-members Slack channel for community review.
                  <br />
                  If it receives 20 👍 reactions, you&apos;ll automatically receive an invite.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
