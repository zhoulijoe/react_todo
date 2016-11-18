import React, {Component, PropTypes} from 'react';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
