import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Admin from './Admin'

// pages
import UserPage from 'pages/customer/UserPage'
import SignInPage from 'pages/SignInPage'
import ModelDetails from 'pages/customer/ModelDetails'
import CartPage from 'pages/customer/CartPage'
import ProductInBrand from 'pages/customer/ProductInBrand'
import './styles/reduction.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/variant/details/:id" component={ModelDetails} />
            <Route path="/listproducts/:name" component={ProductInBrand} />
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
