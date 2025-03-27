import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { currentlyLearning, skills } from '../../data/skills';
import styles from './About.module.scss';

const About = () => {
  return (
    <section
      id='about'
      className='mb-16 flex w-[82.93%] flex-col md:mb-32 md:w-[89.71%] xl:mb-40 xl:w-[77.08%]'
    >
      <div className='flex w-full flex-col gap-12 md:items-center md:gap-[4.313rem] lg:flex-row lg:items-start xl:gap-[7.813rem]'>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <Image
            className={styles.img}
            src='/images/homepage/image-homepage-profile.png'
            alt='Stephen Muñez'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center top'
          />
        </motion.div>

        <motion.div
          className='flex w-full flex-col gap-4 border-y border-solid border-aquamarine py-12 md:py-14 '
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
              I’ve had the privilege of working at{' '}
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
              Throughout my career, I’ve embraced a ’technology-agnostic’
              approach to development—a mindset I learned from my seniors. I
              focus on mastering the fundamentals while staying adaptable across
              different tech stacks.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-body-1 text-light-slate'>
              I have a deep passion for web technologies and have made it a goal
              to learn a new technology or framework each quarter over the past
              few years. This commitment helps me stay at the forefront of web
              development innovation.
            </p>
            <p className='font-body-1 text-light-slate'>
              Here are some of the technologies I’ve been working with recently:
            </p>
            <ul className='flex flex-wrap gap-1'>
              {skills.map(({ title, image }) => (
                <li key={uuidv4()} className='min-h-[28px]'>
                  <img
                    src={image}
                    alt={`${title} skill badge`}
                    className='object-contain'
                  />
                </li>
              ))}
            </ul>{' '}
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-body-1 text-light-slate'>
              and I’m currently learning...
            </p>
            <ul className='flex flex-wrap gap-1'>
              {currentlyLearning.map(({ title, image }) => (
                <li key={uuidv4()} className='min-h-[28px]'>
                  <img
                    src={image}
                    alt={`${title} skill badge`}
                    className='object-contain'
                  />
                </li>
              ))}
            </ul>
          </div>
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
