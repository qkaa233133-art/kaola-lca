"use client";

import { useEffect } from "react";

const revealGroups = [
  ".trust-strip > *",
  ".learning-system .section-heading > *",
  ".step-grid .step-card",
  ".course-panel-intro > *",
  ".course-panel-details .detail-header > *",
  ".course-panel-details .daily-title",
  ".course-panel-details .daily-study li",
  ".course-panel-details .course-disclaimer",
  ".advantages-section .section-heading > *",
  ".advantage-grid .advantage-card",
  ".audience-section .audience-card",
  ".teaching-section .teaching-copy > *",
  ".teaching-section .board-main",
  ".teaching-section .board-note",
  ".faq-section .faq-title > *",
  ".faq-section .faq-list details",
  ".contact-section .contact-copy > *",
  ".contact-section .wechat-card",
  ".contact-section .address-card",
  "footer > *",
];

export default function ScrollExperience() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealedElements = new Set<HTMLElement>();

    revealGroups.forEach((selector) => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(selector),
      );

      elements.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 85, 425)}ms`,
        );
        revealedElements.add(element);
      });
    });

    document.body.classList.add("scroll-reveal-ready");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealedElements.forEach((element) =>
        element.classList.add("is-visible"),
      );
      return () => {
        document.body.classList.remove("scroll-reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove("scroll-reveal-ready");
      revealedElements.forEach((element) => {
        element.classList.remove("reveal-item", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
