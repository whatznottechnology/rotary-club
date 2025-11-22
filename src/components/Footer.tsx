import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/rotary logo.png" alt="Rotary Logo" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              RID 3291; Club No. 223497
            </p>
            <p className="text-sm text-primary-foreground/80">
              Serving the community with dedication and commitment to making a positive impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/history" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Club Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>10 Deshbandhu Road, Central Park East, Jadavpur, Kolkata – 700032</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 8910430104</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>rotarycalcuttanewhorizons@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Meeting Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Meeting Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Every Friday</p>
                  <p>8:00 PM</p>
                  <p className="mt-1">Rotary Club House</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100079339462053" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/rotarycalcuttanewhorizons/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@rotarycalcuttanewhorizons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Rotary Club. All rights reserved. | Service Above Self
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
