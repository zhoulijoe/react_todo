import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import AppContainer from './app/containers/AppContainer';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import MainSection from './app/components/MainSection';

import 'todomvc-app-css/index.css';
import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/lists/:listId" component={MainSection}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
