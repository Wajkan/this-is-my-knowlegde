'use client';

// REACT
import { useEffect, useState, RefObject } from 'react';

// Watches section elements by id using IntersectionObserver.
// Returns the id of the section currently visible in the viewport.

export function useScrollSpy(
  ids: string[],
  scrollContainerRef: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
        ...options,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, scrollContainerRef, options]);

  return activeId;
}
