"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export const ScrollToTop = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Find the hero section and scroll to it instead of position 0
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = scrollTop + rect.top;
        lenis.scrollTo(targetPosition, { immediate: true });
      } else {
        // Fallback to position 0 if no hero section found
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, lenis]);

  return null;
};
