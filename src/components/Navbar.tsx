import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Awards", path: "/awards" },
    { name: "Join", path: "/join" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/rotary logo.png" alt="Rotary Club Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Social Media Links */}
            <div className="flex items-center gap-1 ml-2 mr-1">
              <a 
                href="https://www.facebook.com/profile.php?id=100079339462053" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/rotarycalcuttanewhorizons/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.youtube.com/@rotarycalcuttanewhorizons" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            
            <Link to="/donate">
              <Button variant="accent" size="sm" className="ml-1">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="accent" className="w-full">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
