import { motion } from "framer-motion";

// Variants for staggered scroll animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Philosophy() {
  return (
    <section className="w-full min-h-[80vh] bg-white text-neutral-900 flex flex-col justify-center px-6 md:px-20 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is in view
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        {/* Left Side: Large Statement Typography */}
        <div className="md:col-span-7">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafted for <br />
            <span className="italic text-neutral-500">the modern</span>{" "}
            sanctuary.
          </motion.h2>
        </div>

        {/* Right Side: Supporting Text & Line */}
        <div className="md:col-span-5 flex flex-col items-start">
          <motion.div
            variants={itemVariants}
            className="w-16 h-[1px] bg-neutral-900 mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed mb-8"
          >
            We believe that the spaces you interact with daily should be
            masterpieces of engineering and design. Our European-crafted
            fixtures bridge the gap between architectural art and utilitarian
            function.
          </motion.p>

          {/* <motion.div variants={itemVariants}>
            <a href="/about" className="inline-block border-b border-neutral-900 pb-1 text-sm uppercase tracking-widest hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              Read Our Story
            </a>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}
