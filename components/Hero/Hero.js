import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollIntoView from 'react-scroll-into-view';

const Hero = () => {
  return (
    <section className="mb-24 flex w-[82.93%] flex-col md:mb-32 md:w-[89.71%] xl:mb-40 xl:w-[77.08%]">
      <motion.div
        className="ml-[0.125rem] mb-4"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <h1 className="font-h1 text-aquamarine">Hi, my name is</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }}
      >
        <h2 className="font-h2 text-light-slate">Stephen Muñez.</h2>
      </motion.div>
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.4 }}
      >
        <h3 className="font-h2 text-slate">I build things for the web.</h3>
      </motion.div>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.6 }}
      >
        <p className="max-w-[33.75rem] text-slate">
          I&apos;m a full stack developer who loves building engaging digital
          experiences. Currently, I focus on writing accessible HTML, using
          modern CSS practices and writing clean JavaScript at{' '}
          <Link href="https://www.meetsoci.com/">
            <a className="text-aquamarine underline hover:no-underline">SOCi</a>
          </Link>
          .
        </p>
      </motion.div>
      <ScrollIntoView selector="#about" scrollOptions={{ behavior: 'smooth' }}>
        <motion.button
          className="btn-hero"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.8 }}
        >
          <div className="flex h-12 w-12 items-center justify-center bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
              <g
                fill="none"
                className="group-hover:stroke-white group-active:stroke-white"
                fillRule="evenodd"
                stroke="#5FB4A2"
              >
                <path d="M0 9l8 4 8-4" />
                <path opacity=".5" d="M0 5l8 4 8-4" />
                <path opacity=".25" d="M0 1l8 4 8-4" />
              </g>
            </svg>
          </div>
          <p className="font-body-1 w-[9.5rem] text-center uppercase tracking-[2px] text-aquamarine">
            About Me
          </p>
        </motion.button>
      </ScrollIntoView>
    </section>
  );
};

export default Hero;
