'use client';

// COMPONENTS
import NavLink from './NavLink';

// HOOKS
import { useScrollSpy } from '@/components/hooks/useScrollSpy';

// STRING ARRAY OF ACTIVE SECTIONS
const sections = ['home', 'frontend', 'backend', 'blockchain', 'solidity'];

export default function Sidebar() {
  const activeId = useScrollSpy(sections);

  return (
    <aside className="border-r-2 border-black flex flex-col px-4 py-6 w-48 sticky top-0 h-screen justify-center">
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
