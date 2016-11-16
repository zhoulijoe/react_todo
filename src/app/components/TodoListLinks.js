import React, {Component, PropTypes} from 'react';
import NavLink from './NavLink';

class TodoListLinks extends Component {
  render() {
    return (
      <ul>
        {this.props.todoLists.map(todoList => (
          <li key={todoList.id}><NavLink to={`/lists/${todoList.id}`}>{todoList.title}</NavLink></li>
        ))}
      </ul>
    );
  }
}

TodoListLinks.propTypes = {
  todoLists: PropTypes.array.isRequired
};

export default TodoListLinks;
