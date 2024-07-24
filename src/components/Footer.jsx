import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
            <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </NavLink>
            <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </NavLink>
            <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;