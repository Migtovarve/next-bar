import React from 'react';
import Image from 'next/image';
import slide1 from '../public/imgs/Rectangle5img1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Cards from '../components/Cards';
import IndicatorCarrousel from '../components/IndicatorCarrousel';
import BestCarousel from '../components/BestCarousel';

function HomePage() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <Header />
        <Image src={slide1} layout="fill" alt="" />
        <IndicatorCarrousel />
      </div>

      <div className="mt-16">
        <Title title="BEST SELLERS" />
      </div>

      <BestCarousel />

      <Banner />

      <Title title="LICORES" />

      <div className="flex justify-center mb-28">
        <Cards cols={4} max={8} />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
