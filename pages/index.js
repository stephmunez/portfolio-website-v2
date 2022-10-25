import PageHead from '../components/PageHead';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <PageHead>
        <title>Stephen Joseph | Home</title>
      </PageHead>

      <div>
        <h2 className='text-aquamarine font-h2'>Hello world</h2>
      </div>
    </>
  );
}
