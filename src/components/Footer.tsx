import { Link } from "react-router-dom";
import prismLogo from "@/assets/prism-logo-icon.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={prismLogo}
              alt="Prism Consulting.AI logo"
              className="w-8 h-8 object-contain brightness-0 invert"
            />
            <span className="font-bold text-base text-primary-foreground leading-tight">
              PRISM <span className="text-accent">CONSULTING.AI</span>
            </span>
          </div>

          {/* Links — use /#section so they work from ANY page (e.g. /blog) */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href="/#services"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#products"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#about"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#contact"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link
              to="/blog"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} Prism Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
