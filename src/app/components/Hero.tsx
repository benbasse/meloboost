import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const heroImage = "/images/hero-background.jpg";

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Studio créatif Meloboost"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#06060F]/80" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4B9B]/35 via-transparent to-[#68C5DC]/25" />
      </div>

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2B4B9B]/25 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#68C5DC]/20 blur-[100px] pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] animate-pulse" />
          <span className="text-white/80" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Agence de Création de Contenu
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
          }}
        >
          Boostez votre image{" "}
          <br className="hidden sm:block" />
          avec du{" "}
          <span className="bg-gradient-to-r from-[#2B4B9B] via-[#4A8FD4] to-[#68C5DC] bg-clip-text text-transparent">
            contenu puissant
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.7",
          }}
        >
          Meloboost aide les marques, entrepreneurs et entreprises à se développer grâce 
          à du contenu stratégique, créatif et impactant — podcast, vidéo, séminaire et bien plus.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button
            onClick={() => handleNav("#contact")}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white overflow-hidden"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#68C5DC] to-[#2B4B9B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Demander un devis</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => handleNav("#portfolio")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] flex items-center justify-center">
              <Play className="w-3 h-3 text-white fill-white" />
            </div>
            Voir nos réalisations
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "+50", label: "Projets réalisés" },
            { value: "+20", label: "Clients accompagnés" },
            { value: "+1M", label: "Vues générées" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent mb-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/50"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.8rem" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => handleNav("#apropos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
