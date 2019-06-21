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

import './styles.css'

import FormContainer from './components/FormContainer'
import Parchment from './components/Parchment'
import HowWorkComponent from './components/HowWork'
import Footer from '../../components/presentation/Footer'

const Login = (props) => {
  const { errorAcess, stopAnimeted, LoginForm, HowWork, language } = props

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }

  const click = (event) => {
    props.open(event.target.id)
  }

  const closeHowWork = () => {
    props.open('HowWork')
  }

  const closeLoginForm = () => {
    props.open('LoginForm')
  }

  return (
    <div className='login-root'>

      <Parchment
        stopAnimeted={stopAnimeted}
        changeLanguage={props.changeLanguage}
        language={language}
        onclick={click}
      />

      { LoginForm && (
        <FormContainer
          create={create}
          logon={login}
          errorAcess={errorAcess}
          language={language.formLogin}

          closeLoginForm={closeLoginForm}
          languageButton={language.tooltipClose}
        />
      )}

      { HowWork && <HowWorkComponent language={language} closeHowWork={closeHowWork} />}

      <Footer
        tooltipGit={language.tooltipGit}
        tooltipFacebook={language.tooltipFacebook}
        tooltipLinkedin={language.tooltipLinkedin}
        color={'styles.color'} />
    </div >
  )
}

export default Login

Login.propTypes = {

  createUser: PropTypes.func.isRequired,
  logon: PropTypes.func.isRequired
}
