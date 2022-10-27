import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';
import { v4 as uuidv4 } from 'uuid';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Gatsby',
  'Next.js',
  'HTML and CSS',
];

const About = () => {
  return (
    <section className='mb-16 flex w-[82.93%] flex-col'>
      <div className='flex w-full flex-col gap-12'>
        <div className={styles.wrapper}>
          <Image
            className={styles.img}
            src='/images/homepage/image-homepage-profile@2x.jpg'
            alt='Stephen Joseph'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center top'
          />
        </div>

        <div
          id='about'
          className='flex w-full flex-col gap-6 border-y border-solid border-aquamarine py-12'
        >
          <h2 className='font-h2 text-aquamarine'>About Me</h2>
          <div className='flex flex-col gap-4'>
            <p className='font-body-1 text-light-slate'>
              Hello, my name is Stephen Joseph and I enjoy creating things that
              live on the internet.
            </p>
            <p className='font-body-1 text-light-slate'>
              My interest in web development started back in 2020 when I decided
              to try learning how to code during the corona virus lock down out
              of boredom — turns out taking Jennifer Niederst Robbins&apos;s
              Learning Web Design book made me fell in love with the craft!
            </p>
            <p className='font-body-1 text-light-slate'>
              Fast-forward to today, I’ve had the privilege of working at{' '}
              <Link
                className='text-aquamarine hover:underline active:underline'
                href='https://www.unit.network/'
              >
                <a className='text-aquamarine hover:underline active:underline'>
                  a crypto start-up
                </a>
              </Link>
              , and at{' '}
              <Link
                className='text-aquamarine hover:underline'
                href='https://www.codeandtheory.com/'
              >
                <a className='text-aquamarine hover:underline active:underline'>
                  an advertising agency.
                </a>
              </Link>
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
              When I’m not coding, you’ll find me in a corner or outdoors. I
              love reading books, and being out in nature whether that’s going
              for a walk, run, or motorbike ride. I’d love you to check out my
              work.
            </p>
          </div>
          <Link href='/portfolio'>
            <a className='btn'>Go to portfolio</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
