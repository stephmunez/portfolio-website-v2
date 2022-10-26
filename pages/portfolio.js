import { createClient } from 'contentful';
import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'project' });

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
          {projects.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </main>
      </Layout>
    </>
  );
};

export default Portfolio;
