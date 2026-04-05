import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, User, Phone, Briefcase, MessageSquare, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Podcast",
    "Vidéo promotionnelle",
    "Séminaire",
    "Court-métrage",
    "Interview",
    "Écriture de contenu",
    "Autre",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Créer le contenu de l'email
    const subject = `Demande de devis - ${formData.service}`;
    const body = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Service demandé: ${formData.service}

Message:
${formData.message}
    `.trim();

    // Ouvrir le client email
    window.location.href = `mailto:Boubacardiouf425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Fermer le modal
    onClose();

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl bg-[#0D0D1A] rounded-3xl border border-white/10 shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative p-8 border-b border-white/5">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2B4B9B]/60 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#68C5DC]/30 to-transparent" style={{ top: "1px" }} />

                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4B9B] to-[#68C5DC] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2
                      className="text-white"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.8rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Demander un devis
                    </h2>
                  </div>
                </div>

                <p
                  className="text-white/50"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24h.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-white/70 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                  >
                    <User className="w-4 h-4" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#68C5DC]/50 focus:bg-white/8 transition-all duration-200 outline-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-white/70 mb-2"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#68C5DC]/50 focus:bg-white/8 transition-all duration-200 outline-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-white/70 mb-2"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                    >
                      <Phone className="w-4 h-4" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#68C5DC]/50 focus:bg-white/8 transition-all duration-200 outline-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="flex items-center gap-2 text-white/70 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                  >
                    <Briefcase className="w-4 h-4" />
                    Service demandé
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#68C5DC]/50 focus:bg-white/8 transition-all duration-200 outline-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="" disabled>
                      Sélectionnez un service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#0D0D1A]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-white/70 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#68C5DC]/50 focus:bg-white/8 transition-all duration-200 outline-none resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Décrivez votre projet en quelques mots..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white overflow-hidden"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2B4B9B] to-[#68C5DC]" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#68C5DC] to-[#2B4B9B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">Envoyer la demande</span>
                  <Send className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p
                  className="text-center text-white/40 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Nous vous répondrons dans les 24 heures ouvrables
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
