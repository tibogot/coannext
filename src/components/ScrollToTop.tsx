"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export const ScrollToTop = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Scroll to a negative position to ensure we reach the absolute top
      // This accounts for any viewport height issues or gaps
      lenis.scrollTo(-100, { immediate: true });

      // Then immediately scroll to 0 to ensure we're at the very top
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: true });
      }, 10);
    }
  }, [pathname, lenis]);

  return null;
};
