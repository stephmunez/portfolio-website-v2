import Link from 'next/link';

const Error = ({ error }) => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8'>
      <h1 className='font-["SF_Mono"] text-[6.25rem] font-semibold leading-[1] text-aquamarine md:text-[7.5rem] xl:text-[10rem]'>
        {error === 404 && '404'} {error === 500 && '500'}
      </h1>
      <h2 className='font-["Calibre"] text-[2rem] font-normal leading-[1.1] text-light-slate md:text-[2.5rem] xl:text-[3rem]'>
        {error === 404 && 'Not Found'}
        {error === 500 && 'Server Error. Please try again later.'}
      </h2>
      <Link href='/'>
        <a className='btn'>Back to Home</a>
      </Link>
    </div>
  );
};

export default Error;
