import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © 2024 Acme Inc. All rights reserved.
        </div>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </NavLink>
          <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </NavLink>
          <NavLink to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;