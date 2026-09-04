import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import osloImg from "../assets/oslo-bath.jpg";
import milanImg from "../assets/milan-sink.jpg";
import viennaImg from "../assets/vienna-wc.jpg";
import lyonImg from "../assets/lyon-sink.jpg";
import berlinImg from "../assets/berlin-tap.jpg";
import zurichImg from "../assets/zurich-shower.jpg";

// Re-using the same catalog data. In a real app, you would import this from a lib/data.ts file.
const productCatalog = [
  {
    id: "oslo-bath",
    category: "Freestanding Bathtubs",
    name: "The 'Oslo' Matte Stone Bath",
    price: "€ 4,200",
    image: osloImg,
    description:
      "Cast from our signature stone composite for unparalleled heat retention. The Oslo bath offers a deep, ergonomic soak inspired by Nordic minimalist architecture. Hand-finished to a velvety matte texture.",
    specs: {
      material: "Matte Stone Composite",
      dimensions: "1700 x 800 x 550 mm",
      weight: "125 kg",
    },
  },
  {
    id: "milan-sink",
    category: "Luxury Washbasins",
    name: "The 'Milan' Ceramic Vessel",
    price: "€ 850",
    image: milanImg,
    description:
      "Ultra-thin edges crafted from high-fired European porcelain. The Milan vessel sink floats effortlessly on your vanity, providing a striking focal point with flawless functionality.",
    specs: {
      material: "High-Fired Porcelain",
      dimensions: "450 x 450 x 120 mm",
      weight: "12 kg",
    },
  },
  {
    id: "vienna-wc",
    category: "Smart Toilets",
    name: "The 'Vienna' Intelligent WC",
    price: "€ 3,100",
    image: viennaImg,
    description:
      "Touchless technology meets minimalist architectural design. Features include an integrated heated seat, customizable bidet cleansing, and a self-cleaning ceramic glaze.",
    specs: {
      material: "Vitreous China / UF",
      dimensions: "680 x 400 x 480 mm",
      weight: "45 kg",
    },
  },
  {
    id: "lyon-sink",
    category: "Kitchen Sinks",
    name: "The 'Lyon' Fireclay Farmhouse",
    price: "€ 1,200",
    image: lyonImg,
    description:
      "Hand-poured fireclay resistant to chipping, staining, and heat. The Lyon brings timeless European countryside elegance into the modern culinary space.",
    specs: {
      material: "Solid Fireclay",
      dimensions: "800 x 500 x 250 mm",
      weight: "40 kg",
    },
  },
  {
    id: "berlin-tap",
    category: "Kitchen Faucets",
    name: "The 'Berlin' Sensor Tap",
    price: "€ 650",
    image: berlinImg,
    description:
      "Brushed solid brass featuring an invisible motion sensor. Designed for professional-grade kitchens, offering seamless pull-down functionality and zero-touch operation to prevent cross-contamination.",
    specs: {
      material: "Solid Brass (PVD)",
      dimensions: "450mm height, 220mm reach",
      weight: "3.5 kg",
    },
  },
  {
    id: "zurich-shower",
    category: "Shower Systems",
    name: "The 'Zurich' Thermostatic Column",
    price: "€ 1,850",
    image: zurichImg,
    description:
      "Precision temperature control combined with an oversized rainfall overhead shower and concealed hand wand. Engineered in Switzerland for the ultimate spa-like daily routine.",
    specs: {
      material: "Brushed Gunmetal Steel",
      dimensions: "1200mm height, 300mm head",
      weight: "8.5 kg",
    },
  },
];

// Framer Motion variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productCatalog.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-light">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col lg:flex-row">
      {/* Left Side: Sticky Image */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen lg:sticky top-0 overflow-hidden relative">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Subtle dark gradient at top so the transparent navbar remains visible */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10" />
          <img
            loading="lazy"
            decoding="async"
            src={product.image}
            alt={product.name}
            className="transform-gpu backface-hidden w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right Side: Scrollable Details */}
      <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-24 py-16 lg:py-32 flex flex-col justify-center min-h-screen">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={16} /> Back to Catalog
        </Link>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={slideUp}
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4"
          >
            {product.category}
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {product.name}
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-xl md:text-2xl font-medium tracking-wide mb-10"
          >
            {product.price}
          </motion.p>

          <motion.div
            variants={slideUp}
            className="w-full h-[1px] bg-neutral-200 mb-10"
          />

          <motion.p
            variants={slideUp}
            className="text-neutral-600 text-lg font-light leading-relaxed mb-12"
          >
            {product.description}
          </motion.p>

          {/* Specifications Table */}
          <motion.div variants={slideUp} className="mb-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-900 mb-6 font-semibold">
              Specifications
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-light text-neutral-600">
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>Material</span>
                <span className="text-neutral-900">
                  {product.specs.material}
                </span>
              </li>
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>Dimensions</span>
                <span className="text-neutral-900">
                  {product.specs.dimensions}
                </span>
              </li>
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>Weight</span>
                <span className="text-neutral-900">{product.specs.weight}</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={slideUp}>
            <button className="w-full group relative px-8 py-5 bg-neutral-900 text-white text-sm uppercase tracking-widest overflow-hidden transition-all text-center block">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Request a Quote
              </span>
              <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
