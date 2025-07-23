"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({
  end,
  duration = 2,
}: {
  end: number;
  duration: number;
}) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [showPlus, setShowPlus] = useState(false);

  useEffect(() => {
    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power1.out",
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.textContent = Math.floor(obj.val).toString();
            }
          },
          onComplete: () => {
            setShowPlus(true);
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, duration]);

  return (
    <div className="flex items-center justify-center min-w-[10ch]">
      <span
        className="font-semibold text-3xl tracking-normal leading-[130%]"
        ref={countRef}
      >
        0
      </span>
      {showPlus && (
        <span className="font-semibold text-3xl tracking-normal leading-[130%]">
          +
        </span>
      )}
    </div>
  );
}
