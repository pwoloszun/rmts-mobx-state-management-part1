import React, { createContext } from 'react';

import { Todo } from '../types/todo';
import { UseTodosResult, UseTodosFn } from './useTodos';

interface ProviderProps {
  initialState: Todo[];
  children: React.ReactNode;
}

interface TodosContainerResult {
  Provider: React.ComponentType<ProviderProps>;
  useTodosContainer: () => UseTodosResult;
}

export function createTodosContainer(useTodos: UseTodosFn): TodosContainerResult {
  const Context = createContext<UseTodosResult | null>(null);

  function Provider(props: ProviderProps) {
    const value = useTodos(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  }

  function useTodosContainer(): UseTodosResult {
    const value = React.useContext(Context);
    if (value === null) {
      throw new Error(`Missing <TodosContainer.Provider>`);
    }
    return value;
  }

  return {
    Provider,
    useTodosContainer
  };
}
