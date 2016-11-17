import todoLists from './todoLists';
import todos from './todos';

export default function entities(state = {}, action) {
  return {
    todoLists: todoLists(state.todoLists, action),
    todos: todos(state.todos, action)
  };
}
