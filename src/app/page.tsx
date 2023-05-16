'use client';
import { Inter } from 'next/font/google';
import Hero from './hero/page';
import Product from './products/page';
import Developers from './developers/page';
import Contact from './contact/page';
import { useEffect } from 'react';
import { fireWorksOnLoad } from '@component/services/confetti.service';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    fireWorksOnLoad();
  }, []);

  return (
    <main className="pt-1">
      <Hero />
      <Product />
      <Developers />
      <Contact />
    </main>
  );
}
