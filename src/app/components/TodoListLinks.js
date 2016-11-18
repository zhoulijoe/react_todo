import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class TodoListLinks extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoLists.map(todoList => (
            <li key={todoList.id.toString()}><Link to={`/lists/${todoList.id}`}>{todoList.title}</Link></li>
          ))}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

TodoListLinks.propTypes = {
  todoLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  children: PropTypes.object
};

export default TodoListLinks;
