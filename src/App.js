import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from './Admin';

// pages
import UserPage from 'pages/UserPage';
import SignInPage from 'pages/SignInPage';

import './styles/reduction.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>

          <Switch>
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
