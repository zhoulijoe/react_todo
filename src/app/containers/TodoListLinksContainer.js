import {connect} from 'react-redux';
import TodoListLinks from '../components/TodoListLinks';
import TodoListQuery from '../store/TodoListQuery';

function mapStateToProps(state) {
  return {
    todoLists: TodoListQuery.getTodoLists(state)
  };
}

export default connect(
  mapStateToProps
)(TodoListLinks);
