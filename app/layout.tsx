import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template Manager',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex w-dvw justify-center">{children}</main>
      </body>
    </html>
  );
}
