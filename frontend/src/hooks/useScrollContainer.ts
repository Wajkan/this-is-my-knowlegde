'use client';

// REACT
import { useContext } from 'react';

// CONTEXT
import { ScrollContext } from '@/context/ScrollContext';

// Used in Sidebar (for scrollspy) and ScrollContainer (to attach the ref to the DOM element)
export function useScrollContainer() {
  return useContext(ScrollContext);
}
