import React from 'react';

import { useTodosContainer } from './FetchTodosWrapper';

export default function SharedTodoList(): React.ReactElement {
  const { todos } = useTodosContainer();

  return (
    <div>
      <ul>
        {
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
