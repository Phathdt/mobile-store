import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import Api from 'Api'

import "../styles/customs/signin.css"

injectTapEventPlugin()

class SignInPage extends Component {
  constructor(props) {
    super(props)

    let token = localStorage.getItem('token')
    if (token && token.length === 158) {
      this.props.history.push('/admin')
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
      await localStorage.setItem('token', resJson.Authorization)
      this.props.history.push('/admin')
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
    </div>
      // <div className="Login">
      //   <form onSubmit={this.handleSubmit}>
      //     <FormGroup controlId="username" bsSize="large">
      //       <ControlLabel>Username</ControlLabel>
      //       <FormControl
      //         autoFocus
      //         type="text"
      //         value={this.state.username}
      //         onChange={this.handleChange}
      //       />
      //     </FormGroup>
      //     <FormGroup controlId="password" bsSize="large">
      //       <ControlLabel>Password</ControlLabel>
      //       <FormControl
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //         type="password"
      //       />
      //     </FormGroup>
      //     <Button
      //       block
      //       bsSize="large"
      //       disabled={!this.validateForm()}
      //       type="submit"
      //     >
      //       Login
      //     </Button>
      //   </form>
      // </div>
    )
  }
}

export default SignInPage
