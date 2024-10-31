import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Users, Target } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <div className="flex gap-4 justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
                <Target className="w-8 h-8 text-primary" />
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <DiscordIcon />
                <div>
                  Join Our Financial
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Growth Community
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Connect with fellow income trackers, share success stories, and get tips from our community! 
              Discuss financial strategies, set group challenges, and celebrate milestones together. 💰✨
            </CardContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-2xl">
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Network with peers</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="w-6 h-6 mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Monthly challenges</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="w-6 h-6 mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Expert advice</p>
              </div>
            </div>

            <CardFooter className="flex flex-col gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="https://discord.com/" target="_blank">
                  Join Our Community
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Already 2,000+ members tracking and growing together
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};

export default CommunitySection;