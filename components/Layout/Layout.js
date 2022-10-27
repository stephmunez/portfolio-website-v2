import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className='mx-auto grid w-full max-w-[1920px] place-items-center'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
