import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bathroomParallelImage from "../assets/bathroom.webp";
import bathroomParallelImage2 from "../assets/bathroom-image-2.webp";

// Reusable Parallax Image Component
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef(null);

  // Track the scroll progress of this specific image container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Triggers when top of element hits bottom of viewport
  });

  // Map the scroll progress (0 to 1) to a Y-axis translation (-20% to 20%)
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden bg-neutral-100"
    >
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        // Image is 140% taller than container so it has room to move without revealing empty space
        className="absolute top-[-20%] left-0 w-full h-[140%] object-cover"
      />
    </div>
  );
};

export default function Materials() {
  return (
    <section className="w-full bg-white py-24 md:py-40">
      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 md:mb-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6"
        >
          Uncompromising Standards
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 max-w-4xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Materials forged by nature, refined by master artisans.
        </motion.h2>
      </div>

      {/* Material Block 1: Ceramic/Stone */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-0 max-w-[100vw] overflow-hidden mb-24 md:mb-40">
        <ParallaxImage src={bathroomParallelImage} alt="Matte Stone Detail" />
        <div className="px-8 md:px-20 lg:px-32">
          <h3
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tactile Matte Stone
          </h3>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            Our signature composite stone retains heat longer than standard
            acrylic, providing an unparalleled soaking experience. Hand-polished
            to a velvety matte finish, it is naturally resistant to scratching
            and discoloration.
          </p>
        </div>
      </div>

      {/* Material Block 2: Brushed Brass */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-0 max-w-[100vw] overflow-hidden">
        {/* Order reversed on desktop using order utilities */}
        <div className="px-8 md:px-20 lg:px-32 order-2 md:order-1">
          <h3
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Solid Brushed Brass
          </h3>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            Engineered for longevity. Our kitchen and bath fixtures are cast
            from lead-free solid brass and finished with advanced PVD coating,
            ensuring they will never tarnish, corrode, or lose their luster.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <ParallaxImage
            src={bathroomParallelImage2}
            alt="Brushed Brass Faucet Detail"
          />
        </div>
      </div>
    </section>
  );
}
