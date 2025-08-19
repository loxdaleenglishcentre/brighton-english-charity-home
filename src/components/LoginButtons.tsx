import { Button } from "@/components/ui/button";
import { LogIn, UserCheck } from "lucide-react";

const LoginButtons = () => {
  return (
    <div className="bg-gradient-to-br from-muted/20 via-background to-muted/10 py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-primary hover:bg-gradient-to-br hover:from-primary hover:to-primary/80 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-3"
          >
            <UserCheck className="w-5 h-5 mr-2" />
            Student Login
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-foreground hover:bg-gradient-to-br hover:from-accent hover:to-accent/80 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-3"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Agent Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginButtons;