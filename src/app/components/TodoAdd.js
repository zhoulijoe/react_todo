import React, {Component, PropTypes} from 'react';

class TodoAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add todo" value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" value="+"/>
      </form>
    );
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text) {
      return;
    }

    this.props.addTodo(this.props.listId, this.state.text);
    this.setState({
      text: ''
    });
  }
}

TodoAdd.propTypes = {
  listId: PropTypes.number.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default TodoAdd;
