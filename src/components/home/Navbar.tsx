'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  name: string;
  data: string;
}

interface NavBarProps {
  navbarData: NavItem[];
}

const NavBar = ({ navbarData }: NavBarProps) => {
  const logo = navbarData?.[1]?.data;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = navbarData?.slice(2, 8) || [];

  const contactSubItems = [
    { name: 'Kushinagar', path: '/trueops-contact' },
    { name: 'Lucknow', path: '/trueops-contact/Lucknow' },
  ];

  return (
    <nav className="bg-[url('/images/trueops_8.jpg')] h-[90px] bg-cover flex items-center justify-between px-6 md:px-20 relative z-50">
      {/* Logo */}

    {pathname !== '/' ? (
     <div className="relative w-[200px] h-[100px]">
     <Link href="/">
     <Image
      src={logo}
      alt="TrueOps Logo"
      fill
      sizes="200px"
      className="object-contain cursor-pointer"
      priority
     />
    </Link>
    </div>):(
    <div className="relative w-[200px] h-[100px]">
      <Image
      src={logo}
      alt="TrueOps Logo"
      fill
      sizes="200px"
      className="object-contain"
      priority
    />
    </div>
    )}


      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 lg:gap-20 font-semibold text-black">
        {menuItems.map((item) =>
          item.name === 'Contact' ? (
            <li key={item.name} className="relative group">
              <span className="cursor-pointer hover:text-green-600 px-2 py-1">
                {item.name}
              </span>
              <ul className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg hidden group-hover:flex flex-col z-50 min-w-[160px]">
                {contactSubItems.map((sub) => (
                  <li key={sub.path}>
                    <Link
                      href={sub.path}
                      className={`px-4 py-2 hover:bg-green-100 ${
                        pathname === sub.path ? 'bg-green-100 font-bold' : ''
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={item.name}
              className={`cursor-pointer ${
                pathname === item.data ? 'border-b-2 border-green-500' : ''
              }`}
            >
              <Link href={item.data}>{item.name}</Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[90px] left-0 w-full bg-[url('/images/trueops_8.jpg')] backdrop-blur-md text-black px-6 py-4 flex flex-col gap-4 font-semibold md:hidden shadow-md z-50">
          {menuItems.map((item) =>
            item.name === 'Contact Us' ? (
              <li key={item.name}>
                <span className="font-semibold">{item.name}</span>
                <ul className="pl-4 flex flex-col gap-1 mt-1">
                  {contactSubItems.map((sub) => (
                    <li key={sub.path} onClick={toggleMenu}>
                      <Link
                        href={sub.path}
                        className={`block py-1 hover:text-green-600 ${
                          pathname === sub.path ? 'font-bold' : ''
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li
                key={item.name}
                onClick={toggleMenu}
                className={`cursor-pointer ${
                  pathname === item.data ? 'border-b-2 border-green-500' : ''
                }`}
              >
                <Link href={item.data}>{item.name}</Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
