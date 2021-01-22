import React from 'react';

// import { Container } from './styles';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
