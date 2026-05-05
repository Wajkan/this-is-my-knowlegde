import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className="border-2 border-black flex items-center gap-2 px-4 py-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/frontend">Frontend</NavLink>
      <NavLink href="/backend">Backend</NavLink>
      <NavLink href="/blockchain">Blockchain</NavLink>
      <NavLink href="/solidity">Solidity</NavLink>
    </nav>
  );
}
