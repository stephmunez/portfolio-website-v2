import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import Error from '../components/Error';

const FiveHundred = () => {
  return (
    <>
      <PageHead>
        <title>404 | Not Found</title>
      </PageHead>

      <Layout>
        <main className='flex h-screen w-full flex-col items-center'>
          <Error error={500} />
        </main>
      </Layout>
    </>
  );
};

export default FiveHundred;
