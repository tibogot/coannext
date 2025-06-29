"use client";

import { useLenis } from "lenis/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const lenis = useLenis();

  return (
    <>
      <ScrollToTop />
      <Navigation lenis={lenis} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
