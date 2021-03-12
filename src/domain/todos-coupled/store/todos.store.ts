import Todo from './todo.model';
import TodoList from './todo-list.model';

const todoStore = new TodoList([new Todo("Get Coffee"), new Todo("Write simpler code")]);

export default todoStore;
