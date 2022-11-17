import React from 'react';
import Image from 'next/image';
import previous from '../public/imgs/controllerPrevious.svg';
import next from '../public/imgs/controllerNext.svg';
import slide1 from '../public/imgs/slide1.png';
import slide2 from '../public/imgs/slide2.png';
import slide3 from '../public/imgs/slide3.png';

function BestCarousel() {
  return (
    <div className="relative mx-56 mt-24">
      <div className="swiper">
        {/* Slides */}
        <div className="flex justify-center">
          <div className="swiper-slide w-1/3 flex justify-center pb-24">
            <Image src={slide1} alt="Licor photo" />
          </div>
          <div className="swiper-slide w-1/3 bg-[#95353A]/[0.75] rounded-lg mx-24 drop-shadow-xl flex flex-col">
            <Image src={slide2} alt="Licor photo" />
            <div className="bg-[#333333]/[0.75] mx-4 mb-4 rounded-md">
              <h2 className="text-3xl text-white font-bold px-4 py-1">
                BUCHANAN’S DELUXE 12 ANOS
              </h2>
            </div>
          </div>
          <div className="swiper-slide w-1/3 flex justify-center pb-24 ">
            <Image src={slide3} alt="Licor photo" />
          </div>
        </div>
        {/* Controllers */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer"
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30">
            <Image src={previous} />
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30">
            <Image src={next} />
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default BestCarousel;
