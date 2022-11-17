import Image from 'next/image';
import Link from 'next/link';
import SearchForm from './SerachForm';
import bodebar from '../public/imgs/bodebar1.svg';
import carrito from '../public/imgs/Carro.svg';
import exit from '../public/imgs/Vectorexit.svg';

function NavBar() {
  return (
    <nav className="flex justify-between items-center h-28 pl-16 pr-14 space-x-6">
      <Link href="/">
        <Image src={bodebar} height={64} className="h-16" />
      </Link>
      <SearchForm />
      <div className="flex">
        <ul className="flex px-4 text-[#7B7B7B] text-xl">
          <li className="px-2">
            <Link href="/products">PRODUCTOS</Link>
          </li>
          <li className="px-2">
            <Link href="#">MONEDAS</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="px-2">
            <Image height={24} src={exit} />
          </div>
          <div className="px-2">
            <Image height={24} src={carrito} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
