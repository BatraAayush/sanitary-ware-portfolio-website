import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import osloImg from "../assets/oslo-bath.webp";
import milanImg from "../assets/milan-sink.webp";
import viennaImg from "../assets/vienna-wc.webp";
import lyonImg from "../assets/lyon-sink.webp";
import berlinImg from "../assets/berlin-tap.webp";
import zurichImg from "../assets/zurich-shower.webp";

// Hardcoded product database for the assignment
export const productCatalog = [
  {
    id: "oslo-bath",
    category: "Freestanding Bathtubs",
    name: "The 'Oslo' Matte Stone Bath",
    price: "€ 4,200",
    image: osloImg,
    description:
      "Cast from our signature stone composite for unparalleled heat retention.",
  },
  {
    id: "milan-sink",
    category: "Luxury Washbasins",
    name: "The 'Milan' Ceramic Vessel",
    price: "€ 850",
    image: milanImg,
    description: "Ultra-thin edges crafted from high-fired European porcelain.",
  },
  {
    id: "vienna-wc",
    category: "Smart Toilets",
    name: "The 'Vienna' Intelligent WC",
    price: "€ 3,100",
    image: viennaImg,
    description: "Touchless technology meets minimalist architectural design.",
  },
  {
    id: "lyon-sink",
    category: "Kitchen Sinks",
    name: "The 'Lyon' Fireclay Farmhouse",
    price: "€ 1,200",
    image: lyonImg,
    description:
      "Hand-poured fireclay resistant to chipping, staining, and heat.",
  },
  {
    id: "berlin-tap",
    category: "Kitchen Faucets",
    name: "The 'Berlin' Sensor Tap",
    price: "€ 650",
    image: berlinImg,
    description: "Brushed solid brass featuring an invisible motion sensor.",
  },
  {
    id: "zurich-shower",
    category: "Shower Systems",
    name: "The 'Zurich' Thermostatic Column",
    price: "€ 1,850",
    image: zurichImg,
    description:
      "Precision temperature control combined with an oversized rainfall head.",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 px-4 md:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-24 md:mb-40 pt-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Full Catalog
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Complete <br />{" "}
          <span className="italic text-neutral-500">Collection</span>
        </h1>
      </motion.div>

      {/* Staggered Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
          {productCatalog.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // Pushes every even item down on desktop to create the staggered masonry effect
              // className={index % 2 !== 0 ? "md:mt-32" : ""}
            >
              <Link to={`/products/${product.id}`} className="group block">
                {/* Image Container with Overflow Hidden for the Zoom Effect */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 mb-8">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={product.image}
                    alt={product.name}
                    className="transform-gpu backface-hidden w-full h-full object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                {/* Product Metadata */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                      {product.category}
                    </p>
                    <h2
                      className="text-2xl md:text-3xl font-light text-neutral-900 group-hover:text-neutral-500 transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-sm font-medium tracking-wide">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
