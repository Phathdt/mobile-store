import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Admin from './Admin'

// pages
import UserPage from 'pages/customer/UserPage'
import SignInPage from 'pages/SignInPage'
import ModelDetails from 'pages/customer/ModelDetails'
import CartPage from 'pages/customer/CartPage'
import ProductInBrand from 'pages/customer/ProductInBrand'
import MyCart from 'pages/customer/MyCart'
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

const OpenRoute = ({ component: Component, customProps, ...rest }) => (
  Authen.authenticate() ? console.log('Da Dang Nhap') : console.log('Chua DN'),
  (
    <Route
      {...rest}
      render={props => (
        <Component {...props} token={Authen.token} customProps={customProps} />
      )}
    />
  )
)

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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <OpenRoute exact path="/" component={UserPage} />
            <Route path="/signin" component={SignInPage} />
            <OpenRoute path="/variant/details/:id" component={ModelDetails} />
            <OpenRoute
              path="/model/listproducts/:modelID"
              component={ProductInBrand}
            />
            <OpenRoute
              path="/brand/listproducts/:brandName"
              component={ProductInBrand}
            />
            <PrivateRoute path="/my_cart" component={MyCart} />
            <Route path="/cart" component={CartPage} />
          </Switch>

          <Switch>
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
