"use client";

import { useEffect, useRef } from "react";

export default function LaserFlowLayer() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = {
      x: window.innerWidth * 0.58,
      y: window.innerHeight * 0.35,
    };
    const current = { ...pointer };
    let frame = 0;

    function followPointer(event: PointerEvent) {
      if (event.pointerType && event.pointerType !== "mouse") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }

    function resetPointer(event: PointerEvent) {
      if (event.relatedTarget !== null) return;
      pointer.x = window.innerWidth * 0.58;
      pointer.y = window.innerHeight * 0.35;
    }

    function animate() {
      current.x += (pointer.x - current.x) * 0.075;
      current.y += (pointer.y - current.y) * 0.075;

      layerRef.current?.style.setProperty("--laser-x", `${current.x}px`);
      layerRef.current?.style.setProperty("--laser-y", `${current.y}px`);
      frame = window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", followPointer, { passive: true });
    window.addEventListener("pointerout", resetPointer);
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", followPointer);
      window.removeEventListener("pointerout", resetPointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="laser-flow-layer" ref={layerRef} aria-hidden="true">
      <span className="laser-flow-glow" />
      <i className="laser-wisp wisp-one" />
      <i className="laser-wisp wisp-two" />
      <i className="laser-wisp wisp-three" />
    </div>
  );
}
