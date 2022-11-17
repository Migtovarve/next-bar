import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getProductByID } from '../products';
import detailPhoto from '../public/imgs/Rectangle 7.png';
import MinDetail from '../public/imgs/Rectangle28.png';

function Details() {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (router.query.id) {
      const producto = getProductByID(router.query.id);
      setProduct(producto[0]);
    }
  }, [router.query.id]);

  return (
    <>
      <div className="flex  text-[#7B7B7B] text-base font-bold">
        <Link href="/">INICIO</Link>/<Link href="/products">PRODUCTOS</Link>/
        <p className="text-[#95353A]">{product?.name?.toUpperCase()}</p>
      </div>
      <div className="flex">
        <div className="w-1/2 h-full bg-white mt-16 pr-6">
          <Image src={detailPhoto} />
          <div className="inline-flex w-full drop-shadow-lg relative mt-16">
            <div className="border flex items-center justify-center">
              <Image src={MinDetail} />
            </div>
            <div className="border flex items-center justify-center">
              <Image src={MinDetail} />
            </div>
            <div className="border flex items-center justify-center">
              <Image src={MinDetail} />
            </div>
            <div className="border flex items-center justify-center">
              <Image src={MinDetail} />
            </div>
            <div className="border flex items-center justify-center">
              <Image src={MinDetail} />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full mt-28 pl-4">
          <h2 className="text-4xl text-[#333333] font-black">
            BUCHANANS SPECIAL RESERVE 18 AÑOS
          </h2>
          <h4 className="text-xl mt-2 text-[#333333] font-black">
            ESCOCIA | 0,75 Lts.
          </h4>
          <div className="flex items-center space-x-4 mt-6">
            <p className="text-[#643736] text-3xl font-black">$99,99</p>
            <p className="text-[#B6B6B6] text-xl font-black line-through">
              $199,99
            </p>
          </div>
          <div className="flex w-36 mt-24">
            <button
              type="button"
              className="w-9 h-9 border border-[#E5E5E5] rounded-l"
            >
              -
            </button>
            <input
              type="number"
              className="h-9 w-11 border border-[#E5E5E5] p-2 text-center"
              placeholder="1"
            />
            <button
              type="button"
              className="w-9 h-9 border border-[#E5E5E5] rounded-r"
            >
              +
            </button>
          </div>
          <div>
            <button
              type="button"
              className="h-10 w-36 text-sm text-white bg-[#643736] rounded-md mt-16 drop-shadow-lg"
            >
              AGREGAR
            </button>
            {/* //  style="filter: drop-shadow(rgba(0, 0, 0, 0.25) 4px 4px 4px);">Agregar */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
