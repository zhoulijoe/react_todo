import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onFilterClicked(this.props.filter);
  }

  render() {
    const {filter, currentFilter, children} = this.props;

    if (filter !== currentFilter) {
      return <a href="#" onClick={this.handleClick}>{children}</a>;
    }

    return <span>{children}</span>;
  }
}

TodoFilter.propTypes = {
  children: PropTypes.string,
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterClicked: PropTypes.func.isRequired
};

export default TodoFilter;
