/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ArrowUpRight, Calculator, FileText, PieChart, Shield } from 'lucide-react';

export const ShowcaseTaxManagement = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Effortless Tax Management
        </h2>
        <p className="text-xl text-muted-foreground">
          Simplify your tax processes and stay compliant with our advanced features
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Calculator" size={24} className="mr-2 text-primary" color={''} />
              Tax Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            Accurately estimate your taxes based on your income and deductions
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="FileText" size={24} className="mr-2 text-primary" color={''} />
              Document Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            Securely store and organize all your tax-related documents in one place
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="PieChart" size={24} className="mr-2 text-primary" color={''} />
              Tax Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            Get visual breakdowns of your tax liabilities and potential savings
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Shield" size={24} className="mr-2 text-primary" color={''} />
              Compliance Checker
            </CardTitle>
          </CardHeader>
          <CardContent>
            Ensure you're meeting all tax regulations with our compliance tools
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">
          Explore Tax Features
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};