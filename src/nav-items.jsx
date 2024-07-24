import { Home, FileText, Info, Mail, Shield } from "lucide-react";
import Index from "./pages/Index.jsx";
import GenericPage from "./pages/GenericPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Generic Page",
    to: "/generic",
    icon: <FileText className="h-4 w-4" />,
    page: <GenericPage />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutPage />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <ContactPage />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: <Shield className="h-4 w-4" />,
    page: <PrivacyPage />,
  },
];