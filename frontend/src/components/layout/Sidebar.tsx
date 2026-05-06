'use client';

// REACT
import { useMemo } from 'react';

// HOOKS
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollContainer } from '@/hooks/useScrollContainer';

// COMPONENTS
import NavLink from './NavLink';

// STRING ARRAY OF ACTIVE SECTIONS
const sections = ['welcome', 'frontend', 'backend', 'blockchain', 'solidity'];

export default function Sidebar() {
  const scrollContainerRef = useScrollContainer();
  const options = useMemo(() => ({ rootMargin: '-40% 0px -60% 0px' }), []);
  const activeId = useScrollSpy(sections, scrollContainerRef, options);

  return (
    <aside className="flex flex-col px-4 py-6 w-48 sticky top-0 h-screen items-start">
      <div className="mt-24">
        <h1>Erik</h1>
        <h1>Wiklund</h1>
        <p>full-stack developer</p>
        <p>Web2 / Web3</p>
      </div>
      <nav className="flex flex-col gap-2 mt-6">
        <NavLink href="/#welcome" isActive={activeId === 'welcome'}>
          Welcome
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
