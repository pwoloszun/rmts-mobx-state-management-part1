import { makeObservable, observable, computed } from "mobx";

import Todo from './todo.model';

export default class TodoList {
  todos: Todo[] = [];

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    });
    this.todos = todos;
  }
}
