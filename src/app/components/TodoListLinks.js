import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class TodoListLinks extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoLists.map(todoList => (
            <li key={todoList.id}><Link to={`/lists/${todoList.id}`}>{todoList.title}</Link></li>
          ))}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

TodoListLinks.propTypes = {
  todoLists: PropTypes.array.isRequired,
  children: PropTypes.object
};

export default TodoListLinks;
