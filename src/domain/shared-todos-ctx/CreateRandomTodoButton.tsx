import React, { useCallback } from 'react';

import { useTodosContainer } from './FetchTodosWrapper';

export default function CreateRandomTodoButton(): React.ReactElement {
  const { createTodo } = useTodosContainer();

  const createHandler = useCallback(() => {
    const title = `bbo ${Math.random()}`;
    console.log('crea  tit', title);

    createTodo({ title });
  }, [createTodo]);

  return (
    <button onClick={createHandler}>Create Random</button>
  );
}
