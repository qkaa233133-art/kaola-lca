"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SpecularButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const PROXIMITY = 250;

export default function SpecularButton({
  href,
  children,
  className = "",
}: SpecularButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function updateShine(event: PointerEvent) {
      if (event.pointerType && event.pointerType !== "mouse") return;

      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const distanceX = Math.max(
        rect.left - event.clientX,
        0,
        event.clientX - rect.right,
      );
      const distanceY = Math.max(
        rect.top - event.clientY,
        0,
        event.clientY - rect.bottom,
      );
      const distance = Math.hypot(distanceX, distanceY);
      const visibility = Math.max(0, 1 - distance / PROXIMITY);

      button.style.setProperty(
        "--specular-x",
        `${event.clientX - rect.left}px`,
      );
      button.style.setProperty(
        "--specular-y",
        `${event.clientY - rect.top}px`,
      );
      button.style.setProperty("--specular-opacity", visibility.toFixed(3));
    }

    function clearShine() {
      buttonRef.current?.style.setProperty("--specular-opacity", "0");
    }

    window.addEventListener("pointermove", updateShine, { passive: true });
    window.addEventListener("blur", clearShine);

    return () => {
      window.removeEventListener("pointermove", updateShine);
      window.removeEventListener("blur", clearShine);
    };
  }, []);

  return (
    <a
      className={`specular-button ${className}`.trim()}
      ref={buttonRef}
      href={href}
    >
      <span className="specular-button-content">{children}</span>
    </a>
  );
}
