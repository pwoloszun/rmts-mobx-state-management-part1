import { useState } from 'react';
import produce from 'immer';

import { CounterData } from '../types/counter-data';

export interface UseCounterResult {
  counter: CounterData;
  increment: (incBy: number) => void;
  decrement: (decBy: number) => void;
};

export type UseTodosFn = typeof useCounter;

export default function useCounter(value: number): UseCounterResult {
  const initialCounterData: CounterData = {
    value,
    updatedAt: Date.now(),
  };
  const [counterData, setCounterData] = useState<CounterData>(initialCounterData);

  const increment = (incBy = 1) => {
    const nextState = produce(counterData, (draftState) => {
      draftState.value = counterData.value + incBy;
      draftState.updatedAt = Date.now();
    });
    setCounterData(nextState);
  };
  const decrement = (decBy = 1) => {
    const nextState = produce(counterData, (draftState) => {
      draftState.value = counterData.value - decBy;
      draftState.updatedAt = Date.now();
    });
    setCounterData(nextState);
  };

  return {
    counter: counterData,
    increment,
    decrement,
  };
}
