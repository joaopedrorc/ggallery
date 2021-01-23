import React from 'react';

import { Styles } from './styles';

import ServiceDescription from './ServiceDescription';
import BackgroundServices from './BackgroundServices';

export default function FencePage() {
  return (
    <Styles>
      <BackgroundServices />
      <ServiceDescription />
    </Styles>
  );
}
