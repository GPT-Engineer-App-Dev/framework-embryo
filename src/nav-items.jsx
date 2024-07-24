import { Home, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";
import GenericPage from "./pages/GenericPage.jsx";

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
];