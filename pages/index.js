import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <PageHead>
        <title>Stephen Joseph | Frontend Developer</title>
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center'>
          <About />
        </main>
      </Layout>
    </>
  );
};

export default Home;
