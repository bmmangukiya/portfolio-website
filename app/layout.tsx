import React from 'react';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import { Header } from '@/components/Header';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Template Manager',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex w-dvw flex-col items-center px-4`}>
        <Header />
        <main className="flex w-full max-w-[1400px] justify-center">{children}</main>
      </body>
    </html>
  );
}
