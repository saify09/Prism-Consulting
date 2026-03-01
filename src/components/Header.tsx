import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">PC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Prism Consulting</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-all duration-300 text-sm font-semibold relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-accent transition-all duration-300 text-sm font-semibold relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-all duration-300 text-sm font-semibold relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </button>
            <Link
              to="/blog"
              className="text-foreground hover:text-accent transition-all duration-300 text-sm font-semibold relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Button
              variant="default"
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile hamburger — always visible on white header */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-accent text-sm font-semibold py-2 border-b border-border/50 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-foreground hover:text-accent text-sm font-semibold py-2 border-b border-border/50 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-accent text-sm font-semibold py-2 border-b border-border/50 transition-colors"
            >
              About
            </button>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-left text-foreground hover:text-accent text-sm font-semibold py-2 border-b border-border/50 transition-colors"
            >
              Blog
            </Link>
            <Button
              variant="default"
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-1"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
