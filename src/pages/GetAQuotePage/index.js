import React from 'react';

import { Styles } from './styles';

import BackgroudForm from './BackgroudForm';
import QuoteForm from '../../components/QuoteForm';

function GetAQuotePage() {
  return (
    <Styles>
      <BackgroudForm />
      <QuoteForm title="Leave your message!" />
    </Styles>
  );
}

export default GetAQuotePage;
