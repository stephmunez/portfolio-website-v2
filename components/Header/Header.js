import Link from 'next/link';
import Logo from '../../atoms/Logo';
import Hamburger from '../../atoms/icons/Hamburger';

const Header = () => {
  return (
    <>
      <header className='mt-8 mb-10 flex w-full flex-col items-center'>
        <nav className='flex w-[82.93%] items-center justify-between'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
          <button type='button'>
            <div>
              <Hamburger />
            </div>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
