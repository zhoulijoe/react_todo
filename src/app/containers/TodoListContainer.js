import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions/index';
import TodoList from '../components/TodoList';
import TodoQuery from '../store/TodoQuery';

function mapStateToProps(state, ownProps) {
  return {
    todos: TodoQuery.getTodosInList(state, Number(ownProps.params.listId))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
