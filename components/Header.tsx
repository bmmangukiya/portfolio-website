import React from 'react';
import Link from 'next/link';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/16/solid';

export const Header = () => {
    const navLinks = [{label:'Home', href:'/'},{label:'Projects', href:'/projects'},{label:'About', href:'/about'}]

  return (
    <div className="flex w-[1400px] items-center justify-between">
      <h2 className="font-sans text-3xl font-bold">
        BM<span className="text-indigo-500">.</span>
      </h2>
      <nav className='flex items-center space-x-2'>
        {navLinks.map(({label, href},i) =>(<Link className='font-bold text-gray-700 hover:text-indigo-700' key={i} href={href}>{label}</Link>))}
      </nav>
      <ChatBubbleBottomCenterTextIcon className='size-6'/>
    </div>
  );
};
