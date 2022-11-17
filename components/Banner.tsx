import React from 'react';
import Image from 'next/image';
import banner from '../public/imgs/banner.png';

function Banner() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="h-2/3 relative text-black bg-white z-10">
        <div className="text-white w-screen">
          <Image layout="fill" src={banner} priority />
          <div className="flex w-screen h-full z-20 absolute items-center justify-center ml-[10%]">
            <div className="w-[570px] h-auto z-10 absolute">
              <h3
                className="text-center text-xl font-black text-4xl"
                style={{ fontStyle: 'italic' }}
              >
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-center text-xl font-bold mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placeratphasellus nullam facilisis quis commodo risus. Auctor
                vel ac, malesuada et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
