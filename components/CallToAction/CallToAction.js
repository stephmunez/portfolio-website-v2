import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='mb-20 flex w-[82.93%] flex-col'>
      <div className='flex w-full flex-col items-center gap-10'>
        <h2 className='font-h2 w-full text-center text-[3rem] leading-[2.5rem] tracking-[-0.36px]'>
          Interested in doing a project together?
        </h2>
        <Link href='mailto:sjtmunez@gmail.com'>
          <a className='btn'>Contact Me</a>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
