import { useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../icons/Logo';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    scrollDirection === 'up' && setOpen(false);
  }, [scrollDirection]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 mb-10 flex w-full flex-col items-center bg-navy py-2 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] transition-all duration-500 md:mb-16 md:py-6 xl:mb-20 xl:py-8 ${
          scrollDirection === 'down'
            ? 'pointer-events-none invisible translate-y-[-100%] opacity-0'
            : 'pointer-events-auto visible opacity-100'
        }`}
      >
        <nav className='relative flex w-[82.93%] items-center justify-between md:w-[89.71%] xl:w-[77.08%]'>
          <Link href='/'>
            <a className='group'>
              <Logo />
            </a>
          </Link>
          <div className='hidden md:flex'>
            <ul className='flex items-center gap-6 text-center uppercase xl:gap-8'>
              <li className='flex items-center'>
                <Link href='/'>
                  <a className='font-nav'>Home</a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='/portfolio'>
                  <a className='font-nav'>Portfolio</a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='mailto:sjtmunez@gmail.com'>
                  <a className='font-nav'>Contact Me</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color='#64FFDA'
              rounded
              label='Show menu'
            />
            <aside
              className={`absolute right-0 top-20 w-[59.46%] rounded-[4px] bg-light-navy py-10 transition-all duration-300 ease-in ${
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
