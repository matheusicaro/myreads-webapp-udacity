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

const Login = (props) => {

  const { errorAcess, stopAnimeted, LoginForm, HowWork } = props;

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }

  const click = (event) => {
    props.open(event.target.id)
  }

  return (
    <div className="root">

      <div className="background-image"></div>

      <div className="parchment animated bounceInDown delay-1s">
        <div className="parchment-content">
          <div className="parchment-text-title">
            <span class="animated infinite flash slower" id="title">    MINHAS LEITURAS   </span>
          </div>

          <div className="parchment-text-welcome">
            <span class="animated zoomIn delay-3s"
              onAnimationIterationCapture={stopAnimeted} id="welcome">    BEM VINDO   </span>
          </div>

          <div className="parchment-button animated zoomIn delay-5s">

            <div className="parchment-button-whats ">
              <span className="parchment-button-click" onClick={click} id="HowWork">Como funciona?</span>
            </div>

            <div className="parchment-button-access">
              <span className="parchment-button-click" onClick={click} id="LoginForm">Login</span>
            </div>
          </div>
        </div>
      </div >


      {LoginForm && (
        <div className="parchment-secondary animated bounceInDown">
          <FormContainer create={create} logon={login} errorAcess={errorAcess}></FormContainer>
        </div>
      )}

      {HowWork && (
        <div className="parchment-secondary animated bounceInDown">
          <h1>TEEEEEEESTE</h1>
        </div>
      )}

    </div >
  )
}

export default Login

Login.propTypes = {

  createUser: PropTypes.func.isRequired,
  logon: PropTypes.func.isRequired,
};