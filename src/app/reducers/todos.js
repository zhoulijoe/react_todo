import {ADD_TODO, TOGGLE_COMPLETE_TODO} from '../constants/ActionTypes';

export default function todos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todoId = Object.keys(state).reduce((maxId, todoId) => Math.max(Number(todoId), maxId), 0) + 1;

      return {
        ...state,
        [todoId.toString()]: {
          id: todoId,
          completed: false,
          text: action.text,
          todoList: action.listId
        }
      };
    }
    case TOGGLE_COMPLETE_TODO: {
      const idStr = action.id.toString();

      return {
        ...state,
        [idStr]: {
          ...state[idStr],
          completed: !state[idStr].completed
        }
      };
    }
    default:
      return state;
  }
}
