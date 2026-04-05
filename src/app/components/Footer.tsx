import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin, Facebook } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Processus", href: "#processus" },
  ],
  services: [
    { label: "Podcast", href: "#services" },
    { label: "Séminaire", href: "#services" },
    { label: "Interview", href: "#services" },
    { label: "Court-métrage", href: "#services" },
    { label: "Écriture de contenu", href: "#services" },
    { label: "Vidéo promotionnelle", href: "#services" },
  ],
  contact: [
    { icon: Mail, label: "Boubacardiouf425@gmail.com" },
    { icon: Phone, label: "+221 77 422 43 01" },
    { icon: MapPin, label: "Dakar, Sénégal" },
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  const { openModal } = useContactModal();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050509] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2B4B9B]/60 to-transparent" />
      {/* Additional subtle cyan accent at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#68C5DC]/30 to-transparent" style={{ top: "1px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav("#accueil")} className="flex items-center gap-2 mb-6 group">
              <img
                src="/images/logo_blanc.png"
                alt="Meloboost Logo"
                className="h-24 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </button>

            <p
              className="text-white/45 mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: "1.8" }}
            >
              Agence de création de contenu premium. Nous transformons vos idées en expériences audiovisuelles impactantes.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-[#68C5DC]/50 hover:bg-[#2B4B9B]/15 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/45 hover:text-white transition-colors duration-200 group flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem" }}
                  >
                    <span className="w-0 h-[1px] bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/45 hover:text-white transition-colors duration-200 group flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem" }}
                  >
                    <span className="w-0 h-[1px] bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2B4B9B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#68C5DC]" />
                    </div>
                    <span
                      className="text-white/45"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: "1.6" }}
                    >
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* CTA mini */}
            <button
              onClick={openModal}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#2B4B9B]/20 to-[#68C5DC]/20 border border-[#2B4B9B]/20 text-white/70 hover:text-white hover:border-[#68C5DC]/40 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
            >
              Demander un devis →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.8rem" }}
          >
            © {new Date().getFullYear()} Meloboost. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            {["Mentions légales", "Politique de confidentialité", "CGV"].map((item) => (
              <button
                key={item}
                className="text-white/25 hover:text-white/50 transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.8rem" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
