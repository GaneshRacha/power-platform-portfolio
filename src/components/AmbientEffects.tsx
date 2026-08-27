"use client";

import { useEffect } from "react";

export function AmbientEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(1, Math.max(0, progress))}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    const observeReveals = (rootNode: ParentNode = document) => {
      rootNode.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    };
    observeReveals();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          if (node.matches("[data-reveal]")) observer.observe(node);
          observeReveals(node);
        }
      }));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="cosmic-space" aria-hidden="true">
        <div className="cosmic-star-layer cosmic-stars-c" />
        <div className="cosmic-star-layer cosmic-stars-b" />
        <div className="cosmic-star-layer cosmic-stars-a" />
        <div className="cosmic-nebula cosmic-nebula-one" />
        <div className="cosmic-nebula cosmic-nebula-two" />
        <div className="cosmic-shooting-star" />
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-aurora" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
