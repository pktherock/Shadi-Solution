import Header from '@component/components/layouts/header/header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@component/components/layouts/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Shadi Solution',
  description: 'Basic overview of all features related to events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
