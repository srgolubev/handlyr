'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a flag that flips to true (once) when the element comes
 * within `rootMargin` of the viewport. Used to defer heavy third-party embeds
 * (Jobber form, Thumbtack widget, Leaflet map) until the visitor scrolls near
 * them, so they don't compete with the hero for bandwidth and main thread.
 */
export function useNearViewport<T extends Element>(rootMargin = '600px') {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (near) return;
    const el = ref.current;
    if (!el) return;
    // Deep links (/#contact) land right on the section: the observer fires
    // immediately, so the embed loads at once.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, rootMargin]);

  return [ref, near] as const;
}
