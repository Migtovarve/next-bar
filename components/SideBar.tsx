import React from 'react';
import { getCategories } from '../products';

function SideBar({ handleOnClick, handleOnChange, filterPrice }) {
  return (
    <div className="w-1/5 h-auto bg-[#333333] px-16 pt-16">
      {/* filtrar por Categoria */}
      <div>
        <h2 className="text-base font-bold text-white mb-4">CATEGORIA</h2>
      </div>
      <div className="flex flex-col border-b-2 border-[#4A4B53] text-white mb-8">
        <div className="pb-6">
          {getCategories()
            .slice(0, getCategories().length - 1)
            .map((element, position) => (
              <button
                type="button"
                key={element + position}
                className="block text-sm cursor-pointer hover:text-[#D0454C]"
                onClick={(e) => handleOnClick(e, element)}
              >
                {element}
              </button>
            ))}
        </div>
      </div>
      {/* Filtar por precio */}
      <div>
        <h2 className="text-base font-bold text-white mb-4">PRECIO</h2>
      </div>
      <div className="flex flex-col border-b-2 border-[#4A4B53] text-white mb-8">
        <div className="flex text-white text-base font-medium pb-10">
          $
          <input
            type="number"
            className="h-6 w-12 text-white mx-1 p-1 bg-[#333333] border-0 border-b-2"
            onChange={(e) => handleOnChange(e, 'menor')}
          />
          -
          <input
            type="number"
            className="h-6 w-12 text-white mx-1 p-1 bg-[#333333] border-0 border-b-2"
            onChange={(e) => handleOnChange(e, 'mayor')}
          />
        </div>
        <button
          type="button"
          className="w-full h-6 border-2 border-white mb-8 hover:bg-white hover:text-[#333]"
          onClick={filterPrice}
        >
          Filtrar
        </button>
      </div>

      <div>
        <h2 className="text-base font-bold text-white mb-4">OFERTAS</h2>
      </div>
    </div>
  );
}

export default SideBar;
