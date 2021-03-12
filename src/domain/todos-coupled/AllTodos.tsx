import * as React from "react";

import TodoListView from './components/TodoListView';
import todoStore from './store/todos.store';

const AllTodos = (): React.ReactElement => {
  return (
    <TodoListView todoList={todoStore} />
  );
};

export default AllTodos;

