import React from 'react';
import { Button } from 'antd';

import { useCounterContainer } from './containers/CounterContainer';

const incBy = 5;

export default function IncrementCounterButton(): React.ReactElement {
  const { increment } = useCounterContainer();
  return (
    <Button type="primary" onClick={() => increment(incBy)}>Increment by {incBy}</Button>
  );
}
