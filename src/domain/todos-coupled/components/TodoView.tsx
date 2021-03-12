import * as React from "react";
import { observer } from "mobx-react-lite";

import Todo from '../store/todo.model';

interface Props {
  todo: Todo;
}

const TodoView = observer(({ todo }: Props): React.ReactElement => (
  <li>
    <label>
      <input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
      {todo.title}
    </label>
  </li>
));

export default TodoView;
