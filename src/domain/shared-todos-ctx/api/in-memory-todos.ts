import { delayedValue } from 'src/utils';

import { Todo } from '../types/todo';

const TODOS_DATA: Todo[] = [
  { id: 100, title: 'Buy milk', description: 'important' },
  { id: 200, title: 'Do homework', description: 'Math, physics' },
  { id: 300, title: 'Buy bread' },
  { id: 400, title: 'Some other task' },
  { id: 500, title: 'Workout', description: '8am' },
];

export function fetchAllTodos(): Promise<Todo[]> {
  return delayedValue(TODOS_DATA, 800);
}
