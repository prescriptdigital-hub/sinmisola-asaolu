"use client";

import { useEffect, useRef, useState } from "react";

// Fades and lifts content into view as it enters the viewport.
// Wrap any block: <Reveal delay={120}> ... </Reveal>
export default function Reveal({ children, delay = 0, as = "div", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
