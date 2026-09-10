import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Scroll standard window to top
    window.scrollTo(0, 0);

    // Scroll Lenis smoothly to the top
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2, // Adjust duration in seconds (higher = smoother/slower)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential easing
      });
    }
  }, [pathname, lenis]);

  return null;
}