import React from 'react'

import User from './User'

const UserContainer = (props) => {
  if (props.background) props.changeStyle(false)

  return (
    <User language={props.language} />
  )
}

export default UserContainer
