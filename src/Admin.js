import React from 'react';

import componentQueries from 'react-component-queries';

import { Route, Switch, Redirect } from 'react-router-dom';

// layouts
import { Header, Sidebar, Content, Footer } from 'components/Layout';

import GAListener from 'components/GAListener';

// pages
import DashboardPage from 'pages/DashboardPage';
import ListBrandPage from 'pages/brand/ListBrandPage';
import NewBrandPage from 'pages/brand/NewBrandPage';

import './styles/reduction.css';

const fakeAuth = {
  isAuthenticated: true,
  token:
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyNTI2NTg1N30.s8-ZUiHemqdEPWoEFvYsPEuSDVi7OqhiTJmyMlIQSxJ5BjBdgwoGVHcZ-SL7RC-QjFJY2feAkACspmpr0H6pgw',
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} token={fakeAuth.token} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Admin extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);
  }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      Admin.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    return (
      <GAListener>
        <main className="cr-app bg-light">
          <Sidebar />
          <Content fluid onClick={this.handleContentClick}>
            <Header />
            <Switch>
              <Redirect exact from="/admin" to="/admin/dashboard" />
              <PrivateRoute path="/admin/dashboard" component={DashboardPage} />
              <PrivateRoute
                exact
                path="/admin/brands"
                component={ListBrandPage}
              />
              <PrivateRoute path="/admin/brands/new" component={NewBrandPage} />
            </Switch>
            <Footer />
          </Content>
        </main>
      </GAListener>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(Admin);
