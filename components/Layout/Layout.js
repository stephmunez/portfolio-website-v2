import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement and update mousePosition state
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Calculate background position based on mouse position
  const backgroundPosition = `${mousePosition.x}px ${mousePosition.y}px`;
  return (
    <>
      <div
        className='mx-auto grid w-full max-w-[1920px] place-items-center'
        onMouseMove={handleMouseMove}
      >
        <div
          className='pointer-events-none fixed inset-0 top-0 left-0 bottom-0 right-0 z-50 hidden transition duration-300 lg:block'
          style={{
            background: `radial-gradient(600px at ${backgroundPosition}, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
