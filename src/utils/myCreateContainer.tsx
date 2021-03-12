import React, { createContext } from 'react';

interface ProviderProps<State> {
  initialState: State;
  children: React.ReactNode;
}

interface TodosContainer<Value, State> {
  Provider: React.ComponentType<ProviderProps<State>>;
  useContainer: () => Value;
}

type UseHookFn<Value, State> = (initialState?: State) => Value;

const EMPTY = Symbol();

export function myCreateContainer<Value, State>(useHook: UseHookFn<Value, State>): TodosContainer<Value, State> {
  const Context = createContext<Value | typeof EMPTY>(EMPTY);

  function Provider(props: ProviderProps<State>) {
    const { initialState, children } = props;
    const value = useHook(initialState);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContainer(): Value {
    let value = React.useContext(Context);
    if (value === EMPTY) {
      throw new Error(`Missing <Container.Provider>`);
    }
    return value;
  }

  return { Provider, useContainer };
}
