import {compareId} from '../utils/sorting';

class TodoListQuery {
  static getTodoLists(state) {
    const todoLists = state.entities.todoLists;

    return Object.keys(todoLists).map(id => todoLists[id]).sort(compareId);
  }
}

export default TodoListQuery;
