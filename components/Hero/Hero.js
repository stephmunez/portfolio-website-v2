const Hero = () => {
  return (
    <section className='mb-24 flex w-[82.93%] flex-col'>
      <div className='ml-[0.125rem] mb-4'>
        <h1 className='font-h1 text-aquamarine'>Hi, my name is</h1>
      </div>
      <div>
        <h2 className='font-h2 text-light-slate'>Stephen Joseph.</h2>
      </div>
      <div className='mb-2'>
        <h3 className='font-h2 text-slate'>I build things for the web.</h3>
      </div>
      <div className='mb-8'>
        <p className='text-slate/80'>
          I&apos;m a frontend developer who loves building engaging digital
          experiences. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript.
        </p>
      </div>
      <button className='btn-hero'>
        <div className='flex h-12 w-12 items-center justify-center bg-transparent'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='14'>
            <g
              fill='none'
              className='group-hover:stroke-white group-active:stroke-white'
              fillRule='evenodd'
              stroke='#5FB4A2'
            >
              <path d='M0 9l8 4 8-4' />
              <path opacity='.5' d='M0 5l8 4 8-4' />
              <path opacity='.25' d='M0 1l8 4 8-4' />
            </g>
          </svg>
        </div>
        <p className='font-body-1 w-[9.5rem] text-center uppercase tracking-[2px] text-aquamarine'>
          About Me
        </p>
      </button>
    </section>
  );
};

export default Hero;
