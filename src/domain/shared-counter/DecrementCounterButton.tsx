import React from 'react';
import { Button } from 'antd';

import { useCounterContainer } from './containers/CounterContainer';

const decBy = 3;

export default function DecrementCounterButton(): React.ReactElement {
  const { decrement } = useCounterContainer();
  return (
    <Button danger onClick={() => decrement(decBy)}>Decrement by {decBy}</Button>
  );
}
