import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { currentlyLearning, skills } from '../../data/skills';
import styles from './About.module.scss';

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 flex w-[82.93%] flex-col md:mb-32 md:w-[89.71%] xl:mb-40 xl:w-[77.08%]"
    >
      <div className="flex w-full flex-col gap-12 md:items-center md:gap-[4.313rem] lg:flex-row lg:items-start xl:gap-[7.813rem]">
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <Image
            className={styles.img}
            src="/images/homepage/image-homepage-profile.png"
            alt="Stephen Muñez"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            objectPosition="center top"
          />
        </motion.div>

        <motion.div
          className="flex w-full flex-col gap-4 border-y border-solid border-aquamarine py-12 md:py-14 "
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h2 className="font-h2 text-aquamarine">About Me</h2>

          <div className="flex flex-col gap-4">
            <p className="font-body-1 text-light-slate">
              Hello, I’m Stephen Muñez. I help companies and teams bring ideas
              to life on the web.
            </p>
            <p className="font-body-1 text-light-slate">
              Whether you need a high-performance marketing site or a scalable
              web app, I take a{' '}
              <span class="italic">’technology-agnostic’</span> approach,
              choosing the tools that best fit your needs, not just my
              preferences. While React with MERN or Next.js is often my go-to, I
              stay focused on mastering fundamentals and remaining adaptable
              across tech stacks.
            </p>
            <p className="font-body-1 text-light-slate">
              I&apos;ve helped{' '}
              <Link href="https://www.unit.network/">
                <a className="text-aquamarine hover:underline active:underline">
                  a Web3 platform
                </a>
              </Link>
              , creative digital agencies like{' '}
              <Link href="https://www.codeandtheory.com/">
                <a className="text-aquamarine hover:underline active:underline">
                  Code and Theory
                </a>
              </Link>{' '}
              and{' '}
              <Link href="https://make.technology/">
                <a className="text-aquamarine hover:underline active:underline">
                  Make Technology
                </a>
              </Link>
              , and{' '}
              <Link href="https://www.meetsoci.com/">
                <a className="text-aquamarine hover:underline active:underline">
                  one of the top multi-location marketing platform in the U.S.
                </a>
              </Link>{' '}
              deliver digital experiences that connect with audiences and drive
              results.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body-1 text-light-slate">
              I’m committed to staying ahead of the curve, learning a new
              technology or framework every quarter. This helps me bring the
              latest innovations in web development without compromising
              stability or maintainability.
            </p>
            <p className="font-body-1 text-light-slate">
              Here are some of the technologies I’ve been working with recently:
            </p>
            <ul className="flex flex-wrap gap-1">
              {skills.map(({ title, image }) => (
                <li key={uuidv4()} className="min-h-[28px]">
                  <img
                    src={image}
                    alt={`${title} skill badge`}
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>{' '}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body-1 text-light-slate">
              and currently, I’m expanding my toolkit with..
            </p>
            <ul className="flex flex-wrap gap-1">
              {currentlyLearning.map(({ title, image }) => (
                <li key={uuidv4()} className="min-h-[28px]">
                  <img
                    src={image}
                    alt={`${title} skill badge`}
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body-1 text-light-slate">
              When I’m not coding, you’ll find me getting my sweat on to offset
              long hours of sitting and to boost my energy for creative problem
              solving. I enjoy lifting weights, running outdoors, and swimming
              laps, but I’ve yet to explore cycling to complete the trio!
            </p>
            <p className="font-body-1 text-light-slate">
              If you’re looking for a developer who’s versatile,
              detail-oriented, and passionate about creating seamless user
              experiences, I’d love to collaborate and bring your next idea to
              life.
            </p>
            <p className="font-body-1 text-light-slate">
              Feel free to check out my work and see some of the projects I’ve
              been building. :)
            </p>
          </div>
          <Link href="/portfolio">
            <a className="btn mt-4">Go to portfolio</a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
