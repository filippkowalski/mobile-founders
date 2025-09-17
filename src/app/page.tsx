import { Smartphone, Users, BookOpen, TrendingUp, MessageSquare, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/30" />
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <header className="text-center">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              A Slack community for mobile founders, developers, and entrepreneurs building 
              mobile apps and products. Share technical insights, discuss growth strategies, 
              get feedback on your projects, and connect with others in the mobile ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/join">
                <Button size="lg" className="text-base font-medium px-8 py-3 h-auto">
                  [JOIN_COMMUNITY]
                </Button>
              </Link>
              <Link href="/knowledge">
                <Button variant="outline" size="lg" className="text-base font-medium px-8 py-3 h-auto">
                  [EXPLORE_KNOWLEDGE]
                </Button>
              </Link>
            </div>
          </header>
        </section>

        {/* What We Discuss Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">What We Discuss</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real conversations from mobile founders sharing their experiences, challenges, and wins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Growth & Marketing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meta Ads strategies, ASO optimization, viral marketing tactics, and user acquisition insights from practitioners spending $10K+ monthly
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Technical Deep Dives</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  App architecture, performance optimization, push notifications, paywalls implementation, and mobile development best practices
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Monetization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Subscription strategies, pricing experiments, revenue optimization, and lessons from apps generating $100K+ ARR
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Community Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get feedback on your ideas, troubleshoot issues, find co-founders, and connect with like-minded builders
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                    <BookOpen className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg">Industry Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Apple/Google policy changes, market trends, competitive analysis, and insider knowledge from seasoned mobile entrepreneurs
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg">
                    <Users className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg">Case Studies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real stories of app launches, pivots, failures, and successes from founders who&apos;ve been through it all
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Stats */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Join 500+ Mobile Founders</h2>
            <p className="text-muted-foreground">
              Active community of builders, makers, and entrepreneurs in the mobile space
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Daily Messages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$10M+</div>
              <div className="text-muted-foreground">Combined Revenue</div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Preview */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Learn from the Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access curated insights, strategies, and lessons learned from mobile founders and industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Meta Ads Budget Strategy</CardTitle>
                <CardDescription>
                  Expert insights from practitioners spending $10K+ monthly on Meta Ads campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">12 min read • September 2025</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">ASO Screenshot Testing</CardTitle>
                <CardDescription>
                  Why 90% of screenshot A/B tests fail and when they actually work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">8 min read • August 2024</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/knowledge">
              <Button variant="outline" className="inline-flex items-center gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-12 border">
            <h2 className="text-3xl font-semibold mb-4">Ready to Join the Community?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with mobile founders, share your experiences, and learn from others building successful mobile products. 
              Our community requires 20 👍 reactions for approval to ensure quality discussions.
            </p>
            <Link href="/join">
              <Button size="lg" className="text-base font-medium px-8 py-3 h-auto">
                Apply to Join Mobile Founders
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
