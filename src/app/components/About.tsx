import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const aboutImage = "/images/team.jpg";

const stats = [
  { value: "+50", label: "Projets réalisés", suffix: "" },
  { value: "+20", label: "Clients accompagnés", suffix: "" },
  { value: "+1M", label: "Vues générées", suffix: "" },
  { value: "100%", label: "Satisfaction client", suffix: "" },
];

const highlights = [
  "Experts en production de contenu digital",
  "Équipe créative passionnée et expérimentée",
  "Approche stratégique orientée résultats",
  "Solutions adaptées à chaque budget",
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-4"
    >
      <div
        className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "2.2rem",
          lineHeight: "1",
        }}
      >
        {stat.value}
      </div>
      <div
        className="text-white/50 mt-1"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.8rem" }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-32 bg-[#06060F] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B4B9B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#68C5DC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden w-full h-[600px]">
              <img
                src={aboutImage}
                alt="Équipe Meloboost"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', aboutImage);
                  e.currentTarget.style.backgroundColor = '#0e0ec8';
                }}
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060F]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#0D0D1A] border border-white/10 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4B9B] to-[#68C5DC] flex items-center justify-center">
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.2rem" }} className="text-white">✨</span>
                </div>
                <div>
                  <div className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                    Agence Premium
                  </div>
                  <div className="text-white/50" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                    Création de contenu
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#2B4B9B]/10 border border-[#2B4B9B]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68C5DC]" />
              <span className="text-[#93D7E8]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Qui sommes-nous
              </span>
            </div>

            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              Nous transformons vos{" "}
              <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
                idées en impact
              </span>
            </h2>

            <p
              className="text-white/60 mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
                lineHeight: "1.8",
              }}
            >
              Meloboost est une agence de création de contenu dédiée aux marques ambitieuses. 
              Nous concevons des expériences audiovisuelles et rédactionnelles qui captivent, 
              inspirent et convertissent votre audience cible.
            </p>

            <p
              className="text-white/50 mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "0.95rem",
                lineHeight: "1.8",
              }}
            >
              Notre équipe passionnée allie créativité, stratégie et technicité pour vous 
              offrir des productions de haute qualité qui reflètent l'essence de votre marque 
              et parlent directement à votre public.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-12">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#68C5DC] flex-shrink-0" />
                  <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.9rem" }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-6 rounded-2xl bg-white/3 border border-white/5">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
