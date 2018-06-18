import React, { Component } from 'react'
import SearchInput from 'components/SearchInput'
import '../../styles/customs/customer.css'
import { Link } from 'react-router-dom'

class UserPageHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      token: '',
      isAuthen: false
    }
  }

  async componentWillMount() {
    let token = localStorage.getItem('token')
    if (token && token.length > 100) {
      let name = localStorage.getItem('username')
      await this.setState({
        token: token,
        name: name,
        isAuthen: true
      })
    }
  }

  render() {
    let name
    if (this.state.isAuthen) {
      name = (
        <div className="col-lg-3 vJustifyCenter">
          <div className="row">
            <div className="col-lg-6">
              <h3>{this.state.name}</h3>
            </div>
            <div className="col-lg-6">
              <Link to={'/my_cart'}>
                <h3>My cart</h3>
              </Link>
            </div>
          </div>
        </div>
      )
    } else {
      name = (
        <div className="col-lg-3 vJustifyCenter">
          <div className="linkSign">
            <a href="/signin">Signin </a>
            /
            <a href="/signup"> Sign up</a>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="row headerStyle">
          <div className="col-lg-3" align="right">
            <a href="/">
              <img
                src={require('../../styles/images/logo.png')}
                style={{ maxHeight: '38px' }}
              />
            </a>
          </div>
          <div className="col-lg-6">
            <SearchInput size="40" />
          </div>
          {name}
        </div>
      </div>
    )
  }
}

export default UserPageHeader
