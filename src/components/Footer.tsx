import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-8 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12 md:gap-0">
        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-2">
            Navigation
          </p>
          {["Home", "Products", "Contact", "Terms and Conditions"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.split(" ").join("-").toLowerCase()}`
                }
                className="text-xl md:text-2xl font-light hover:text-neutral-400 transition-colors w-fit relative group"
              >
                {item}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full" />
              </Link>
            ),
          )}
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col gap-4 md:text-right">
          <p className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-2">
            Connect
          </p>
          <a
            href="#"
            className="text-lg font-light hover:text-neutral-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-lg font-light hover:text-neutral-400 transition-colors"
          >
            Pinterest
          </a>
          <a
            href="mailto:studio@brand.com"
            className="text-lg font-light hover:text-neutral-400 transition-colors mt-4"
          >
            studio@brand.com
          </a>
        </div>
      </div>

      {/* Massive Brand Typography */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2
          className="text-[12vw] md:text-[8vw] leading-none tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          AURA<span className="italic text-neutral-500">.</span>
        </h2>
        <p className="text-neutral-600 text-sm">
          © {new Date().getFullYear()} Aura Fixtures 7. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
