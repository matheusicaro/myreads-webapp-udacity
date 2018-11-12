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

import IconButton from 'material-ui/IconButton';

// Import Components
import Icon from '../../components/presentation/Icon'
import { ICONS } from '../../media/icons/IconsSvg'

import '../../styles/pages/Login.css'
import 'animate.css'

import FormContainer from './FormContainer'
import Footer from '../../components/presentation/Footer'
import LanguagesBtn from '../../components/presentation/LanguagesBtn'

const Login = (props) => {

  const { errorAcess, stopAnimeted, LoginForm, HowWork, language } = props;

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
    props.open('HowWork');
  }

  const closeLoginForm = () => {
    props.open('LoginForm');
  }

  return (
    <div className="root">

      <div className="background-image"></div>

      <div className="parchment animated bounceInDown delay-1s">
        <div className="parchment-content">

          <span className="languagesBtn-overwrite">
            <LanguagesBtn changeLanguage={props.changeLanguage} button={language.buttonLanguage} />
          </span>

          <div className="parchment-text-title">
            <span className="animated infinite flash slower" id="title"> { language.title } </span>
          </div>

          <div className="parchment-text-welcome">
            <span className="animated zoomIn delay-3s"
              onAnimationIterationCapture={stopAnimeted} id="welcome">  { language.welcome } </span>
          </div>

          <div className="parchment-button animated zoomIn delay-5s">

            <div className="parchment-button-whats ">
              <span className="parchment-button-click" onClick={click} id="HowWork"> { language.howWork } </span>
            </div>

            <div className="parchment-button-access">
              <span className="parchment-button-click" onClick={click} id="LoginForm"> { language.login } </span>
            </div>
          </div>

          <Footer tooltipGit={language.tooltipGit} tooltipFacebook={language.tooltipFacebook} tooltipLinkedin={language.tooltipLinkedin} color={'styles.color'}></Footer>
        </div>
      </div >


      {LoginForm && (
        <div className="parchment-secondary animated bounceInDown">

          <FormContainer create={create} logon={login} errorAcess={errorAcess} language={language.formLogin}></FormContainer>

          <div className="login-button-close"><IconButton onClick={closeLoginForm} tooltip={language.tooltipClose}> <Icon icon={ICONS.CLOSE} color={'color'} /> </IconButton></div>
        </div>
      )}

      {HowWork && (
        <div className="parchment-secondary animated bounceInDown">
          <div className="how-work">

            { language.contentHowWork.map( (element, index) => <p key={index}> {element} </p> ) }

            <Footer tooltipGit={language.tooltipGit} tooltipFacebook={language.tooltipFacebook} tooltipLinkedin={language.tooltipLinkedin} color={'styles.color'}></Footer>

          <div className="login-button-close"><IconButton onClick={closeHowWork} tooltip={language.tooltipClose}> <Icon icon={ICONS.CLOSE} color={'color'} /> </IconButton></div>
          </div>
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