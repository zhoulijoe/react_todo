import todoLists from './todoLists';
import todos from './todos';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  todoLists,
  todos
});

export default entitiesReducer;
