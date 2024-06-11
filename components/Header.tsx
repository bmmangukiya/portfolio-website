import React from 'react';
import Link from 'next/link';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="my-2 flex w-full max-w-[1400px] items-center justify-between">
      <h2 className="font-sans text-3xl font-bold">
        BM<span className="text-indigo-500">.</span>
      </h2>
      <nav className="flex shrink items-center space-x-5">
        {navLinks.map(({ label, href }, i) => (
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-indigo-500"
            key={i}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/contact"
        className="size-fit rounded-full bg-black p-1.5 text-white hover:bg-gray-700"
      >
        <ChatBubbleBottomCenterTextIcon className="size-5" />
      </Link>
    </div>
  );
};
