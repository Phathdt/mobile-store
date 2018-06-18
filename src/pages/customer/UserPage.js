import React, { Component } from 'react'

import UserPageHeader from './UserPageHeader.js'
import UserPageBody from './UserPageBody.js'

class UserPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token
    }
  }

  render() {
    return (
      <div>
        <UserPageHeader />
        <UserPageBody token={this.state.token} />
      </div>
    )
  }
}

export default UserPage
