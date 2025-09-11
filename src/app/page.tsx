import { Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/30" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

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
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            A Slack community for mobile founders, developers, and entrepreneurs building mobile apps and products.
            Share technical insights, discuss growth strategies, get feedback on your projects, and connect with others
            in the mobile ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </div>
    </div>
  );
}
