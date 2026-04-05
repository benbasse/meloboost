import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060F]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_0_40px_rgba(43,75,155,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button onClick={() => handleNav("#accueil")} className="flex items-center gap-2 group">
            <img
              src="/images/logo_blanc.png"
              alt="Meloboost Logo"
              className="h-24 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={openModal}
              className="relative px-6 py-2.5 rounded-full text-white overflow-hidden group"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] transition-opacity duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#68C5DC] to-[#2B4B9B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Demander un devis</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#06060F]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-white/80 hover:text-white text-left py-2 border-b border-white/5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="mt-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] text-center"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
