import React from 'react';

import { CounterContainerProvider } from './containers/CounterContainer';

interface Props {
  children: React.ReactElement;
}

export default function CounterWrapper(props: Props): React.ReactElement {
  return (
    <CounterContainerProvider initialState={997}>
      {props.children}
    </CounterContainerProvider>
  );
}
