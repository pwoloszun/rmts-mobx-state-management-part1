import React from 'react';
import { Card } from 'antd';

import { formatDate } from 'src/utils/formatDate';

import { useCounterContainer } from './containers/CounterContainer';

export default function CounterInfo(): React.ReactElement {
  const { counter } = useCounterContainer();
  const { value, updatedAt } = counter;
  const formattdDate = formatDate(updatedAt);
  return (
    <Card>
      <h3>Value: {value}</h3>
      <h5>Updated at: {formattdDate}</h5>
    </Card>
  );
}
