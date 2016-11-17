import {compareId} from '../utils/sorting';

class TodoQuery {
  static getTodosInList(state, todoListId) {
    const todos = state.entities.todos;

    return Object.keys(todos).map(id => todos[id]).filter(todo => todo.todoList === todoListId).sort(compareId);
  }
}

export default TodoQuery;
