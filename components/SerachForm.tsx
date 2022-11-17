import React from 'react';
import Image from 'next/image';
import lupa from '../public/imgs/Lupa.svg';

function SearchForm() {
  return (
    <form className="max-w-md w-[50%] flex relative">
      <input
        type="text"
        name="search"
        id="search"
        className="border-x-0 border-t-0  border-2 border-[#333333]/[0.4] w-[100%]"
      />
      <div className="flex items-center absolute right-4 top-2">
        <Image src={lupa} />
      </div>
    </form>
  );
}

export default SearchForm;
