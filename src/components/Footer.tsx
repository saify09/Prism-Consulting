const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">PC</span>
            </div>
            <span className="font-semibold text-lg">Prism Consulting</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href="#services"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#products"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/80 hover:text-accent transition-all duration-300 text-sm font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
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
