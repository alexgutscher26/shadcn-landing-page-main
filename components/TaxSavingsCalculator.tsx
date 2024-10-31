"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const TaxSavingsCalculator = () => {
  const [income, setIncome] = useState('');
  const [filingStatus, setFilingStatus] = useState('single');
  const [deductions, setDeductions] = useState({
    mortgage: '',
    charity: '',
    medical: '',
    retirement: '',
  });
  const [useStandardDeduction, setUseStandardDeduction] = useState(true);
  const [results, setResults] = useState(null);

  // Format number with commas
  const formatNumber = (num: { toString: () => string; }) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Remove commas and validate input
  const handleIncomeChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value.replace(/,/g, '');
    if (value === '' || /^\d*$/.test(value)) {
      setIncome(value === '' ? '' : formatNumber(value));
    }
  };

  const formatDeductionInput = (value: string) => {
    const numericValue = value.replace(/,/g, '');
    if (numericValue === '' || /^\d*$/.test(numericValue)) {
      return numericValue === '' ? '' : formatNumber(numericValue);
    }
    return value;
  };

  const handleDeductionChange = (field: string, value: string) => {
    setDeductions(prev => ({
      ...prev,
      [field]: formatDeductionInput(value)
    }));
  };

  const taxBrackets = {
    single: [
      { rate: 0.10, upTo: 11000 },
      { rate: 0.12, upTo: 44725 },
      { rate: 0.22, upTo: 95375 },
      { rate: 0.24, upTo: 182100 },
      { rate: 0.32, upTo: 231250 },
      { rate: 0.35, upTo: 578125 },
      { rate: 0.37, upTo: Infinity }
    ],
    married: [
      { rate: 0.10, upTo: 22000 },
      { rate: 0.12, upTo: 89450 },
      { rate: 0.22, upTo: 190750 },
      { rate: 0.24, upTo: 364200 },
      { rate: 0.32, upTo: 462500 },
      { rate: 0.35, upTo: 693750 },
      { rate: 0.37, upTo: Infinity }
    ]
  };

  const standardDeduction = {
    single: 14600,
    married: 29200,
  };

  const calculateTaxByBrackets = (taxableIncome: number, status: string) => {
    let remainingIncome = taxableIncome;
    let totalTax = 0;
    let previousBracketLimit = 0;

    for (const bracket of taxBrackets[status]) {
      const bracketIncome = Math.min(
        remainingIncome,
        bracket.upTo - previousBracketLimit
      );
      
      if (bracketIncome > 0) {
        totalTax += bracketIncome * bracket.rate;
        remainingIncome -= bracketIncome;
      }
      
      previousBracketLimit = bracket.upTo;
      
      if (remainingIncome <= 0) break;
    }

    return totalTax;
  };

  const calculateSavings = () => {
    const incomeValue = parseFloat(income.replace(/,/g, '')) || 0;
    if (incomeValue <= 0) return;

    let totalDeductions = 0;
    if (useStandardDeduction) {
      totalDeductions = standardDeduction[filingStatus];
    } else {
      totalDeductions = Object.values(deductions).reduce(
        (sum, val) => sum + (parseFloat(val.replace(/,/g, '')) || 0),
        0
      );
    }

    const taxableIncome = Math.max(0, incomeValue - totalDeductions);
    const taxWithDeductions = calculateTaxByBrackets(taxableIncome, filingStatus);
    const taxWithoutDeductions = calculateTaxByBrackets(incomeValue, filingStatus);
    const savings = taxWithoutDeductions - taxWithDeductions;

    setResults({
      grossIncome: incomeValue,
      totalDeductions,
      taxableIncome,
      taxWithDeductions,
      taxWithoutDeductions,
      savings,
      effectiveTaxRate: (taxWithDeductions / incomeValue * 100).toFixed(1)
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Advanced Tax Savings Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="income">Annual Income ($)</Label>
              <Input
                id="income"
                type="text"
                value={income}
                onChange={handleIncomeChange}
                placeholder="Enter your annual income"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Filing Status</Label>
              <Select value={filingStatus} onValueChange={setFilingStatus}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select filing status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married Filing Jointly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              checked={useStandardDeduction}
              onCheckedChange={setUseStandardDeduction}
            />
            <Label>Use Standard Deduction (${standardDeduction[filingStatus].toLocaleString()})</Label>
          </div>

          {!useStandardDeduction && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mortgage">Mortgage Interest ($)</Label>
                <Input
                  id="mortgage"
                  type="text"
                  value={deductions.mortgage}
                  onChange={(e) => handleDeductionChange('mortgage', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="charity">Charitable Contributions ($)</Label>
                <Input
                  id="charity"
                  type="text"
                  value={deductions.charity}
                  onChange={(e) => handleDeductionChange('charity', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="medical">Medical Expenses ($)</Label>
                <Input
                  id="medical"
                  type="text"
                  value={deductions.medical}
                  onChange={(e) => handleDeductionChange('medical', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="retirement">Retirement Contributions ($)</Label>
                <Input
                  id="retirement"
                  type="text"
                  value={deductions.retirement}
                  onChange={(e) => handleDeductionChange('retirement', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          )}

          <Button onClick={calculateSavings} className="w-full">Calculate Tax Savings</Button>

          {results && (
            <div className="space-y-4">
              <Alert>
                <AlertDescription>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Gross Income:</div>
                    <div className="text-right">${results.grossIncome.toLocaleString()}</div>
                    <div>Total Deductions:</div>
                    <div className="text-right">${results.totalDeductions.toLocaleString()}</div>
                    <div>Taxable Income:</div>
                    <div className="text-right">${results.taxableIncome.toLocaleString()}</div>
                    <div>Tax Without Deductions:</div>
                    <div className="text-right">${Math.round(results.taxWithoutDeductions).toLocaleString()}</div>
                    <div>Tax With Deductions:</div>
                    <div className="text-right">${Math.round(results.taxWithDeductions).toLocaleString()}</div>
                    <div className="font-bold">Total Tax Savings:</div>
                    <div className="text-right font-bold">${Math.round(results.savings).toLocaleString()}</div>
                    <div>Effective Tax Rate:</div>
                    <div className="text-right">{results.effectiveTaxRate}%</div>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxSavingsCalculator;