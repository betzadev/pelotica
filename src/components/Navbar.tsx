import React from 'react';
import Link from 'next/link';
import logodark from '../../public/darklogo.svg';
import Image from 'next/image';


interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-bluebg text-white flex items-center justify-between h-16 px-4">
      <Link href="/">
        <Image src={logodark} alt="Logo Pelotica" className="h-20 w-20" />
      </Link>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
+           {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-orangebg text-white px-4 py-2 rounded">Ingresar</button>
    </nav>
  );
};

export default Navbar;
