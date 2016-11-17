import {ADD_TODO, TOGGLE_COMPLETE_TODO} from '../constants/ActionTypes';

export default function todos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todoId = Object.keys(state).reduce((maxId, todoId) => Math.max(todoId, maxId), 0) + 1;

      return {
        ...state,
        [todoId]: {
          id: todoId,
          completed: false,
          text: action.text
        }
      };
    }
    case TOGGLE_COMPLETE_TODO: {
      const newState = {
        ...state
      };

      newState[action.id].completed = !newState[action.id].completed;

      return newState;
    }
    default:
      return state;
  }
}
