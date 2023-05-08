import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-500 flex justify-center">
      <div>We will finish this letter</div>
    </footer>
  );
};

export default Footer;
