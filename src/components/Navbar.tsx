import { motion } from "motion/react";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Por qué Nosotros", href: "#por-que" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Equipo", href: "#equipo" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/80 backdrop-blur-lg border-b border-white/10 py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <BrainCircuit className="w-8 h-8 text-accent group-hover:text-gold transition-colors" />
          <span className="text-2xl font-display font-bold tracking-tight">
            Extrateg<span className="text-accent">IA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/524771290945?text=Hola%20ExtrategIA,%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-accent text-primary font-semibold hover:bg-gold hover:text-primary transition-all duration-300 glow-accent hover:glow-gold"
          >
            Agenda Asesoría
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/524771290945?text=Hola%20ExtrategIA,%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 rounded-full bg-accent text-primary font-semibold text-center hover:bg-gold transition-all duration-300"
          >
            Agenda Asesoría
          </a>
        </motion.div>
      )}
    </header>
  );
}
