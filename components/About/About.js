import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Vue.js',
  'Firebase',
  'HTML and CSS',
];

const currentlyLearning = ['Svelte', 'SvelteKit'];

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
              src='/images/homepage/image-homepage-profile@2x.png'
              alt='Stephen Joseph'
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
              src='/images/homepage/image-homepage-profile@2x.png'
              alt='Stephen Joseph'
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
              src='/images/homepage/image-homepage-profile@2x.png'
              alt='Stephen Joseph'
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
              Hello, my name is Stephen Joseph and I enjoy creating things that
              live on the internet.
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
                  SOCi
                </a>
              </Link>
              .
            </p>
            <p className='font-body-1 text-light-slate'>
              Here are a few technologies I’ve been working with recently:
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
          <div>
            <p className='font-body-1 text-light-slate'>
              When I’m not coding, you’ll find me in a corner or outdoors. I
              love reading books, and being out in nature whether that’s going
              for a walk, run, swim, or a motorbike ride. I’d love you to check
              out my work.
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
