import React, { useEffect, useState } from 'react';
import Card from './Card';
import {
  getProducts,
  sortPriceMayorMenor,
  sortPriceMenorMayor,
  sortRelevance,
  sortByName,
} from '../products';

interface Cards {
  cols?: number;
  max: number;
  filter?: [];
  sort?: string;
  currentPage?: number;
}

function Cards({ cols = 3, max, filter, sort, currentPage = 0 }: Cards) {
  const [products, setProducts] = useState([]);
  const [numCols, setNumCols] = useState('');
  useEffect(() => {
    setProducts(getProducts());
    setNumCols(() => {
      if (cols === 4) return 'grid-cols-4';
      return 'grid-cols-3';
    });
  }, [cols]);

  useEffect(() => {
    if (filter) {
      setProducts(filter);
    }
  }, [filter]);

  useEffect(() => {
    if (sort === 'relevance') {
      setProducts(sortRelevance());
    }
    if (sort === 'menorMayor') {
      setProducts(sortPriceMayorMenor());
    }
    if (sort === 'mayorMenor') {
      setProducts(sortPriceMenorMayor());
    }
    if (sort === 'name') {
      setProducts(sortByName());
    }
  }, [sort]);
  return (
    <div className={`grid ${numCols}`}>
      {products?.slice(currentPage, currentPage + max)?.map((element) => (
        <Card
          key={element.id}
          id={element.id}
          name={element.name}
          price={element.price}
          img={element.image}
        />
      ))}
    </div>
  );
}

export default Cards;
