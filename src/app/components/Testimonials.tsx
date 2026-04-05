import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aminata Koné",
    role: "CEO, Innovate Africa",
    rating: 5,
    text:
      "Meloboost a complètement transformé notre présence en ligne. La qualité de leur production vidéo est exceptionnelle et les résultats ont dépassé toutes nos attentes. Notre taux d'engagement a triplé !",
    image: "/images/podcast-recording.jpg",
    color: "#2B4B9B",
  },
  {
    id: 2,
    name: "Kwame Asante",
    role: "Fondateur, Digital Hub",
    rating: 5,
    text:
      "Notre podcast lancé avec Meloboost a atteint 100K écoutes en seulement 3 mois. L'équipe est professionnelle, créative et toujours à l'écoute. Je recommande sans hésitation !",
    image: "/images/interview.jpg",
    color: "#4A8FD4",
  },
  {
    id: 3,
    name: "Fatou Diallo",
    role: "Directrice Marketing, BrandX",
    rating: 5,
    text:
      "La campagne de vidéos promotionnelles réalisée par Meloboost a généré un ROI de ×4. Leur approche stratégique et leur sens du détail font toute la différence.",
    image: "/images/studio-session.jpg",
    color: "#68C5DC",
  },
  {
    id: 4,
    name: "Chidi Okonkwo",
    role: "Directeur Général, TechStartup",
    rating: 5,
    text:
      "Meloboost a capté l'essence de notre événement annuel avec une précision remarquable. Le montage final était d'une qualité cinématographique que nous n'espérions pas !",
    image: "/images/podcast-set.jpg",
    color: "#3D76C8",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#68C5DC] fill-[#68C5DC]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section id="temoignages" className="py-32 bg-[#06060F] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#2B4B9B]/12 to-[#68C5DC]/12 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#2B4B9B]/10 border border-[#2B4B9B]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68C5DC]" />
            <span className="text-[#93D7E8]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Témoignages
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
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
              nos clients
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
                className="relative p-10 md:p-14 rounded-3xl bg-[#0D0D1A] border border-white/5"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-10 right-10 h-[1px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${testimonial.color}80, transparent)` }}
                />

                {/* Quote icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                  style={{ background: `${testimonial.color}20` }}
                >
                  <Quote className="w-6 h-6" style={{ color: testimonial.color }} />
                </div>

                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Text */}
                <p
                  className="text-white/80 my-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 border-white/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.color}, transparent)`,
                      }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1rem" }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-white/50"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.85rem" }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
