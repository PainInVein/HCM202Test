import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface LenisScrollProps {
  children: ReactNode;
}

export function LenisScroll({ children }: LenisScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Slightly more responsive than 0.1
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
