'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/trueops-about' },
    { name: 'Why TrueOps', href: '/trueops-why' },
    { name: 'Upcoming Event', href: '/trueops-training' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/trueops-contact' },
  ];

  return (
    <nav className="bg-[url('/images/trueops_8.jpg')] h-[90px] bg-cover flex items-center justify-between px-6 md:px-20 relative z-50">
      {/* Logo */}
      <Image
        src="/images/trueops1.jpg"
        alt="TrueOps Logo"
        width={200}
        height={100}
        className="object-contain"
        priority
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 lg:gap-20 font-semibold text-black">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer ${pathname === item.href ? 'border-b-2 border-green-500' : ''}`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[90px] left-0 w-full bg-[url('/images/trueops_8.jpg')] backdrop-blur-md text-black px-6 py-4 flex flex-col gap-4 font-semibold md:hidden shadow-md">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={toggleMenu}
              className={`cursor-pointer ${pathname === item.href ? 'border-b-2 border-green-500' : ''}`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
