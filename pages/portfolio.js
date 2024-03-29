import { createClient } from 'contentful';
import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import CallToAction from '../components/CallToAction';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const personalRes = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
  });

  const workRes = await client.getEntries({
    content_type: 'workProjects',
    order: '-sys.createdAt',
  });

  return {
    props: {
      personalProjects: personalRes.items,
      workProjects: workRes.items,
    },
    revalidate: 60,
  };
};

const Portfolio = ({ personalProjects, workProjects }) => {
  return (
    <>
      <PageHead>
        <title>Stephen Muñez | Portfolio</title>
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center overflow-hidden'>
          <h1 className='invisible absolute'>Portfolio</h1>
          {/* <h2 className='font-body-1 mb-12 w-[82.93%] text-slate md:w-[89.71%] xl:w-[77.08%]'>
            These are some of my personal projects that I keep adding to regularly to expand my skills and to try out new tech, while work projects are also available upon request.
          </h2> */}
          <h2 className='font-h2 mb-10 w-[82.93%] text-light-slate md:mb-12 md:w-[89.71%] md:text-[3.5rem] xl:mb-16 xl:w-[77.08%]'>
            Work Projects
          </h2>
          <div className='mb-20 flex w-[82.93%] flex-col items-center gap-[4.5rem] md:mb-32 md:w-[89.71%] md:gap-24 xl:mb-40 xl:w-[77.08%] xl:gap-32'>
            {workProjects.map((project, index) => (
              <ProjectCard
                key={project.sys.id}
                project={project}
                index={index}
                type='work'
              />
            ))}
          </div>
          <h2 className='font-h2 mb-10 w-[82.93%] text-light-slate md:mb-12 md:w-[89.71%] md:text-[3.5rem] xl:mb-16 xl:w-[77.08%]'>
            Notable Personal Projects
          </h2>
          <div className='mb-20 flex w-[82.93%] flex-col items-center gap-[4.5rem] md:mb-32 md:w-[89.71%] md:gap-24 xl:mb-40 xl:w-[77.08%] xl:gap-32'>
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.sys.id}
                project={project}
                index={index}
                type='personal'
              />
            ))}
          </div>

          <CallToAction />
        </main>
      </Layout>
    </>
  );
};

export default Portfolio;
