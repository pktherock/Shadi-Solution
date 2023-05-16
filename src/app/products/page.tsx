'use client';
import { ALL_SERVICES } from '@component/constants/services';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
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
          <section>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                {service.imgUrl.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`${service.name} img`}
                    width={800}
                    height={800}
                    className="bg-cover bg-blend-darken"
                  />
                ))}
              </Carousel>
            </div>
          </section>
          <section className="flex justify-between py-5 px-2 bg-lime-200">
            <div>
              <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {service.name}
              </h1>
              {/* //todo */}
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Details coming soon...</li>
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <Link
                href="#services"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 break-keep"
              >
                View Detailed info
              </Link>
            </div>
          </section>
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
