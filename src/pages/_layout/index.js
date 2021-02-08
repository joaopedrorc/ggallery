import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function LayoutDefault({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.getElementById('root').scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
