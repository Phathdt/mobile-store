import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import UserPageFooter from './UserPageFooter';

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

class CartPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/cart" component={UserPageFooter} /> 
                    {/* Chưa có trang cart nên thí dụ dùng cái này  */}
          </Switch>
        <h2>CART PAGE</h2>
      </div>
    )
  }
}

export default CartPage
