import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import About from '../components/About';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <PageHead>
        <title>Stephen Joseph | Frontend Developer</title>
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center'>
          <Hero />
          <About />
          <CallToAction />
        </main>
      </Layout>
    </>
  );
};

export default Home;
