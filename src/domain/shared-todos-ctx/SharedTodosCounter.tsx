import React from 'react';

import { useTodosContainer } from './FetchTodosWrapper';

export default function SharedTodosCounter(): React.ReactElement {
  const { todos } = useTodosContainer();

  return (
    <h3>Total todos: {todos.length}</h3>
  );
}
