import React from 'react';
import Image from 'next/image';
import background from '../public/imgs/Rectangle20png.png';

interface Title {
  title: string;
}

function BackgroundProduct({ title }: Title) {
  return (
    <div className="h-[565px]  bg-black relative">
      <Image src={background} layout="fill" priority />
      <div className="h-full flex items-center justify-center pt-[170px]">
        <h2 className="text-white font-bold text-5xl leading-10 text-center absolute z-20">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default BackgroundProduct;
