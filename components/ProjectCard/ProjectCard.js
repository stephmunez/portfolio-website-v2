import Image from 'next/image';
import Link from 'next/link';
import Github from '../icons/Github';
import External from '../icons/External';
import styles from './ProjectCard.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const { title, thumbnail, description, stack, repository, url } =
    project.fields;
  return (
    <motion.div
      className={`flex w-full flex-col gap-10 md:items-center md:gap-[4.313rem] xl:gap-[7.813rem] ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, translateX: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      viewport={{ once: true }}
    >
      <Link href={url}>
        <a className='w-full md:w-[49.20%] xl:w-[53.20%]' target='_blank'>
          <div className={styles.wrapper}>
            <Image
              src={`https:${thumbnail.fields.file.url}`}
              alt={title}
              className={styles.img}
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center top'
            />
          </div>
        </a>
      </Link>

      <div className='flex flex-col gap-8 border-y border-solid border-aquamarine py-6 md:w-[40.78%] md:py-12 xl:w-[34.48%] xl:gap-10 xl:py-16'>
        <div className='flex flex-col gap-4'>
          <Link href={url}>
            <a target='_blank'>
              <h2 className='font-h2 text-aquamarine transition-colors ease-in hover:text-light-slate active:text-light-slate md:text-[3rem]'>
                {title}
              </h2>
            </a>
          </Link>

          <p className='font-body-1 text-light-slate'>{description}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
            {stack.map((stack) => (
              <li className='font-stack text-slate' key={uuidv4()}>
                {stack}
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-3'>
            <Link href={repository}>
              <a className='group' target='_blank'>
                <Github />
              </a>
            </Link>
            <Link href={url}>
              <a className='group' target='_blank'>
                <External />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
