import { useState, useCallback, useMemo } from 'react';

import { Todo, TodoParams } from '../types/todo';

export interface UseTodosResult {
  todos: Todo[];
  createTodo(params: TodoParams): void;
  removeTodo(todo: Todo): void;
  setManyTodos(todos: Todo[]): void;
};

export type UseTodosFn = typeof useTodos;

export default function useTodos(initialTodos: Todo[]): UseTodosResult {
  const [todos, setTodos] = useState<Todo[]>([...initialTodos]);

  const createTodo = useCallback(({ title, description }: TodoParams): void => {
    const nextTodos = [...todos, { title, description, id: Math.random() }];
    setTodos(nextTodos);
  }, [todos]);

  const removeTodo = useCallback((todo: Todo): void => {
    const nextTodos = todos.filter((t) => t !== todo);
    setTodos(nextTodos);
  }, [todos]);

  const setManyTodos = useCallback((todos: Todo[]): void => {
    const nextTodos = [...todos];
    setTodos(nextTodos);
  }, []);

  const todosService = useMemo(() => {
    return {
      todos,
      createTodo,
      removeTodo,
      setManyTodos,
    };
  }, [todos, createTodo, removeTodo, setManyTodos]);

  return todosService;
}
