import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackgroundProduct from '../../components/BackgroundProduct';
import Cards from '../../components/Cards';
import { getProducts } from '../../products';
import SideBar from '../../components/SideBar';
import Sorts from '../../components/Sorts';
import previous from '../../public/imgs/Vectorprevious.svg';
import next from '../../public/imgs/Vectornext.svg';

// const categories = getCategories();

function Products() {
  const [totalCard, setTotalCard] = useState(6);
  const [order, setOrder] = useState('');
  const [totalProducts, setTotalProducts] = useState(getProducts().length);

  const [currentPage, setCurrentPage] = useState(0);
  const [paginado, setPaginado] = useState(0);

  const [currentTarget, setCurrentTarget] = useState<any>('');
  const [filters, setFilters] = useState<any>(getProducts());
  const [priceMenor, setPriceMenor] = useState(0);
  const [priceMayor, setPriceMayor] = useState(1000);

  const handleOnChange = (e, rango?: string) => {
    e.preventDefault();
    if (!rango) {
      if (String(e.target.value).length > 2) {
        setOrder(e.target.value);
      } else {
        setTotalCard(Number(e.target.value));
        setCurrentPage(0);
        setPaginado(0);
      }
    } else if (rango === 'menor') {
      setPriceMenor(e.target.value);
    } else {
      setPriceMayor(e.target.value);
    }
  };

  const handleOnClick = (e, category: string) => {
    e.preventDefault();
    e.target.classList.toggle('font-bold');
    e.target.classList.toggle('text-[#D0454C]');

    const filterProducts = getProducts().filter(
      (element) => element.category.toUpperCase() === category.toUpperCase()
    );

    setTotalProducts(filterProducts.length);
    setFilters(filterProducts);

    if (currentTarget) {
      currentTarget.classList.toggle('font-bold');
      currentTarget.classList.toggle('text-[#D0454C]');
    }
    setCurrentTarget(e.target);
    setCurrentPage(0);
    setPaginado(0);
  };

  const filterPrice = (e) => {
    e.preventDefault();
    if (currentTarget) {
      currentTarget.classList.remove('font-bold');
      currentTarget.classList.remove('text-[#D0454C]');
      setCurrentTarget('');
    }
    const filterProducts = getProducts().filter(
      (element) => element.price > priceMenor && element.price < priceMayor
    );
    setTotalProducts(filterProducts.length);
    setFilters(filterProducts);
  };

  const handlePrevious = () => {
    if (paginado !== 0) {
      setPaginado(paginado - 1);
      setCurrentPage(currentPage - totalCard);
    }
  };
  const handleNext = () => {
    if (paginado !== Math.ceil(totalProducts / totalCard) - 1) {
      setCurrentPage(currentPage + totalCard);
      setPaginado(paginado + 1);
    }
  };

  return (
    <>
      <Header />
      <BackgroundProduct title="PRODUCTOS" />

      <div className="flex">
        {/* SideBar */}
        <SideBar
          handleOnClick={handleOnClick}
          handleOnChange={handleOnChange}
          filterPrice={filterPrice}
        />
        <div className="w-4/5 py-16 px-20">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-[#333333]">PRODUCTOS</h2>
            {/* Ordenar */}
            <Sorts handleOnChange={handleOnChange} />
          </div>
          {/* Productos */}
          <div>
            <Cards
              max={totalCard}
              filter={filters}
              sort={order}
              currentPage={currentPage}
            />
          </div>

          {/* Paginado */}
          <div className="w-full h-7 flex justify-center mt-4">
            <div className="w-44">
              <div className="flex justify-center text-2xl text-[#7B7B7B] font-bold">
                <button type="button" onClick={handlePrevious} className="mr-6">
                  <Image src={previous} />
                </button>
                <button type="button" className="flex justify-center w-8">
                  <p>{paginado + 1 === 1 ? '' : paginado}</p>
                </button>
                <button type="button" className="flex justify-center w-8">
                  <p className="text-[#643736]">{paginado + 1}</p>
                </button>
                <button type="button" className="flex justify-center w-8">
                  <p>
                    {paginado + 1 === Math.ceil(totalProducts / totalCard)
                      ? ''
                      : paginado + 2}
                  </p>
                </button>
                <button type="button" onClick={handleNext} className="ml-6">
                  <Image src={next} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Products;
