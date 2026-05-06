'use client';

import { useEffect, useState } from 'react';

/**
 * Watches section elements by id using IntersectionObserver.
 * Returns the id of the section currently visible in the viewport.
 * Cleans up observer on unmount.
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
