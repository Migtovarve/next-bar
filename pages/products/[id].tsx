import React from 'react';
import BackgroundProduct from '../../components/BackgroundProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Cards from '../../components/Cards';
import Details from '../../components/Details';
import Tab from '../../components/Tab';

function Product() {
  return (
    <div>
      <Header />
      <BackgroundProduct title="PRODUCTO" />
      <div className="w-screen px-56 my-24">
        <Details />
      </div>
      <div className="bg-white px-56 pb-32">
        <Tab />
      </div>
      <Title title="PRODUCTOS SIMILARES" />
      <div className="px-52 mb-16">
        <Cards max={3} />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
