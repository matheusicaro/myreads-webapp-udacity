import React, { Component } from 'react'

import User from './User'

class UserContainer extends Component {
  render () {
    return (
      <User language={this.props.language} />
    )
  }
}

export default UserContainer
