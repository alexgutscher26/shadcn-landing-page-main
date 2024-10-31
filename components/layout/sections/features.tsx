import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "LineChart",
    title: "Income Analytics",
    description:
      "Visualize your earning patterns with beautiful charts and get insights into your income trends over time.",
  },
  {
    icon: "Wallet",
    title: "Multiple Income Streams",
    description:
      "Track earnings from different sources - salary, freelance work, investments, and side hustles all in one place.",
  },
  {
    icon: "Bell",
    title: "Smart Notifications",
    description:
      "Get alerts for payment deposits, upcoming invoices, and achieve your income goals with personalized notifications.",
  },
  {
    icon: "FileSpreadsheet",
    title: "Easy Tax Reporting",
    description:
      "Generate income reports for tax season effortlessly. Track deductions and categorize earnings automatically.",
  },
  {
    icon: "Target",
    title: "Goal Setting",
    description:
      "Set monthly and yearly income targets, track your progress, and celebrate when you hit your financial milestones.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Access",
    description:
      "Check your income stats anywhere with our mobile-friendly dashboard. Add earnings and view reports on the go.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Smart Income Tracking Made Simple
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Take control of your finances with powerful tools that help you understand,
        track, and grow your income. Perfect for freelancers, employees, and side hustlers.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;