import React, { Component } from 'react'

import UserPageHeader from './UserPageHeader.js'
import UserPageBody from './UserPageBody.js'

class UserPage extends Component {
  render() {
    return (
      <div>
        <UserPageHeader/>
        <UserPageBody/>
      </div>
    )
  }
}

export default UserPage
