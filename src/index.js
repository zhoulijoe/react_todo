import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/components/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import TodoListContainer from './app/containers/TodoListContainer';
import Home from './app/components/Home';
import About from './app/components/About';
import TodoListLinksContainer from './app/containers/TodoListLinksContainer';

import './index.scss';

const initialState = {
  entities: {
    todoLists: {
      1: {
        id: 1,
        title: 'Work'
      },
      2: {
        id: 2,
        title: 'Personal'
      }
    },
    todos: {
      1: {
        id: 1,
        text: 'Use Redux',
        completed: false,
        todoList: 1
      },
      2: {
        id: 2,
        text: 'Write code',
        completed: false,
        todoList: 1
      },
      3: {
        id: 3,
        text: 'Buy stuff',
        completed: false,
        todoList: 2
      },
      4: {
        id: 4,
        text: 'Clean home',
        completed: false,
        todoList: 2
      }
    }
  }
};

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>

        <Route path="/lists">
          <IndexRoute component={TodoListLinksContainer}/>

          <Route path="/lists/:listId" component={TodoListContainer}/>
        </Route>

        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
