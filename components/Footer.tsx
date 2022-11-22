import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import avilatek from '../public/imgs/avilatek.svg';

function Footer() {
  return (
    <footer className="h-40 bg-[#333333] text-white">
      <div className="pt-9">
        <ul className="flex justify-evenly font-bold cursor-pointer">
          <li>INICIO</li>
          <Link href="/products"><li>PRODUCTOS</li></Link>
          <li>NOSOTROS</li>
          <li>TERMINOS Y CONDICIONES</li>
          <li>PREGUNTAS FRECUENTES</li>
          <li>CUENTA</li>
        </ul>
      </div>
      <div className="flex justify-center pt-11 text-base font-normal">
        <p>
          Copyright © 2022 Bodegon. Desarrollado
          por Miguel Tovar
        </p>
        {/* <Image src={avilatek} /> */}
      </div>
    </footer>
  );
}

export default Footer;
