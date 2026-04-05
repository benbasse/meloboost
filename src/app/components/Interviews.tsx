import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";

const interviews = [
  {
    id: 1,
    title: "Interview 1",
    url: "https://youtu.be/8z7-U62YB-Q",
    embedUrl: "https://www.youtube.com/embed/8z7-U62YB-Q",
    thumbnail: "https://img.youtube.com/vi/8z7-U62YB-Q/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Interview 2",
    url: "https://youtu.be/yvDs2V55LQE",
    embedUrl: "https://www.youtube.com/embed/yvDs2V55LQE",
    thumbnail: "https://img.youtube.com/vi/yvDs2V55LQE/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Interview 3",
    url: "https://youtu.be/omQ7q1-yOfE",
    embedUrl: "https://www.youtube.com/embed/omQ7q1-yOfE",
    thumbnail: "https://img.youtube.com/vi/omQ7q1-yOfE/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Interview 4",
    url: "https://youtube.com/shorts/x9oX5va3f9k?si=uT96nBduwa8es5zh",
    embedUrl: "https://www.youtube.com/embed/x9oX5va3f9k",
    thumbnail: "https://img.youtube.com/vi/x9oX5va3f9k/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Interview 5",
    url: "https://youtube.com/shorts/GAeDVedFitM?si=QyTG66cTxoKYe9jQ",
    embedUrl: "https://www.youtube.com/embed/GAeDVedFitM",
    thumbnail: "https://img.youtube.com/vi/GAeDVedFitM/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Interview 6",
    url: "https://youtube.com/shorts/Zl9rwMo3FgM?si=WjM179zWQP4noNke",
    embedUrl: "https://www.youtube.com/embed/Zl9rwMo3FgM",
    thumbnail: "https://img.youtube.com/vi/Zl9rwMo3FgM/maxresdefault.jpg",
  },
];

export function Interviews() {
  return (
    <section id="interviews" className="py-32 bg-[#06060F] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#2B4B9B]/10 to-[#68C5DC]/10 blur-[100px] pointer-events-none" />

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
              Nos Interviews
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
            Découvrez nos{" "}
            <span className="bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC] bg-clip-text text-transparent">
              interviews exclusives
            </span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: "1.7" }}
          >
            Des conversations inspirantes avec des personnalités influentes.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#0D0D1A] border border-white/5 hover:border-white/10 transition-all duration-300">
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={interview.embedUrl}
                    title={interview.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {interview.title}
                    </h3>

                    <a
                      href={interview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#68C5DC]/50 hover:bg-[#2B4B9B]/15 transition-all duration-200"
                      aria-label="Voir sur YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <Play className="w-4 h-4 text-[#68C5DC]" />
                    <span
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Regarder sur YouTube
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
