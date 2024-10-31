"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, PiggyBank } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>
                <Calculator className="w-3 h-3 mr-1 inline" />
                New
              </Badge>
            </span>
            <span>Tax Planning Features Released!</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Take Control of Your
              <span className="text-transparent px-2 bg-gradient-to-r from-primary to-[#00A3FF] bg-clip-text">
                Financial Future
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Simplify your finances with automated income tracking, expense management, 
            and tax planning tools designed specifically for gig workers and freelancers.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Start Free Trial
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <PiggyBank className="mr-2 h-4 w-4" />
              See Pricing
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v8m0-8l4 4m-4-4l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12l3 3l6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Setup in minutes
            </div>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-card rounded-lg border border-t-2 border-secondary border-t-primary/30">
            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Income Overview</h3>
              <Image
                width={600}
                height={400}
                className="w-full rounded-lg"
                src="/api/placeholder/600/400"
                alt="Income dashboard"
              />
            </div>
            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Tax Estimates</h3>
              <Image
                width={600}
                height={400}
                className="w-full rounded-lg"
                src="/api/placeholder/600/400"
                alt="Tax dashboard"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};