import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { HOST } from '../Constants';
injectTapEventPlugin();

class SignInPage extends Component {
  constructor(props) {
    super(props);

    let token = localStorage.getItem('token');
    if (token && token.length === 158) {
      this.props.history.push('/admin');
    }

    this.state = {
      username: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await fetch(`${HOST}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.state.username,
          password: this.state.password
        })
      });

      if (res.status === 401) {
        alert('Tài khoản hoặc mật khẩu sai, xin kiểm tra lại');
      } else {
        let resJson = await res.json();
        await localStorage.setItem('token', resJson.Authorization);
        this.props.history.push('/admin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInPage;
