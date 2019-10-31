import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/auth';
import SettingsProvider from './context/settings/settings';
import Login from './components/auth/login';
import LoginContext from './components/auth/context';
import { When } from './components/if/index';

// State Only
import ToDo from './components/todo/todo.js';

// API Connected (Live Data)
import ToDoConnected from './components/todo/todo-connected.js';

export default class App extends React.Component {
  static contextType = LoginContext;

  render() {
    return (
      <SettingsProvider>
      <BrowserRouter>
          <nav>
            <ul>
            <When condition={!this.context.user}>
              <li><Link to="/login">Login (to access connected todo)</Link></li>
            </When>
            <When condition={this.context.user}>
              <li><Link to="/login" onClick={this.context.logout}>Logout</Link></li>
            </When>
              <li><Link to="/">Local ToDo</Link></li>
              <li><Link to="/connected">Connected ToDo</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/connected" component={ToDoConnected} />
            <Route component={ToDo} />
          </Switch>
          </BrowserRouter>
      </SettingsProvider>
    );
  }
}
