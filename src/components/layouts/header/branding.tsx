import { FC } from 'react';

interface BrandingProps {}

const Branding: FC<BrandingProps> = ({}) => {
  return (
    <div className="flex justify-around">
      <p>logo</p>
      <p>Brand Name</p>
    </div>
  );
};

export default Branding;
