import { useRef, useCallback, useEffect, RefObject } from "react";

export const useScrollListener = (element: HTMLElement | Window | null, handleScroll: () => void, throttle = 250) => {
  const scrollingTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const listenToScroll = useCallback(() => {
    if (!element) {
      return;
    }

    element.removeEventListener("scroll", listenToScroll);

    if (scrollingTimer.current) {
      clearTimeout(scrollingTimer.current);
    }

    scrollingTimer.current = setTimeout(
      () => element.addEventListener("scroll", listenToScroll, { passive: true }),
      throttle
    );
    handleScroll();
  }, [throttle, element, handleScroll]);

  useEffect(() => {
    if (!element) {
      return;
    }

    element.addEventListener("scroll", listenToScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", listenToScroll);

      if (scrollingTimer.current) {
        clearTimeout(scrollingTimer.current);
      }
    };
  }, [listenToScroll, element]);
};
