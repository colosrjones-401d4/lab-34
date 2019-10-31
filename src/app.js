import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SettingsProvider from './context/settings/settings';

// State Only
import ToDo from './components/todo/todo.js';

// API Connected (Live Data)
import ToDoConnected from './components/todo/todo-connected.js';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Local ToDo</Link></li>
              <li><Link to="/connected">Connected ToDo</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/connected" component={ToDoConnected} />
            <Route component={ToDo} />
          </Switch>
          </BrowserRouter>
      </SettingsProvider>
    );
  }
}
