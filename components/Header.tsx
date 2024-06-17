'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/16/solid';
import { Navbar } from 'flowbite-react';

export const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="my-2 w-full max-w-[1400px]">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <h2 className="font-sans text-3xl font-bold">
            BM<span className="text-indigo-500">.</span>
          </h2>
        </Navbar.Brand>
        <div className="hidden md:order-2 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-black p-1.5 text-white hover:bg-gray-700"
          >
            <ChatBubbleBottomCenterTextIcon className="size-5" />
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map(({ label, href }, i) => (
            <Navbar.Link
              as={Link}
              key={i}
              href={href}
              active={pathname === href}
              className="text-lg font-semibold"
            >
              {label}
            </Navbar.Link>
          ))}
          <div className="md:hidden">
            <Navbar.Link
              as={Link}
              href="/contact"
              active={pathname === '/contact'}
              className="text-lg font-semibold"
            >
              Get In Touch
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
