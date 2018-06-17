import React from 'react'

import componentQueries from 'react-component-queries'

import { Route, Switch, Redirect } from 'react-router-dom'

// layouts
import { Header, Sidebar, Content, Footer } from 'components/Layout'

import GAListener from 'components/GAListener'

// pages
import DashboardPage from 'pages/DashboardPage'
import ListBrandPage from 'pages/brand/ListBrandPage'
import NewBrandPage from 'pages/brand/NewBrandPage'
import ShowBrandPage from 'pages/brand/ShowBrandPage'
import EditBrandPage from 'pages/brand/EditBrandPage'

import ListModelPage from 'pages/model/ListModelPage'
import NewModelPage from 'pages/model/NewModelPage'
import ShowModelPage from 'pages/model/ShowModelPage'
import EditModelPage from 'pages/model/EditModelPage'

import ListVariantPage from 'pages/variant/ListVariantPage'
import NewVariantPage from 'pages/variant/NewVariantPage'
import ShowVariantPage from 'pages/variant/ShowVariantPage'
import EditVariantPage from 'pages/variant/EditVariantPage'

import ListSupplierPage from 'pages/supplier/ListSupplierPage'
import NewSupplierPage from 'pages/supplier/NewSupplierPage'
import ShowSupplierPage from 'pages/supplier/ShowSupplierPage'
import EditSupplierPage from 'pages/supplier/EditSupplierPage'

import ListOrderStockPage from 'pages/orderStock/ListOrderStockPage'
import NewOrderStockPage from 'pages/orderStock/NewOrderStockPage'
// import ShowSupplierPage from 'pages/orderStock/ShowSupplierPage'
// import EditSupplierPage from 'pages/orderStock/EditSupplierPage'

// comment
import './styles/reduction.css'

const Authen = {
  isAuthenticated: false,
  token: '',
  authenticate(cb) {
    let token = localStorage.getItem('token')
    if (token && token.length === 158) {
      this.isAuthenticated = true
      this.token = token
      return true
    } else {
      return false
    }
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, customProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Authen.authenticate() ? (
        <Component {...props} token={Authen.token} customProps={customProps} />
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
)

class Admin extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open')
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint)
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint)
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
      this.openSidebar('close')
    }
  }

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close')

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open')
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open')
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open')
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
              <PrivateRoute
                path="/admin/brands/:id/edit"
                component={EditBrandPage}
              />
              <PrivateRoute
                path="/admin/brands/:id"
                component={ShowBrandPage}
              />

              <PrivateRoute
                exact
                path="/admin/models"
                component={ListModelPage}
              />
              <PrivateRoute path="/admin/models/new" component={NewModelPage} />
              <PrivateRoute
                path="/admin/models/:id/edit"
                component={EditModelPage}
              />
              <PrivateRoute
                path="/admin/models/:id"
                component={ShowModelPage}
              />

              <PrivateRoute
                exact
                path="/admin/variants"
                component={ListVariantPage}
              />
              <PrivateRoute
                path="/admin/variants/new"
                component={NewVariantPage}
              />
              <PrivateRoute
                path="/admin/variants/:id/edit"
                component={EditVariantPage}
              />
              <PrivateRoute
                path="/admin/variants/:id"
                component={ShowVariantPage}
              />

              <PrivateRoute
                exact
                path="/admin/suppliers"
                component={ListSupplierPage}
              />
              <PrivateRoute
                path="/admin/suppliers/new"
                component={NewSupplierPage}
              />
              <PrivateRoute
                path="/admin/suppliers/:id/edit"
                component={EditSupplierPage}
              />
              <PrivateRoute
                path="/admin/suppliers/:id"
                component={ShowSupplierPage}
              />

              <PrivateRoute
                exact
                path="/admin/order_stocks"
                component={ListOrderStockPage}
              />

              <PrivateRoute
                exact
                path="/admin/order_stocks/new"
                component={NewOrderStockPage}
              />
            </Switch>
            <Footer />
          </Content>
        </main>
      </GAListener>
    )
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' }
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' }
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' }
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' }
  }

  if (width > 1200) {
    return { breakpoint: 'xl' }
  }

  return { breakpoint: 'xs' }
}

export default componentQueries(query)(Admin)
