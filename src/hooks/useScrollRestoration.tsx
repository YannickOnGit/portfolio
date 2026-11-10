// src/hooks/useScrollRestoration.ts
import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function useScrollRestoration(
  mainRef: RefObject<HTMLElement | null>,
): void {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return; // early return if ref is null

    const path = location.pathname;

    requestAnimationFrame(() => {
      if (
        navigationType === "POP" &&
        scrollPositions.current[path] !== undefined
      ) {
        el.scrollTop = scrollPositions.current[path];
      } else {
        el.scrollTo({
          top: 0,
          // behavior: navigationType === "PUSH" ? "smooth" : "auto",
        });
      }
    });

    return () => {
      scrollPositions.current[path] = el.scrollTop;
    };
  }, [location.pathname, navigationType, mainRef]);
}
