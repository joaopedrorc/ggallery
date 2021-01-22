import React from 'react';

import { Styles, Container } from './styles';

function Title({ title }) {
  return (
    <Styles>
      <Container>
        <h1 className="text-center">{title}</h1>
        <hr />
      </Container>
    </Styles>
  );
}

export default Title;
