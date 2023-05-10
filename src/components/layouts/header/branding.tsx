import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface BrandingProps {}

const Branding: FC<BrandingProps> = ({}) => {
  return (
    <Link href="#home" className="flex items-center">
      <Image
        src="/assets/img/brand/brand_logo.jpeg"
        alt="Brand Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <span className="pl-1 self-center text-1xl font-semibold whitespace-nowrap dark:text-white">
        Shadi Solution
      </span>
    </Link>
  );
};

export default Branding;
