import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Acme Inc. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center space-x-4 text-sm font-medium text-muted-foreground">
          <NavLink to="/privacy" className="hover:underline">
            Privacy Policy
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact Us
          </NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;