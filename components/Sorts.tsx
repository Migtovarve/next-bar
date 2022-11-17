import React from 'react';

function Sorts({ handleOnChange }) {
  return (
    <div className="mb-6 flex">
      <select
        className="w-[160px] border-2 border-[#D77674] border-x-0 border-t-0 mr-4"
        onChange={(e) => handleOnChange(e)}
      >
        <option value="relevance">Relevancia</option>
        <option value="name">Nombre</option>
        <option value="menorMayor">Precio menor a mayor</option>
        <option value="mayorMenor">Precio mayor a menor</option>
      </select>
      <select
        className="w-[160px]  border-2 border-[#D77674] border-x-0 border-t-0 ml-4"
        onChange={(e) => handleOnChange(e)}
      >
        <option value={6}>6 por página</option>
        <option value={9}>9 por página</option>
        <option value={12}>12 por página</option>
        <option value={15}>15 por página</option>
      </select>
    </div>
  );
}

export default Sorts;
