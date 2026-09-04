import { motion } from "framer-motion";

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 px-4 md:px-8">
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
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <form
            className="flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 resize-none"
              />
            </div>

            <button className="w-full md:w-auto group relative px-12 py-5 bg-neutral-900 text-white text-sm uppercase tracking-widest overflow-hidden transition-all text-center mt-4">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Send Message
              </span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
