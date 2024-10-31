import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "BarChart2",
    title: "Smart Income Tracking",
    description:
      "Automatically track and categorize earnings from multiple gig platforms and freelance clients. Get real-time insights into your income streams.",
  },
  {
    icon: "Calculator",
    title: "Tax Optimization",
    description:
      "Stay ahead of taxes with automatic quarterly estimates, expense tracking, and deduction recommendations tailored to gig workers.",
  },
  {
    icon: "PiggyBank",
    title: "Financial Planning",
    description:
      "Set income goals, track savings, and get personalized recommendations to build financial stability as a self-employed professional.",
  },
  {
    icon: "Receipt",
    title: "Expense Management",
    description:
      "Easily capture and categorize business expenses, track mileage, and generate professional reports for tax time.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why GigFlow</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Financial Command Center
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take control of your finances with tools designed specifically for gig workers
            and freelancers. Spend less time on bookkeeping and more time earning.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Icon
                name="Check"
                size={24}
                className="text-primary mr-2" color={""}              />
              <span>Real-time sync</span>
            </div>
            <div className="flex items-center">
              <Icon
                name="Check"
                size={24}
                className="text-primary mr-2" color={""}              />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center">
              <Icon
                name="Check"
                size={24}
                className="text-primary mr-2" color={""}              />
              <span>Auto categorization</span>
            </div>
            <div className="flex items-center">
              <Icon
                name="Check"
                size={24}
                className="text-primary mr-2" color={""}              />
              <span>Tax compliance</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/card border-t-2 hover:border-t-primary"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={24}
                      className="text-primary" color={""}                    />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/15 transition-all delay-75 group-hover/card:text-primary/20">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};