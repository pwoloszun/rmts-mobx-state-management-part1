import React from 'react';

import AllTodos from 'src/domain/todos-coupled/AllTodos';

export default function TodosCoupledPage(): React.ReactElement {
  return (
    <div>
      <h3>Todos list</h3>
      <AllTodos />
    </div>
  );
}
