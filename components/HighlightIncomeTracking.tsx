import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ArrowUpRight, DollarSign, TrendingUp } from 'lucide-react';

export const HighlightIncomeTracking = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Your Income with Ease
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Our intuitive income tracking feature helps you stay on top of your finances effortlessly.
          </p>
          <Button size="lg">
            Start Tracking Now
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="DollarSign" className="mr-2 text-primary" color={''} size={0} />
                Income Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$12,345</p>
              <p className="text-muted-foreground">Total Income This Month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="TrendingUp" className="mr-2 text-primary" color={''} size={0} />
                Growth Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">15%</p>
              <p className="text-muted-foreground">Increase from Last Month</p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time income tracking</li>
                <li>Customizable income categories</li>
                <li>Visual reports and analytics</li>
                <li>Multi-currency support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};