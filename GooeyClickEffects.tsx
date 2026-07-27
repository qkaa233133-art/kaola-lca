"use client";

import { useEffect, useRef } from "react";

type GalaxyProps = {
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  starSpeed?: number;
  speed?: number;
};

type Star = {
  angle: number;
  radius: number;
  armOffset: number;
  depth: number;
  size: number;
  hue: number;
  twinkle: number;
};

export default function Galaxy({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1.4,
  glowIntensity = 0.3,
  saturation = 1,
  hueShift = 120,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.4,
  speed = 1,
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: 0, y: 0, active: false };
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let deviceScale = 1;
    let animationFrame = 0;
    let previousTime = performance.now();

    function createStars() {
      const count = Math.min(
        520,
        Math.max(150, Math.round((width * height * density) / 5200)),
      );

      stars = Array.from({ length: count }, (_, index) => {
        const radius = Math.pow(Math.random(), 0.72);
        return {
          angle: Math.random() * Math.PI * 2,
          radius,
          armOffset:
            ((index % 4) * Math.PI) / 2 + (Math.random() - 0.5) * 0.62,
          depth: 0.24 + Math.random() * 0.76,
          size: 0.45 + Math.random() * 1.8,
          hue: (hueShift + Math.random() * 155 - 35 + 360) % 360,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      deviceScale = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * deviceScale);
      canvas.height = Math.round(height * deviceScale);
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
      pointer.x = width / 2;
      pointer.y = height / 2;
      createStars();
    }

    function onPointerMove(event: PointerEvent) {
      if (!mouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    function draw(time: number) {
      const elapsed = Math.min(40, time - previousTime);
      previousTime = time;
      const motionScale = reducedMotion ? 0 : elapsed * 0.001 * speed;
      const centerX = width * 0.5;
      const centerY = height * 0.49;
      const shortSide = Math.min(width, height);

      context.clearRect(0, 0, width, height);

      const coreGlow = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        shortSide * 0.48,
      );
      coreGlow.addColorStop(0, "rgba(176, 33, 63, 0.10)");
      coreGlow.addColorStop(0.28, "rgba(63, 28, 92, 0.065)");
      coreGlow.addColorStop(1, "rgba(4, 3, 10, 0)");
      context.fillStyle = coreGlow;
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.angle +=
          motionScale *
          rotationSpeed *
          (0.12 + (1 - star.radius) * 0.9) *
          (0.8 + star.depth);
        star.depth += motionScale * starSpeed * 0.05;
        if (star.depth > 1) star.depth = 0.24;

        const spiral = star.angle + star.armOffset + star.radius * 5.8;
        const perspective = 0.45 + star.depth * 0.9;
        const radiusX = star.radius * width * 0.62 * perspective;
        const radiusY = star.radius * height * 0.42 * perspective;
        let x = centerX + Math.cos(spiral) * radiusX;
        let y = centerY + Math.sin(spiral) * radiusY;

        const autoPull = autoCenterRepulsion * 0.015;
        x += Math.cos(spiral) * autoPull * shortSide;
        y += Math.sin(spiral) * autoPull * shortSide;

        if (mouseRepulsion && pointer.active) {
          const deltaX = x - pointer.x;
          const deltaY = y - pointer.y;
          const distanceSquared = deltaX * deltaX + deltaY * deltaY;
          const influenceRadius = 155;

          if (
            distanceSquared > 0 &&
            distanceSquared < influenceRadius * influenceRadius
          ) {
            const distance = Math.sqrt(distanceSquared);
            const influence = 1 - distance / influenceRadius;
            const push = influence * influence * repulsionStrength * 17;
            x += (deltaX / distance) * push;
            y += (deltaY / distance) * push;
          }
        }

        if (x < -24 || x > width + 24 || y < -24 || y > height + 24) {
          return;
        }

        const twinkle =
          0.7 +
          Math.sin(time * 0.0018 + star.twinkle) *
            twinkleIntensity *
            0.55;
        const alpha = Math.min(0.94, (0.2 + star.depth * 0.72) * twinkle);
        const size = star.size * (0.58 + star.depth * 1.15);
        const hue = star.hue;
        const sat = Math.min(100, 42 + saturation * 42);

        if (size > 1.25) {
          context.save();
          context.shadowBlur = 7 + glowIntensity * 15;
          context.shadowColor = `hsla(${hue}, ${sat}%, 68%, ${alpha})`;
          context.fillStyle = `hsla(${hue}, ${sat}%, 78%, ${alpha})`;
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
          context.restore();
        } else {
          context.fillStyle = `hsla(${hue}, ${sat}%, 82%, ${alpha})`;
          context.fillRect(x, y, Math.max(0.7, size), Math.max(0.7, size));
        }

        if (star.depth > 0.88 && size > 1.2) {
          context.strokeStyle = `hsla(${hue}, ${sat}%, 72%, ${alpha * 0.42})`;
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(x - size * 5, y);
          context.lineTo(x + size * 5, y);
          context.moveTo(x, y - size * 5);
          context.lineTo(x, y + size * 5);
          context.stroke();
        }
      });

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    draw(performance.now());

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [
    autoCenterRepulsion,
    density,
    glowIntensity,
    hueShift,
    mouseInteraction,
    mouseRepulsion,
    repulsionStrength,
    rotationSpeed,
    saturation,
    speed,
    starSpeed,
    twinkleIntensity,
  ]);

  return (
    <canvas
      className="galaxy-canvas"
      ref={canvasRef}
      aria-hidden="true"
    />
  );
}
