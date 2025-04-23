import About from '../components/About';
import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

const Home = () => {
  return (
    <>
      <PageHead>
        <title>Stephen Muñez | Web Developer</title>
        {/* SEO */}
        <meta
          name='description'
          content="I'm a web developer who loves building engaging digital experiences. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript."
        />
        <link rel='canonical' href='https://stephmunez.dev/' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Stephen Muñez | Web Developer' />
        <meta
          property='og:description'
          content="I'm a web developer who loves building engaging digital experiences. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript."
        />
        <meta property='og:url' content='https://stephmunez.dev/' />
        <meta property='og:site_name' content='Stephen Muñez' />
        <meta
          property='og:image'
          content='https://stephmunez.dev/images/homepage/image-homepage-profile.jpg'
        />
        <meta
          name='keywords'
          content='web developer, frontend developer, fullstack developer, HTML, CSS, JavaScript'
        />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='author' content='Stephen Muñez' />
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
