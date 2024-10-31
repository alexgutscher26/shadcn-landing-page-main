import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic Tracker",
    popular: 0,
    price: 0,
    description:
      "Perfect for individuals just starting to track their income streams.",
    buttonText: "Start Free",
    benefitList: [
      "Track up to 2 income sources",
      "Basic income analytics",
      "Monthly reports",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    title: "Pro Tracker",
    popular: 1,
    price: 9.99,
    description:
      "Ideal for freelancers and professionals with multiple income streams.",
    buttonText: "Start Pro Trial",
    benefitList: [
      "Unlimited income sources",
      "Advanced analytics & forecasting",
      "Tax categorization",
      "Custom report builder",
      "Priority support",
    ],
  },
  {
    title: "Business",
    popular: 0,
    price: 24.99,
    description:
      "For business owners and teams managing complex income structures.",
    buttonText: "Contact Sales",
    benefitList: [
      "Multiple user accounts",
      "Team collaboration tools",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing Plans
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Track Your Income Growth
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the perfect plan to manage your income streams and achieve your financial goals.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>

      <div className="mt-12 text-center text-muted-foreground">
        <p>All plans include: 
          <span className="mx-1">256-bit encryption</span> •
          <span className="mx-1">Cloud backup</span> •
          <span className="mx-1">Mobile app access</span>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;