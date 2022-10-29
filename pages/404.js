import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import Error from '../components/Error';

const FourOhFour = () => {
  return (
    <>
      <PageHead>
        <title>404 | Not Found</title>
      </PageHead>

      <Layout>
        <main className='flex h-screen w-full flex-col items-center'>
          <Error error={404} />
        </main>
      </Layout>
    </>
  );
};

export default FourOhFour;
