import * as types from '../constants/ActionTypes';

export function addTodo(listId, text) {
  return {
    type: types.ADD_TODO,
    listId,
    text
  };
}

export function toggleCompleteTodo(id) {
  return {
    type: types.TOGGLE_COMPLETE_TODO,
    id
  };
}
