import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.avif";
import { useLenis } from "lenis/react";

// Animation variants for the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each element appearing
      delayChildren: 0.3,
    },
  },
};

// Animation variants for the text sliding up
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for a premium, smooth deceleration
    },
  },
};

export default function Hero() {
  const lenis = useLenis();

  const scrollToCollections = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#collections", { duration: 1.5 });
    } else {
      // Fallback if lenis isn't loaded
      document
        .getElementById("collections")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with subtle scale-in animation */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          loading="lazy"
          decoding="async"
          src={heroImage}
          alt="Premium Bathroom Interior"
          className="w-full h-full object-cover transform-gpu backface-hidden"
        />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 mt-16"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white mb-6 uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pure <span className="italic font-serif">Elegance</span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto font-light"
        >
          Redefining luxury in everyday spaces. Discover our curated collection
          of premium bath and kitchen fixtures.
        </motion.p>

        <motion.div variants={textVariants} className="mt-12">
          <a
            href="#collections"
            onClick={scrollToCollections}
            className="group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-widest overflow-hidden transition-all inline-block text-center cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Explore Collection
            </span>
            <div className="absolute inset-0 bg-neutral-900 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
