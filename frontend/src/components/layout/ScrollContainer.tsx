'use client';

// HOOKS
import { useScrollContainer } from '@/hooks/useScrollContainer';

// Scrollable content region of the layout.
// Attaches the scroll ref from context to the DOM to IntersectionObserver
export default function ScrollContainer(props: { children: React.ReactNode }) {
  const ref = useScrollContainer();

  return (
    <div ref={ref} className="flex flex-col flex-1 h-full overflow-y-scroll">
      {props.children}
    </div>
  );
}
