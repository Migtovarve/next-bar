import React from 'react';

function Tab() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row">
        <button
          type="button"
          className="w-1/3 text-gray-600 py-4 px-6 block hover:text-[#643736] focus:outline-none border-b-2 font-bold text-[#333333] border-[#643736]"
        >
          DESCRIPCION
        </button>
        <button
          type="button"
          className="w-1/3 text-gray-600 py-4 px-6 block hover:text-[#643736] focus:outline-none border-b-2 font-bold"
        >
          FICHA TECNICA
        </button>
        <button
          type="button"
          className="w-1/3 text-gray-600 py-4 px-6 block hover:text-[#643736] focus:outline-none border-b-2 font-bold"
        >
          COMENTARIOS
        </button>
      </nav>
      <div className="h-auto overflow-hidden mt-10">
        <div className="w-full">
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            phasellus nullam facilisis quis commodo risus. Auctor vel ac,
            malesuada et sit. Diam eget porttitor sit vestibulum elementum amet,
            fringilla nibh. Et nunc, imperdiet natoque diam, etiam ligula
            tincidunt scelerisque quis. Ut faucibus proin morbi sagittis vitae
            tincidunt. Facilisis non lectus dictum nunc, auctor. At feugiat dui
            faucibus arcu. Praesent faucibus sit blandit felis in orci. Mauris
          </p>
        </div>
      </div>
    </>
  );
}

export default Tab;
