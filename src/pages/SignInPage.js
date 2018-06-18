import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

import Api from 'Api'

import "../styles/customs/signin.css"

injectTapEventPlugin()

class SignInPage extends Component {
  constructor(props) {
    super(props)

    let token = localStorage.getItem('token')
    let roles = JSON.parse(localStorage.getItem('roles') || '[]')

    if (token && token.length === 158) {
      if (roles.includes('ADMIN')) {
        this.props.history.push('/admin')
      } else {
        this.props.history.push('/')
      }
    }

    this.state = {
      username: '',
      password: ''
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const body = {
      userName: this.state.username,
      password: this.state.password
    }
    let res = await Api.signIn(body)

    if (res.status === 401) {
      alert('Tài khoản hoặc mật khẩu sai, xin kiểm tra lại')
    } else {
      let resJson = await res.json()

      let roles = resJson.roles.map(r => r.authority)
      await localStorage.setItem('token', resJson.Authorization)
      await localStorage.setItem('roles', JSON.stringify(roles))
      await localStorage.setItem('username', this.state.username)
      if (roles.includes('ADMIN')) {
        this.props.history.push('/admin')
      } else {
        this.props.history.push('/')
      }
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
             <form className="login-form" onSubmit={this.handleSubmit}>
              <FormGroup controlId="username">
                <FormControl
                  className="input"
                  autoFocus
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormControl
                  placeholder="username"
                  className="input"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                className="loginBtn"
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
         </form>
        </div>
    </div>
    )
  }
}

export default SignInPage
