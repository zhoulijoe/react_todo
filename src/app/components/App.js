import React, {Component, PropTypes} from 'react';
import TodoListLinks from './TodoListLinks';

class App extends Component {
  render() {
    const todoLists = [
      {
        id: 1,
        title: 'list 1'
      },
      {
        id: 2,
        title: 'list 2'
      }
    ];

    return (
      <div>
        <TodoListLinks todoLists={todoLists}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default App;
