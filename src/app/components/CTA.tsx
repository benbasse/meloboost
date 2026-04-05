import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const abstractImage = "https://images.unsplash.com/photo-1771873680097-7506773a2b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBncmFkaWVudCUyMGRpZ2l0YWwlMjBhcnQlMjBwdXJwbGUlMjBvcmFuZ2V8ZW58MXx8fHwxNzc1MDg1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function CTA() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={abstractImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#06060F]/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4B9B]/30 via-transparent to-[#68C5DC]/25" />
      </div>

      {/* Animated accent orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#2B4B9B]/25 blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-[#68C5DC]/20 blur-[80px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]"
          />
          <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            Prêt à démarrer votre projet ?
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}
        >
          Prêt à donner vie à{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#2B4B9B] via-[#4A8FD4] to-[#68C5DC] bg-clip-text text-transparent">
            votre projet ?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-white/55 max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: "1.8",
          }}
        >
          Parlons de votre vision. Notre équipe est prête à vous accompagner de l'idée 
          à la production pour créer du contenu qui fait la différence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openModal}
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white overflow-hidden shadow-[0_0_40px_rgba(43,75,155,0.35)] hover:shadow-[0_0_60px_rgba(104,197,220,0.4)] transition-shadow duration-500"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#68C5DC] to-[#2B4B9B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Demander un devis</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => {
              window.location.href = "mailto:Boubacardiouf425@gmail.com";
            }}
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
          >
            <MessageCircle className="w-5 h-5" />
            Nous contacter
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {[
            { label: "Réponse sous 24h" },
            { label: "Devis gratuit" },
            { label: "Satisfaction garantie" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.85rem" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
