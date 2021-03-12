import React, { createContext } from 'react';

import useCounter, { UseCounterResult } from '../hooks/useCounter';

interface ProviderProps {
  initialState: number;
  children: React.ReactNode;
}

const Context = createContext<UseCounterResult | null>(null);

export function CounterContainerProvider(props: ProviderProps): React.ReactElement {
  const value = useCounter(props.initialState);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export function useCounterContainer(): UseCounterResult {
  const value = React.useContext(Context);
  if (value === null) {
    throw new Error(`Missing <CounterProvider>`);
  }
  return value;
}
