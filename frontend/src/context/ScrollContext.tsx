'use client';

// REACT
import { createContext, useContext, useRef } from 'react';
import type { RefObject } from 'react';

// ScrollContext stores a ref to the scrollable div in the layout.
export const ScrollContext = createContext<RefObject<HTMLDivElement | null>>({
  current: null,
});

// ScrollProvider wraps the layout and creates the ref once.
export function ScrollProvider(props: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={ref}>
      {props.children}
    </ScrollContext.Provider>
  );
}
