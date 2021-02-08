import React from 'react';

import { Route as RouteReactDom } from 'react-router-dom';

export default function Route({
  layout: Layout,
  component: Component,
  ...rest
}) {
  return (
    <RouteReactDom
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
