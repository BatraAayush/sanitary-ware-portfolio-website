import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
  // { title: "Terms and Conditions", path: "/terms-and-conditions" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Check if we are currently on the home page
  const isHome = location.pathname === "/";

  // If we aren't on the home page, force the dark/scrolled style immediately
  const shouldBeDark = !isHome || isScrolled;

  // Detect scroll to trigger the glassmorphism background on home page
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          shouldBeDark
            ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4 shadow-sm text-neutral-900"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-2xl tracking-tighter relative z-50"
            style={{ fontFamily: "'Playfair Display', serif" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            AURA
            <span
              className={shouldBeDark ? "text-neutral-400" : "text-white/60"}
            >
              .
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.15em] relative group transition-colors ${
                    isActive
                      ? shouldBeDark
                        ? "text-neutral-900"
                        : "text-white"
                      : shouldBeDark
                        ? "text-neutral-500 hover:text-neutral-900"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.title}
                  {/* Hover Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    } ${shouldBeDark ? "bg-neutral-900" : "bg-white"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu
                className={shouldBeDark ? "text-neutral-900" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" },
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.title}
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1 + 0.2 },
                },
                closed: { opacity: 0, y: 20 },
              }}
            >
              <Link
                to={link.path}
                className="text-4xl font-light text-neutral-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
