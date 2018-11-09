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
import 'animate.css'

import FormContainer from './FormContainer'
import backgroundImage from '../../media/images/book-home.jpg'

const Login = (props) => {

  const { errorAcess, stopAnimeted } = props;

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }


  return (
    <div className="root">

      <img src={backgroundImage} alt="Background" width="100%" height="100%"/>

      <div className="folder animated bounceInLeft delay-1s">

        <div className="folder-text">
          <div className="folder-text-title">
            <p class="animated infinite flash slower" id="title">    MINHAS LEITURAS   </p>
          </div>

          <div className="folder-text-welcome">
            <p class="animated zoomIn delay-4s"
              onAnimationIterationCapture={stopAnimeted} id="welcome">    BEM VINDO   </p>
          </div>
        </div>

        <div className="folder-button">
          <div className="folder-button-whats">
            <FormContainer create={create} logon={login} errorAcess={errorAcess}> TESTANDO</FormContainer>
          </div>

          <div className="folder-button-access">
            <FormContainer create={create} logon={login} errorAcess={errorAcess}> ACESSO </FormContainer>
          </div>
        </div>

      </div >
    </div >
  )
}

export default Login

Login.propTypes = {

  createUser: PropTypes.func.isRequired,
  logon: PropTypes.func.isRequired,
};