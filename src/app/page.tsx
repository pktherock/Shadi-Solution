import { Inter } from 'next/font/google';
import Hero from './hero/page';
import Product from './products/page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="pt-1">
      <Hero />
      <Product />
    </main>
  );
}
