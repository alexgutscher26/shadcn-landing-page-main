import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ArrowUpRight, LineChart, Tags, Receipt, Bell } from 'lucide-react';

export const PresentExpenseTracking = () => {
  return (
    <section className="container py-24 sm:py-32 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Every Expense with Ease
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Our powerful expense tracking tools help you stay on top of your spending and make informed financial decisions.
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
                <Icon name="LineChart" size={24} className="mr-2 text-primary" color={''} />
                Spending Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              Visualize your spending patterns with interactive charts and graphs
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Tags" size={24} className="mr-2 text-primary" color={''} />
                Custom Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              Organize expenses with customizable categories and tags
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Receipt" size={24} className="mr-2 text-primary" color={''} />
                Receipt Scanning
              </CardTitle>
            </CardHeader>
            <CardContent>
              Easily capture and digitize receipts for accurate record-keeping
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Bell" size={24} className="mr-2 text-primary" color={''} />
                Budget Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              Set spending limits and receive notifications to stay on budget
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground mb-4">
          Join thousands of users who have taken control of their expenses
        </p>
        <Button variant="outline" size="lg">
          View Success Stories
        </Button>
      </div>
    </section>
  );
};