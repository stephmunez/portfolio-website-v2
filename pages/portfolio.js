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
  };
};

const Portfolio = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <PageHead>
        <title>Stephen Joseph | Portfolio</title>
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center'>
          <h1 className='invisible absolute'>Portfolio</h1>
          <div className='mb-20 flex w-[82.93%] flex-col items-center gap-[4.5rem]'>
            {projects.map((project) => (
              <ProjectCard key={project.sys.id} project={project} />
            ))}
          </div>
          <CallToAction />
        </main>
      </Layout>
    </>
  );
};

export default Portfolio;
