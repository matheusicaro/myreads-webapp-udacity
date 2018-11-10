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
import image from '../../media/images/book-home.jpg'

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

      <div className="background-image"></div>


      <div className="folder animated bounceInDown delay-1s">
        <div className="folder-content">
          <div className="folder-text-title">
            <span class="animated infinite flash slower" id="title">    MINHAS LEITURAS   </span>
          </div>

          <div className="folder-text-welcome">
            <span class="animated zoomIn delay-3s"
              onAnimationIterationCapture={stopAnimeted} id="welcome">    BEM VINDO   </span>
          </div>

          <div className="folder-button animated zoomIn delay-5s">
            <div className="folder-button-whats ">
              <FormContainer word={'Como Funciona?'} create={create} logon={login} errorAcess={errorAcess}></FormContainer>
            </div>

            <div className="folder-button-access">
              <FormContainer word={'Acessar'} create={create} logon={login} errorAcess={errorAcess}></FormContainer>
            </div>
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