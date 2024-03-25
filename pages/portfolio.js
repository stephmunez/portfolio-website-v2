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

  const res = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
  });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 60,
  };
};

const Portfolio = ({ projects }) => {
  return (
    <>
      <PageHead>
        <title>Stephen Muñez | Portfolio</title>
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center overflow-hidden'>
          <h1 className='invisible absolute'>Portfolio</h1>
          <h2 className='font-body-1 mb-12 w-[82.93%] text-slate md:w-[89.71%] xl:w-[77.08%]'>
            **These are some of my personal projects that I keep adding to
            regularly to expand my skills and to try out new tech, while work
            projects are also available upon request..
          </h2>
          <div className='mb-20 flex w-[82.93%] flex-col items-center gap-[4.5rem] md:mb-32 md:w-[89.71%] md:gap-24 xl:mb-40 xl:w-[77.08%] xl:gap-32'>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.sys.id}
                project={project}
                index={index}
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
