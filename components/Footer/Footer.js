import Link from 'next/link';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Logo from '../icons/Logo';
import Twitter from '../icons/Twitter';

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center bg-light-navy py-14'>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-10'>
          <Link href='/'>
            <a className='group'>
              <Logo />
            </a>
          </Link>

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
        </div>
        <ul className='flex w-full items-center justify-between'>
          <li>
            <Link href='https://github.com/stephjoseph'>
              <a className='group'>
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/stephjoseph__'>
              <a className='group'>
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/stephjoseph__'>
              <a className='group'>
                <LinkedIn />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
