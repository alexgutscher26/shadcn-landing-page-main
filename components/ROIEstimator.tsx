"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

const formatCurrency = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

const parseFormattedNumber = (value: string) => {
  return value.replace(/,/g, '');
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded-lg shadow-lg">
        <p className="font-semibold">Year {label}</p>
        <p className="text-blue-600">
          Return: {formatCurrency(payload[0].value)}
        </p>
        {payload[1] && (
          <p className="text-green-600">
            Investment: {formatCurrency(payload[1].value)}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export const ROIEstimator = () => {
  const [investment, setInvestment] = useState('');
  const [revenue, setRevenue] = useState('');
  const [timeframe, setTimeframe] = useState('1');
  const [expenses, setExpenses] = useState('');
  const [roi, setROI] = useState<number | null>(null);
  const [annualROI, setAnnualROI] = useState<number | null>(null);
  const [paybackPeriod, setPaybackPeriod] = useState<number | null>(null);
  const [projectionData, setProjectionData] = useState<any[]>([]);
  
  const handleNumberInput = (value: string, setter: (value: string) => void) => {
    const numericValue = parseFormattedNumber(value);
    if (numericValue === '' || !isNaN(parseFloat(numericValue))) {
      const formatted = numericValue === '' ? '' : 
        new Intl.NumberFormat('en-US').format(parseFloat(numericValue));
      setter(formatted);
    }
  };

  const calculateMetrics = () => {
    const investmentValue = parseFloat(parseFormattedNumber(investment));
    const revenueValue = parseFloat(parseFormattedNumber(revenue));
    const expensesValue = parseFloat(parseFormattedNumber(expenses)) || 0;
    const timeframeValue = parseFloat(timeframe);
    
    if (isNaN(investmentValue) || isNaN(revenueValue) || isNaN(timeframeValue)) return;

    const netProfit = revenueValue - expensesValue;
    const gain = netProfit - investmentValue;
    const roiValue = (gain / investmentValue) * 100;
    setROI(Math.round(roiValue * 100) / 100);

    const annualRoiValue = (roiValue / timeframeValue);
    setAnnualROI(Math.round(annualRoiValue * 100) / 100);

    const paybackValue = investmentValue / (netProfit / timeframeValue);
    setPaybackPeriod(Math.round(paybackValue * 100) / 100);

    // Enhanced projection data
    const projectionYears = Math.max(5, Math.ceil(paybackValue));
    const data = [];
    for (let year = 0; year <= projectionYears; year++) {
      const cumulativeReturn = (netProfit / timeframeValue) * year - investmentValue;
      data.push({
        year,
        return: cumulativeReturn,
        investment: investmentValue,
        isBreakeven: Math.abs(cumulativeReturn) < netProfit / timeframeValue / 2
      });
    }
    setProjectionData(data);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>ROI Estimator</CardTitle>
        <CardDescription>Calculate and visualize your return on investment over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="investment" className="block text-sm font-medium mb-1">
                Initial Investment ($)
              </label>
              <Input
                id="investment"
                type="text"
                value={investment}
                onChange={(e) => handleNumberInput(e.target.value, setInvestment)}
                placeholder="Enter initial investment"
              />
            </div>
            <div>
              <label htmlFor="revenue" className="block text-sm font-medium mb-1">
                Expected Revenue ($)
              </label>
              <Input
                id="revenue"
                type="text"
                value={revenue}
                onChange={(e) => handleNumberInput(e.target.value, setRevenue)}
                placeholder="Enter expected revenue"
              />
            </div>
            <div>
              <label htmlFor="expenses" className="block text-sm font-medium mb-1">
                Operating Expenses ($)
              </label>
              <Input
                id="expenses"
                type="text"
                value={expenses}
                onChange={(e) => handleNumberInput(e.target.value, setExpenses)}
                placeholder="Enter operating expenses"
              />
            </div>
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium mb-1">
                Time Period (Years)
              </label>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year} {year === 1 ? 'Year' : 'Years'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={calculateMetrics} className="w-full">Calculate ROI</Button>

            {roi !== null && (
              <Alert>
                <AlertDescription>
                  <div className="space-y-2">
                    <p className="font-semibold">Total ROI: {formatNumber(roi)}%</p>
                    <p>Annual ROI: {formatNumber(annualROI)}%</p>
                    <p>Payback Period: {formatNumber(paybackPeriod)} years</p>
                    <p>Net Profit: {formatCurrency(parseFloat(parseFormattedNumber(revenue)) - (parseFloat(parseFormattedNumber(expenses)) || 0))}</p>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-4">
            {roi !== null && (
              <div className="h-[500px] -mx-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={projectionData}
                    margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'Years', position: 'bottom', offset: -10 }}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      label={{ 
                        value: 'Return on Investment', 
                        angle: -90, 
                        position: 'insideLeft',
                        offset: -20
                      }}
                      tickFormatter={(value) => formatCurrency(value)}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" height={36} />
                    <ReferenceLine 
                      y={0} 
                      stroke="#94a3b8"
                      strokeWidth={2}
                    />
                    {paybackPeriod && (
                      <ReferenceLine
                        x={paybackPeriod}
                        stroke="#059669"
                        strokeDasharray="3 3"
                        label={{
                          value: 'Break-even',
                          position: 'top',
                          fill: '#059669'
                        }}
                      />
                    )}
                    <Line 
                      name="Return"
                      type="monotone" 
                      dataKey="return" 
                      stroke="#2563eb"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      name="Initial Investment"
                      type="monotone" 
                      dataKey="investment" 
                      stroke="#22c55e"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ROIEstimator;