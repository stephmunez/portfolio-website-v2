import Link from 'next/link';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Logo from '../icons/Logo';
import Twitter from '../icons/Twitter';

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center bg-light-navy py-14 md:py-6'>
      <div className='flex w-[89.71%] flex-col items-center gap-8 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:gap-12'>
          <Link href='/'>
            <a className='group'>
              <Logo />
            </a>
          </Link>

          <ul className='flex flex-col items-center gap-4 text-center uppercase md:flex-row'>
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
        <ul className='flex items-center justify-between gap-4 md:justify-start'>
          <li>
            <Link href='https://github.com/stephjoseph'>
              <a className='group' target='_blank'>
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/stephjoseph__'>
              <a className='group' target='_blank'>
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/stephjoseph__'>
              <a className='group' target='_blank'>
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
