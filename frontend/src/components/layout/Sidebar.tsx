'use client';

// REACT
import { useMemo } from 'react';

// HOOKS
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollContainer } from '@/hooks/useScrollContainer';

// COMPONENTS
import NavLink from './NavLink';

// STRING ARRAY OF ACTIVE SECTIONS
const sections = ['home', 'frontend', 'backend', 'blockchain', 'solidity'];

export default function Sidebar() {
  const scrollContainerRef = useScrollContainer();
  const options = useMemo(() => ({ rootMargin: '-40% 0px -60% 0px' }), []);
  const activeId = useScrollSpy(sections, scrollContainerRef, options);

  return (
    <aside
      style={{
        background:
          'linear-gradient(90deg, rgba(13, 14, 18, 1) 0%, rgba(21, 24, 30, 1) 100%)',
      }}
      className="border-r-2 border-black flex flex-col px-4 py-6 w-48 sticky top-0 h-screen justify-center"
    >
      <nav className="flex flex-col gap-2">
        <NavLink href="/#home" isActive={activeId === 'home'}>
          Home
        </NavLink>
        <NavLink href="/#frontend" isActive={activeId === 'frontend'}>
          Frontend
        </NavLink>
        <NavLink href="/#backend" isActive={activeId === 'backend'}>
          Backend
        </NavLink>
        <NavLink href="/#blockchain" isActive={activeId === 'blockchain'}>
          Blockchain
        </NavLink>
        <NavLink href="/#solidity" isActive={activeId === 'solidity'}>
          Solidity
        </NavLink>
      </nav>
    </aside>
  );
}
