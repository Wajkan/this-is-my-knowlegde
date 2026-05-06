'use client';

// NEXT
import Link from 'next/link';

// PROPS
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

// ACTIVE & HOVER
export default function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
      className={`px-3 py-1 text-sm ${
        props.isActive ? 'font-semibold underline' : 'hover:underline'
      }`}
    >
      {props.children}
    </Link>
  );
}
