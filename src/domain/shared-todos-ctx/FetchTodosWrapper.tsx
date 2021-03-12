import React, { useEffect } from 'react';

import { fetchAllTodos } from 'src/domain/shared-todos-ctx/api/in-memory-todos';

import { createTodosContainer } from './hooks/createTodosContainer';
import useTodos from './hooks/useTodos';

const TodosContainer = createTodosContainer(useTodos);

const { useTodosContainer } = TodosContainer;

export { useTodosContainer };

interface Props {
  children: React.ReactElement;
}

function TodosFetcher(props: Props): React.ReactElement {
  const { setManyTodos } = useTodosContainer();
  useEffect(() => {
    fetchAllTodos().then((todosData) => setManyTodos(todosData));
  }, [setManyTodos]);

  return props.children;
}


export default function FetchTodosWrapper(props: Props): React.ReactElement {
  return (
    <TodosContainer.Provider initialState={[]}>
      <TodosFetcher>
        {props.children}
      </TodosFetcher>
    </TodosContainer.Provider>
  );
}
