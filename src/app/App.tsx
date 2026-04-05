import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Interviews } from "./components/Interviews";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { ContactModalProvider, useContactModal } from "./context/ContactModalContext";

function AppContent() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <>
      <div
        className="min-h-screen bg-[#06060F] text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Interviews />
          <Process />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <AppContent />
    </ContactModalProvider>
  );
}
