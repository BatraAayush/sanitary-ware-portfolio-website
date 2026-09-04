import { motion } from "framer-motion";

export default function TnC() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pt-32 pb-32 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto pt-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6 text-center">
          Legal Info
        </p>
        <h1
          className="text-4xl md:text-6xl font-light tracking-tight mb-16 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Terms & <span className="italic text-neutral-500">Conditions</span>
        </h1>

        <div className="space-y-12 text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide uppercase text-sm">
              1. Introduction
            </h2>
            <p>
              These Terms and Conditions govern your use of the Aura Fixtures
              website and the purchase of our premium sanitary ware and kitchen
              fixtures. By accessing our platform, you agree to be bound by
              these terms. Our collections are crafted with the highest European
              standards, and we expect our community to engage with our platform
              respectfully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide uppercase text-sm">
              2. Orders & Specifications
            </h2>
            <p>
              Due to the bespoke nature of our craftsmanship, natural variations
              in stone, ceramic, and brass finishes may occur. These are not
              defects but signatures of authenticity. All dimensions and weights
              provided in our catalog are approximate and subject to a 2%
              manufacturing tolerance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide uppercase text-sm">
              3. Shipping & Liability
            </h2>
            <p>
              Aura Fixtures handles the global shipping of heavy, delicate items
              (such as freestanding stone bathtubs and ceramic washbasins). Upon
              delivery, the customer assumes responsibility for inspecting the
              crate before signing. Any damage must be reported within 24 hours
              of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide uppercase text-sm">
              4. Intellectual Property
            </h2>
            <p>
              All designs, photography, branding, and text on this website are
              the exclusive property of Aura Fixtures. Unauthorized
              reproduction, distribution, or mimicking of our digital presence
              or product designs will result in immediate legal action.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
