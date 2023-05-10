'use client';
import { ALL_SERVICES } from '@component/constants/services';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { FC } from 'react';
interface ProductProps {}

const Product: FC<ProductProps> = () => {
  return (
    <div className="items-center" id="services">
      <h1 className="mt-4 font-bold tracking-tight text-xl md:text-2xl lg:text-5xl leading-none text-black flex justify-center">
        SERVICES
      </h1>
      <p className="mb-4 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48 text-center">
        our current all services!!
      </p>

      {ALL_SERVICES.map((service, index) => (
        <div key={index}>
          <h1 className="text-center">{service.name}</h1>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className="pt-1">
              {service.imgUrl.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${service.name} img`}
                  width={800}
                  height={800}
                  className="bg-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>
      ))}

      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="pt-1">
          <Image
            src="/assets/img/products/1.jpg"
            alt="..."
            width={800}
            height={800}
            className="bg-cover"
          />
          <Image
            src="/assets/img/products/2.jpg"
            alt="..."
            width={800}
            height={800}
            className="bg-cover"
          />
        </Carousel>
      </div> */}
    </div>
  );
};

export default Product;
