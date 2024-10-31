import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How secure is my financial data?",
    answer: "Your financial data is protected with bank-level 256-bit encryption. We use secure cloud storage and never share your personal information with third parties. All data transfers are encrypted, and we regularly perform security audits to ensure your information stays safe.",
    value: "item-1",
  },
  {
    question: "Can I connect multiple income sources?",
    answer: "Yes! Our Basic plan allows you to track up to 2 income sources, while our Pro and Business plans support unlimited income sources. You can track regular salary, freelance income, investments, side hustles, and more - all in one dashboard.",
    value: "item-2",
  },
  {
    question: "How does the tax reporting feature work?",
    answer: "Our tax reporting feature automatically categorizes your income according to common tax categories. You can generate yearly summaries, export data for your accountant, and track deductible expenses. Pro users get additional features like custom categories and detailed tax reports.",
    value: "item-3",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes! Our mobile app is available for both iOS and Android devices. You can track income, view reports, and set up notifications on the go. All data syncs automatically between your devices, so you're always up to date.",
    value: "item-4",
  },
  {
    question: "Can I export my data to other formats?",
    answer: "Absolutely! You can export your data to various formats including PDF, CSV, and Excel. This makes it easy to share reports with your accountant, create backups, or use your data in other financial tools. Pro and Business users get access to additional export options and API integration.",
    value: "item-5",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Basic users get email support and access to our help center. Pro users receive priority support with faster response times. Business users get a dedicated account manager and phone support. All users have access to our community forum and video tutorials.",
    value: "item-6",
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Common Questions
        </h2>

        <p className="text-muted-foreground text-xl">
          Get quick answers to questions about our income tracking platform
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Still have questions?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;