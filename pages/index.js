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
        {/* SEO */}
        <meta
          name='description'
          content="I'm a frontend developer who loves building engaging digital experiences. Currently, I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript"
        />
        <link rel='canonical' href='https://stephjoseph.dev/' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Stephen Joseph' />
        <meta
          property='og:description'
          content="I'm a frontend developer who loves building engaging digital experiences. Currently, I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript"
        />
        <meta property='og:url' content='https://stephjoseph.dev/' />
        <meta property='og:site_name' content="Stephen Joseph's Website" />
        <meta
          property='og:image'
          content='/images/homepage/image-homepage-profile@2x.jpg'
        />
      </PageHead>

      <Layout>
        <main className='flex w-full flex-col items-center overflow-hidden'>
          <Hero />
          <About />
          <CallToAction />
        </main>
      </Layout>
    </>
  );
};

export default Home;
