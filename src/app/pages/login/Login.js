/*
* DESCRIPTION
*
* This component is responsible for set up a page that contains information
* about the application and a registration and access form on the page.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/pages/Login.css'

import FormContainer from './FormContainer'

const Login = (props) => {

  const {errorAcess} = props;

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }

  return (
    <div className="slider">
      <div className="load">
        <div className="menu-login">
          <FormContainer create={create} logon={login} errorAcess={errorAcess}></FormContainer>
        </div>
      </div>
    </div >
  )
}

export default Login

Login.propTypes = {

  createUser: PropTypes.func.isRequired,
  logon: PropTypes.func.isRequired,
};