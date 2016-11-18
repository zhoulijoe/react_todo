import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';
import TodoFilter from './TodoFilter';
import TodoAdd from './TodoAdd';
import {withRouter} from 'react-router';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
      filter: SHOW_ALL
    };
  }

  componentDidMount() {
    if (!this.props.location.query.filter) {
      this.props.router.replace({pathname: this.props.location.pathname, query: {filter: SHOW_ALL}});
    }

    this.syncFilterWithQuery(this.props.location.query);
  }

  componentWillReceiveProps(nextProps) {
    this.syncFilterWithQuery(nextProps.location.query);
  }

  render() {
    const {actions} = this.props;
    const filteredTodos = this.filterTodos(this.state.filter);

    return (
      <div>
        <TodoAdd listId={Number(this.props.params.listId)} {...actions}/>
        {filteredTodos.length > 0 ? (
          <ul>
            {filteredTodos.map(todo =>
              <TodoItem
                key={todo.id.toString()}
                todo={todo}
                {...actions}
                />
            )}
          </ul>
        ) : (
          <p>Nothing to do</p>
        )}
        <p>
          Show:
          {' '}
          <TodoFilter
            filter={SHOW_ALL}
            currentFilter={this.state.filter}
            onFilterClicked={this.handleFilterChange}
            >
            All
          </TodoFilter>
          {', '}
          <TodoFilter
            filter={SHOW_COMPLETED}
            currentFilter={this.state.filter}
            onFilterClicked={this.handleFilterChange}
            >
            Completed
          </TodoFilter>
          {', '}
          <TodoFilter
            filter={SHOW_ACTIVE}
            currentFilter={this.state.filter}
            onFilterClicked={this.handleFilterChange}
            >
            Active
          </TodoFilter>
        </p>
      </div>
    );
  }

  syncFilterWithQuery(query) {
    if (query.filter) {
      this.setState({
        filter: query.filter
      });
    }
  }

  filterTodos(filter) {
    return this.props.todos.filter(todo => {
      if (filter === SHOW_COMPLETED) {
        return todo.completed;
      } else if (filter === SHOW_ACTIVE) {
        return !todo.completed;
      }

      return true;
    });
  }

  handleFilterChange(newFilter) {
    this.setState({
      filter: newFilter
    });

    this.props.router.push({pathname: this.props.location.pathname, query: {filter: newFilter}});
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    todoList: PropTypes.number.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(TodoList);
