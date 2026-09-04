import { motion } from "framer-motion";
import osloImg from "../assets/oslo-bath.jpg";
import milanImg from "../assets/milan-sink.jpg";
import viennaImg from "../assets/vienna-wc.jpg";
import lyonImg from "../assets/lyon-sink.jpg";
import berlinImg from "../assets/berlin-tap.jpg";
import zurichImg from "../assets/zurich-shower.jpg";

// Hardcoded data based on your assignment brief
const categories = [
  {
    id: "oslo-bath", // Changed from 1 to match product detail slug
    title: "Freestanding Bathtubs",
    product: "The 'Oslo' Matte Stone Bath",
    image: osloImg, // Using local import    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    id: "milan-sink", // Changed from 2
    title: "Washbasins",
    product: "The 'Milan' Ceramic Vessel Sink",
    image: milanImg,
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: "vienna-wc", // Changed from 3
    title: "Smart Toilets",
    product: "The 'Vienna' Intelligent WC",
    image: viennaImg,
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: "lyon-sink", // Changed from 4
    title: "Kitchen Sinks",
    product: "The 'Lyon' Fireclay Farmhouse",
    image: lyonImg,
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: "berlin-tap", // Changed from 5
    title: "Kitchen Faucets",
    product: "The 'Berlin' Sensor Tap",
    image: berlinImg,
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: "zurich-shower",
    title: "Shower Systems",
    product: "The 'Zurich' Thermostatic Column",
    image: zurichImg,
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
];

// Stagger variants for the grid items
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Showcase() {
  return (
    <section
      id="collections"
      className="w-full bg-neutral-50 py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated Collections
          </h2>
          <a
            href="/products"
            className="hidden md:inline-block border-b border-neutral-900 pb-1 text-sm uppercase tracking-widest hover:text-neutral-500 hover:border-neutral-500 transition-colors"
          >
            View Entire Catalog
          </a>
        </motion.div>

        {/* The Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {categories.map((cat) => (
            <motion.a
              href={`/products/${cat.id}`}
              key={cat.id}
              variants={cardVariants}
              className={`group relative overflow-hidden block bg-neutral-200 ${cat.colSpan} ${cat.aspect}`}
            >
              {/* Image with zoom on hover */}
              <img
                loading="lazy"
                decoding="async"
                src={cat.image}
                alt={cat.product}
                className="transform-gpu backface-hidden absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80 transform translate-y-4 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-y-0">
                  {cat.title}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-light transform translate-y-4 transition-transform duration-700 delay-75 ease-[0.16,1,0.3,1] group-hover:translate-y-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {cat.product}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile button */}
        <div className="mt-12 text-center md:hidden">
          <a
            href="/products"
            className="inline-block border-b border-neutral-900 pb-1 text-sm uppercase tracking-widest"
          >
            View Entire Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
