import { useState } from 'react';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../icons/Logo';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className='mt-8 mb-10 flex w-full flex-col items-center'>
        <nav className='relative flex w-[82.93%] items-center justify-between'>
          <Link href='/'>
            <a className='group'>
              <Logo />
            </a>
          </Link>
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} color='#64FFDA' />
            <aside
              className={`absolute right-0 top-14 w-[59.46%] rounded-[4px] bg-light-navy py-10 transition-all duration-300 ease-in ${
                isOpen
                  ? 'pointer-events-auto visible opacity-100'
                  : 'pointer-events-none invisible opacity-0'
              } `}
            >
              <nav>
                <ul className='flex flex-col items-center gap-4 text-center uppercase'>
                  <li>
                    <Link href='/'>
                      <a className='font-nav'>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/portfolio'>
                      <a className='font-nav'>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='mailto:sjtmunez@gmail.com'>
                      <a className='font-nav'>Contact Me</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
