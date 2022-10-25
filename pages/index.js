import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import Image from 'next/image';
import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
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
}
