import { motion } from "motion/react";
import { Mic2, Users, MessageSquare, Film, PenTool, Video } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Podcast",
    description:
      "Production complète de podcasts : enregistrement, montage, identité sonore et distribution sur toutes les plateformes.",
    color: "#2B4B9B",
    delay: 0,
  },
  {
    icon: Users,
    title: "Séminaire",
    description:
      "Captation et production de vos événements, conférences et séminaires en présentiel ou en ligne.",
    color: "#3460B5",
    delay: 0.1,
  },
  {
    icon: MessageSquare,
    title: "Interview",
    description:
      "Réalisation d'interviews professionnelles avec cadrage soigné, éclairage et montage de qualité broadcast.",
    color: "#3D76C8",
    delay: 0.2,
  },
  {
    icon: Film,
    title: "Court-métrage",
    description:
      "Conception et production de courts-métrages narratifs, créatifs ou institutionnels avec un rendu cinématographique.",
    color: "#4A8FD4",
    delay: 0.3,
  },
  {
    icon: PenTool,
    title: "Écriture de contenu",
    description:
      "Rédaction de contenu stratégique : articles, scripts, copywriting, posts réseaux sociaux et contenus SEO.",
    color: "#57ABE0",
    delay: 0.4,
  },
  {
    icon: Video,
    title: "Vidéo promotionnelle",
    description:
      "Création de vidéos publicitaires, spots de marque et contenus promotionnels à fort impact visuel.",
    color: "#68C5DC",
    delay: 0.5,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080812]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#2B4B9B]/12 to-[#68C5DC]/12 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#68C5DC]/10 border border-[#68C5DC]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68C5DC]" />
            <span className="text-[#93D7E8]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nos Services
            </span>
          </div>

          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            Tout ce dont vous avez{" "}
            <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
              besoin
            </span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.7",
            }}
          >
            Des services de création de contenu premium pour propulser votre marque vers de nouveaux sommets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group relative"
              >
                <div
                  className="relative h-full p-8 rounded-2xl bg-[#0D0D1A] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_0_40px_rgba(43,75,155,0.15)]"
                >
                  {/* Hover gradient effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top left, ${service.color}15, transparent 60%)`,
                    }}
                  />

                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                    style={{ background: `${service.color}20` }}
                  >
                    <Icon
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.15rem",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/50"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="mt-6 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
                    style={{ color: service.color, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    En savoir plus
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
