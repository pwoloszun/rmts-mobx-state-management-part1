import * as React from "react";
import { observer } from "mobx-react-lite";

import TodoList from '../store/todo-list.model';
import TodoView from './TodoView';

interface Props {
  todoList: TodoList;
}

const TodoListView = observer(({ todoList }: Props): React.ReactElement => {
  return (
    <div>
      <ul>
        {
          todoList.todos.map((todo) => <TodoView todo={todo} key={todo.id} />)
        }
      </ul>
      <p>
        Tasks left: {todoList.unfinishedTodoCount}
      </p>
    </div>
  );
});

export default TodoListView;

