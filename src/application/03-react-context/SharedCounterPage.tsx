import React from 'react';

import CounterWrapper from 'src/domain/shared-counter/CounterWrapper';
import CounterInfo from 'src/domain/shared-counter/CounterInfo';
import IncrementCounterButton from 'src/domain/shared-counter/IncrementCounterButton';
import DecrementCounterButton from 'src/domain/shared-counter/DecrementCounterButton';

export default function SharedCounterPage(): React.ReactElement {
  return (
    <CounterWrapper>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>SharedCounterPage</h3>

        <CounterInfo />

        <hr />
        <IncrementCounterButton />
        <DecrementCounterButton />

      </div>
    </CounterWrapper>
  );
}
