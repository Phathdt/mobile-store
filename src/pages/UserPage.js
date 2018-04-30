import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>page user</h1>
        <Link to="/signin">Signin</Link>
      </div>
    )
  }
}

export default UserPage
