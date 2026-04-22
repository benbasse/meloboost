import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

const podcastImage = "/images/podcast-studio.jpg";
const videoImage = "/images/video-production.jpg";
const seminarImage = "/images/seminar.jpg";
const filmImage = "/images/film-production.jpg";
const interviewImage = "/images/interview.jpg";
const writingImage = "/images/writing.jpg";
const promoImage = "/images/promo.jpg";
const studioImage = "/images/studio-session.jpg";

const categories = ["Tous", "Podcast", "Vidéo", "Séminaire", "Court-métrage", "Interview"];

const projects = [
  {
    id: 1,
    title: "MindFlow Podcast",
    category: "Podcast",
    impact: "+150K écoutes",
    image: podcastImage,
    type: "audio",
    size: "large",
  },
  {
    id: 2,
    title: "Brand Vision 2024",
    category: "Vidéo",
    impact: "+500K vues",
    image: videoImage,
    type: "video",
    size: "small",
  },
  {
    id: 3,
    title: "Summit Africa 2024",
    category: "Séminaire",
    impact: "2000+ participants",
    image: seminarImage,
    type: "video",
    size: "small",
  },
  {
    id: 4,
    title: "Racines — Court-métrage",
    category: "Court-métrage",
    impact: "Sélectionné 3 festivals",
    image: filmImage,
    type: "video",
    size: "large",
  },
  {
    id: 5,
    title: "Dialogue avec l'Avenir",
    category: "Interview",
    impact: "+80K vues",
    image: interviewImage,
    type: "video",
    size: "small",
  },
  {
    id: 6,
    title: "Stratégie Digitale — Blog",
    category: "Vidéo",
    impact: "+200K lectures",
    image: writingImage,
    type: "content",
    size: "small",
  },
  {
    id: 7,
    title: "Launch Campaign — TechStart",
    category: "Vidéo",
    impact: "×3 conversions",
    image: promoImage,
    type: "video",
    size: "large",
  },
  {
    id: 8,
    title: "Studio Sessions Vol.1",
    category: "Podcast",
    impact: "+90K streams",
    image: studioImage,
    type: "audio",
    size: "small",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-[#06060F] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#68C5DC]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#2B4B9B]/10 border border-[#2B4B9B]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68C5DC]" />
            <span className="text-[#93D7E8]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nos Réalisations
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
            Des projets qui{" "}
            <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
              parlent d'eux-mêmes
            </span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: "1.7" }}
          >
            Découvrez une sélection de nos meilleures productions à travers différents formats.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] text-white shadow-[0_0_20px_rgba(43,75,155,0.4)]"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.85rem" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden ${
                  project.size === "large"
                    ? "col-span-2 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060F] via-[#06060F]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}
                >
                  {project.category}
                </div>

                {/* Play button for videos */}
                {project.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div
                    className="text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: project.size === "large" ? "1.1rem" : "0.9rem" }}
                  >
                    {project.title}
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="bg-gradient-to-r from-[#68C5DC] to-[#2B4B9B] bg-clip-text text-transparent"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem" }}
                    >
                      {project.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
