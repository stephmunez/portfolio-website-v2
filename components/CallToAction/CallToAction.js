import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='mb-20 flex w-[82.93%] flex-col md:mb-24 md:w-[89.71%]'>
      <div className='flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8'>
        <h2 className='font-h2 w-full text-center text-[3rem] leading-[2.5rem] tracking-[-0.36px] md:min-w-[350px] md:text-left md:text-[2.5rem]'>
          Interested in doing a project together?
        </h2>
        <div className='hidden h-px w-full bg-aquamarine md:block'></div>
        <Link href='mailto:sjtmunez@gmail.com'>
          <a className='btn md:min-w-[10.1rem]'>Contact Me</a>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
