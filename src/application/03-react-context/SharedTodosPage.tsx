import React from 'react';
import { Card } from 'antd';

import SharedTodosCounter from 'src/domain/shared-todos-ctx/SharedTodosCounter';
import SharedTodoList from 'src/domain/shared-todos-ctx/SharedTodoList';
import FetchTodosWrapper from 'src/domain/shared-todos-ctx/FetchTodosWrapper';
import CreateRandomTodoButton from 'src/domain/shared-todos-ctx/CreateRandomTodoButton';
import RemoveRandomTodoButton from 'src/domain/shared-todos-ctx/RemoveRandomTodoButton';

export default function SharedTodosPage(): React.ReactElement {
  return (
    <FetchTodosWrapper>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>SharedTodosPage</h3>
        <Card style={{ width: 300 }}>
          <SharedTodosCounter />
        </Card>

        <Card>
          <CreateRandomTodoButton />
          <RemoveRandomTodoButton />
        </Card>

        <hr />

        <div>
          <SharedTodoList />
          <SharedTodoList />
        </div>
      </div>
    </FetchTodosWrapper>
  );
}
