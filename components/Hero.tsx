import React from 'react';
import Image from 'next/image';
import { Button } from 'flowbite-react';

export const Hero = () => {
  return (
    <section className="flex size-full flex-col flex-wrap items-center justify-between gap-8 pb-12 pt-24 lg:flex-row">
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-3xl leading-tight tracking-tighter text-gray-700">
            Hey, I&apos;m Bansi 👋🏻
          </h2>
          <h1 className="text-7xl font-bold leading-tight tracking-tighter text-gray-800">
            <span className="text-indigo-600">Full-stack</span> Developer
          </h1>
        </div>
        <p className="text-2xl tracking-tight text-gray-700">
          I&apos;m a versatile full-stack software engineer from India, ready to build scalable and
          efficient web solutions that users will love.
        </p>
        <div className="flex items-center space-x-2">
          <Button>Get In Touch</Button>
          <Button outline color="gray" className="bg-transparent">
            Browse Projects
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <div className="size-full max-h-96 max-w-96 shrink-0 rounded-full border border-indigo-300 p-8 sm:size-96">
          <Image
            src="/Bansi-Mangukiya.webp"
            width={1080}
            height={1047}
            loading="lazy"
            alt="Bansi Mangukiya Image"
            className="size-full rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
