"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSections({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    sectionsRef.current.forEach((section, i) => {
      const prev = sectionsRef.current[i - 1];
      const next = section;

      if (!prev || !next) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: next,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.fromTo(
        prev,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.9, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        next,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "<10%" // overlap the animations by 10% of the previous duration
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) sectionsRef.current[i] = el;
              }}
              style={{ minHeight: "100vh" }}
            >
              {child}
            </div>
          ))
        : children}
    </>
  );
}
