"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 13;
const MIN_DISTANCE = 10;
const MAX_DISTANCE = 90;
const BASE_DURATION = 600;
const TIME_VARIANCE = 500;
const COLORS = ["#a91825", "#d66b73", "#b69664", "#f1ddd2"];
const CLICKABLE_SELECTOR =
  'a[href], button:not([disabled]), summary, [role="button"]';

export default function GooeyClickEffects() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function spawnBurst(event: MouseEvent) {
      if (reducedMotion.matches) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickable = target.closest(CLICKABLE_SELECTOR);
      if (!clickable || !layerRef.current) return;

      let originX = event.clientX;
      let originY = event.clientY;

      if (originX === 0 && originY === 0) {
        const rect = clickable.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
      }

      const burst = document.createElement("span");
      burst.className = "gooey-particle-burst";
      burst.style.left = `${originX}px`;
      burst.style.top = `${originY}px`;

      const core = document.createElement("i");
      core.className = "gooey-particle-core";
      burst.appendChild(core);

      let longestAnimation = 0;

      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        const particle = document.createElement("i");
        const baseAngle = (Math.PI * 2 * index) / PARTICLE_COUNT;
        const angle = baseAngle + (Math.random() - 0.5) * 0.45;
        const distance =
          MIN_DISTANCE + Math.random() * (MAX_DISTANCE - MIN_DISTANCE);
        const duration = BASE_DURATION + Math.random() * TIME_VARIANCE;
        const delay = Math.random() * 65;
        const size = 4 + Math.random() * 7;

        particle.className = "gooey-particle";
        particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
        particle.style.setProperty("--particle-size", `${size}px`);
        particle.style.setProperty(
          "--particle-color",
          COLORS[index % COLORS.length],
        );
        particle.style.setProperty("--particle-duration", `${duration}ms`);
        particle.style.setProperty("--particle-delay", `${delay}ms`);
        particle.style.setProperty(
          "--particle-scale",
          `${0.65 + Math.random() * 0.75}`,
        );

        longestAnimation = Math.max(longestAnimation, duration + delay);
        burst.appendChild(particle);
      }

      layerRef.current.appendChild(burst);
      window.setTimeout(() => burst.remove(), longestAnimation + 120);
    }

    document.addEventListener("click", spawnBurst, true);
    return () => document.removeEventListener("click", spawnBurst, true);
  }, []);

  return (
    <div
      className="gooey-effect-layer"
      ref={layerRef}
      aria-hidden="true"
    />
  );
}
