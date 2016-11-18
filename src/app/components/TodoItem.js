import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.toggleCompleteTodo(this.props.todo.id);
  }

  render() {
    const {todo} = this.props;

    return (
      <li
        className={classnames({
          completed: todo.completed
        })}
        >
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleChange}
            />
          <label>
            {todo.text}
          </label>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    todoList: PropTypes.number.isRequired
  }).isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
