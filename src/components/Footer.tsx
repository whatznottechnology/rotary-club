import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import rotaryLogo from "@/assets/rotary-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={rotaryLogo} alt="Rotary Logo" className="h-10 w-10" />
              <h3 className="font-bold text-lg">Rotary Club</h3>
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
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@rotaryclub.org</span>
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
