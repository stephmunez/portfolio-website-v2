import Link from 'next/link';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Logo from '../icons/Logo';

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center bg-light-navy py-14 md:py-6 xl:py-8'>
      <div className='flex flex-col items-center gap-8 md:w-[89.71%] md:flex-row md:justify-between xl:w-[77.08%]'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:gap-12'>
          <Link href='/' aria-label='Go to homepage'>
            <a className='group'>
              <Logo />
            </a>
          </Link>

          <ul className='flex flex-col items-center gap-6 text-center uppercase md:flex-row xl:gap-8'>
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
              <Link href='/contact'>
                <a className='font-nav'>Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className='flex items-center justify-between gap-4 md:justify-start'>
          <li>
            <Link href='https://github.com/stephmunez'>
              <a className='group' target='_blank'>
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/stephen-munez'>
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
