import React from 'react';
import NavBar from './NavBar';
import { getCategories } from '../products';

const categories = getCategories();

function Header() {
  return (
    <header className="h-40 absolute z-10 bg-white">
      <NavBar />
      <div className="categories text-primary h-12 bg-[#955251] text-white text-xl">
        <ul className="flex h-12 items-center justify-around w-screen">
          {categories.map((e, i) => (
            <li key={e + i} className="hover:text-[#333] cursor-pointer">
              {e.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
