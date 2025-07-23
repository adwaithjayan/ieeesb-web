// components/ScrollSections.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSections() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      const next = sections[i + 1];
      if (!next) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        })
        .to(
          section,
          {
            scale: 0.8,
            opacity: 0,
            ease: "power1.out",
          },
          0
        )
        .fromTo(
          next,
          {
            y: "100vh",
            opacity: 0,
          },
          {
            y: "0vh",
            opacity: 1,
            ease: "power1.out",
          },
          0
        );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const sectionStyle: React.CSSProperties = {};

  return (
    <div>
      {["Section A", "Section B", "Section C"].map((text, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el!)}
          style={{
            ...sectionStyle,
            backgroundColor: `hsl(${i * 60}, 70%, 50%)`,
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
