import React, { useCallback } from 'react';

import { Todo } from './types/todo';
import { useTodosContainer } from './FetchTodosWrapper';

function calculateIndex(todos: Todo[]): number {
  const count = todos.length;
  return Math.floor(Math.random() * count);
}

export default function RemoveRandomTodoButton(): React.ReactElement {
  const { todos, removeTodo } = useTodosContainer();
  const index = calculateIndex(todos);

  const removeHandler = useCallback(() => {
    const todo = todos[index];
    removeTodo(todo);
  }, [todos, removeTodo, index]);

  return (
    <button onClick={removeHandler}>Remove Random ({index})</button>
  );
}
