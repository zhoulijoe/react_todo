import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return {type: types.ADD_TODO, text};
}

export function deleteTodo(id) {
  return {type: types.DELETE_TODO, id};
}

export function editTodo(id, text) {
  return {type: types.EDIT_TODO, id, text};
}

export function toggleCompleteTodo(id) {
  return {type: types.TOGGLE_COMPLETE_TODO, id};
}

export function clearCompleted() {
  return {type: types.CLEAR_COMPLETED};
}
