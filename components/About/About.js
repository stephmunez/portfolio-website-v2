import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './About.module.scss';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'Node.js',
  'React',
  'Vue.js',
  'Svelte',
  'Express.js',
  'Firebase',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Sass',
  'Tailwind CSS',
];

const currentlyLearning = ['Python'];

const About = () => {
  return (
    <section
      id='about'
      className='mb-16 flex w-[82.93%] flex-col md:mb-32 md:w-[89.71%] xl:mb-40 xl:w-[77.08%]'
    >
      <div className='flex w-full flex-col gap-12 md:flex-row md:items-center md:gap-[4.313rem] xl:gap-[7.813rem]'>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <div className='md:hidden'>
            <Image
              className={styles.img}
              src='/images/homepage/image-homepage-profile.jpg'
              alt='Stephen Muñez'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center top'
            />
          </div>
          <div className='hidden md:block xl:hidden'>
            <Image
              className={styles.img}
              src='/images/homepage/image-homepage-profile.jpg'
              alt='Stephen Muñez'
              width='100%'
              height='250%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center top'
            />
          </div>
          <div className='hidden xl:block'>
            <Image
              className={styles.img}
              src='/images/homepage/image-homepage-profile.jpg'
              alt='Stephen Muñez'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center top'
            />
          </div>
        </motion.div>

        <motion.div
          className='flex w-full flex-col gap-6 border-y border-solid border-aquamarine py-12 md:w-[49.20%] md:py-14 xl:w-[34.48%]'
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h2 className='font-h2 text-aquamarine'>About Me</h2>
          <div className='flex flex-col gap-4'>
            <p className='font-body-1 text-light-slate'>
              Hello, I’m Stephen Muñez and I enjoy creating things that live on
              the web.
            </p>
            <p className='font-body-1 text-light-slate'>
              My interest in web development started back in 2020 when I tried
              learning how to code during the covid lock down out of boredom —
              turns out taking Jennifer Niederst Robbins&apos;s Learning Web
              Design book made me fall in love with the craft!
            </p>
            <p className='font-body-1 text-light-slate'>
              Fast-forward to today, I’ve had the privilege of working at{' '}
              <Link href='https://www.unit.network/'>
                <a className='text-aquamarine hover:underline active:underline'>
                  a Web3 start-up
                </a>
              </Link>
              , at a couple of creative digital agencies:{' ('}
              <Link href='https://www.codeandtheory.com/'>
                <a className='text-aquamarine hover:underline active:underline'>
                  Code and Theory
                </a>
              </Link>{' '}
              and{' '}
              <Link href='https://make.technology/'>
                <a className='text-aquamarine hover:underline active:underline'>
                  Make Technology
                </a>
              </Link>
              {')'}, and currently at{' '}
              <Link href='https://www.meetsoci.com/'>
                <a className='text-aquamarine hover:underline active:underline'>
                  a marketing platform for multi-location brands
                </a>
              </Link>
              .
            </p>
            <p className='font-body-1 text-light-slate'>
              I’ve adopted a ’technology-agnostic’ approach to development,
              which is something I learned from my seniors. Here are a few
              technologies I’ve been working with recently:
            </p>
          </div>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={uuidv4()}>{skill}</li>
            ))}
          </ul>
          <div>
            <p className='font-body-1 text-light-slate'>
              and I’m currently learning...
            </p>
          </div>
          <ul className={styles.skillsList}>
            {currentlyLearning.map((skill) => (
              <li key={uuidv4()}>{skill}</li>
            ))}
          </ul>
          <div className='flex flex-col gap-4'>
            <p className='font-body-1 text-light-slate'>
              When I’m not coding, you’ll find me getting my sweat on to offset
              long hours of sitting. I enjoy lifting weights, running outdoors,
              and swimming laps, but I’ve yet to explore cycling to complete the
              trio!
            </p>
            <p className='font-body-1 text-light-slate'>
              I’d love for you to check out my work.
            </p>
          </div>
          <Link href='/portfolio'>
            <a className='btn mt-4'>Go to portfolio</a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
