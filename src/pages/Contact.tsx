import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 pt-12">
        {/* Left Side: Contact Information */}
        <motion.div
          className="w-full md:w-1/2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={slideUp}
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6"
          >
            Inquiries
          </motion.p>
          <motion.h1
            variants={slideUp}
            className="text-5xl md:text-7xl font-light tracking-tight mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's create <br />
            <span className="italic text-neutral-500">together.</span>
          </motion.h1>

          <motion.div
            variants={slideUp}
            className="flex flex-col gap-8 text-lg font-light"
          >
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-2">
                Studio
              </h3>
              <p className="text-neutral-600">
                Via Montenapoleone 14
                <br />
                20121 Milano MI, Italy
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-2">
                Direct
              </h3>
              <p className="text-neutral-600">
                +39 02 1234 5678
                <br />
                studio@aurafixtures.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Minimalist Form */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 tracking-wide font-light">
                {error}
              </div>
            )}

            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto group relative px-12 py-5 bg-neutral-900 text-white text-sm uppercase tracking-widest overflow-hidden transition-all text-center mt-4 disabled:opacity-50"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative bg-white text-neutral-900 p-8 md:p-12 max-w-md w-full text-center shadow-2xl z-10 border border-neutral-100"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={28} />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">Success</p>
              <h2
                className="text-3xl font-light mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Inquiry Sent Successfully
              </h2>
              <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
                Thank you for reaching out. Our design consultants will review your specifications and contact you shortly.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-4 bg-neutral-900 text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}