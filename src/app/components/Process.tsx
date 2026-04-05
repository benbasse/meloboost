import { motion } from "motion/react";
import { Search, Layout, Clapperboard, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse du besoin",
    description:
      "Nous prenons le temps de comprendre votre marque, vos objectifs, votre cible et votre budget pour poser des bases solides.",
    color: "#2B4B9B",
  },
  {
    number: "02",
    icon: Layout,
    title: "Stratégie de contenu",
    description:
      "Notre équipe élabore une stratégie créative sur-mesure avec un planning éditorial, des scripts et un brief de production.",
    color: "#3D76C8",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Production",
    description:
      "Nous donnons vie à votre projet avec un matériel professionnel et une équipe expérimentée pour un rendu premium.",
    color: "#57ABE0",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Diffusion",
    description:
      "Livraison des fichiers finaux et accompagnement dans la diffusion sur vos plateformes pour maximiser l'impact.",
    color: "#68C5DC",
  },
];

export function Process() {
  return (
    <section id="processus" className="py-32 bg-[#080812] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#2B4B9B]/12 to-transparent blur-[80px]" />
      </div>

      {/* Grid dots background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
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
              Notre Processus
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
            Comment nous{" "}
            <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
              travaillons
            </span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: "1.7" }}
          >
            Un processus simple, transparent et efficace pour garantir des résultats à la hauteur de vos ambitions.
          </p>
        </motion.div>

        {/* Steps - Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connection line */}
          <div className="relative flex items-start justify-between mb-0">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#2B4B9B] via-[#4A8FD4] to-[#68C5DC] opacity-30" />
              {/* Animated progress */}
              <motion.div
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-[#2B4B9B] via-[#4A8FD4] to-[#68C5DC]"
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center w-[22%]"
                >
                  {/* Step circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      border: `2px solid ${step.color}50`,
                      boxShadow: `0 0 30px ${step.color}30`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        color: step.color,
                      }}
                    >
                      ÉTAPE {step.number}
                    </div>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-white/50"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.85rem",
                        lineHeight: "1.7",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps - Mobile vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-5"
              >
                {/* Left side */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      border: `2px solid ${step.color}50`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="w-[2px] flex-1 mt-3"
                      style={{ background: `linear-gradient(${step.color}, ${steps[index + 1].color})`, minHeight: "40px" }}
                    />
                  )}
                </div>

                {/* Right side */}
                <div className="pb-6">
                  <div
                    className="mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", color: step.color }}
                  >
                    ÉTAPE {step.number}
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: "1.7" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
