import React from "react";
import Link from "next/link";
import logodark from "../../public/darklogo.svg";
import Image from "next/image";

import { Si4Chan, SiAdidas } from "react-icons/si";

interface NavLink {
  label: string;
  href: string;
  icono: JSX.Element;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: "Inicio", href: "/", icono: <Si4Chan /> },
    { label: "Nosotros", href: "/nosotros", icono: <Si4Chan /> },
    { label: "Contacto", href: "/contacto", icono: <SiAdidas /> },
  ];

  return (
    <nav className="bg-bluebg text-white flex items-center justify-between h-16 px-4">
      <Link href="/">
        <Image src={logodark} alt="Logo Pelotica" className="h-20 w-20" />
      </Link>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex items-center">{/*  */}
              <span className="icono">{link.icono}</span> {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-orangebg text-white px-4 py-2 rounded">
        Ingresar
      </button>
    </nav>
  );
};

export default Navbar;
