import React, { Component } from 'react'

import UserPageHeader from './UserPageHeader.js'
import UserPageBody from './UserPageBody.js'

class UserPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <UserPageHeader />
        <UserPageBody token={this.props.token} />
      </div>
    )
  }
}

export default UserPage
