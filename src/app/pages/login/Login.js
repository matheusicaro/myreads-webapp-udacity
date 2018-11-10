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
            <LanguagesBtn changeLanguage={'props.changeLanguage'} button={'header.buttonLanguage'} />
          </span>

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

          <Footer tooltipGit={'header.tooltipGit'} tooltipFacebook={'header.tooltipFacebook'} tooltipLinkedin={'header.tooltipLinkedin'} color={'styles.color'}></Footer>
        </div>
      </div >


      {LoginForm && (
        <div className="parchment-secondary animated bounceInDown">

          <FormContainer create={create} logon={login} errorAcess={errorAcess}></FormContainer>
          <div className="login-button-close"><IconButton onClick={closeLoginForm} tooltip={'tooltipGit'}> <Icon icon={ICONS.CLOSE} color={'color'} /> </IconButton></div>

        </div>
      )}

      {HowWork && (
        <div className="parchment-secondary animated bounceInDown">
          <div className="how-work">
            <p>Minhas Leituras é um aplicativo de estante de livros que permite selecionar e categorizar os livros que leu, está lendo no momento ou deseja ler.</p>
            <p> Este projeto foi proposto pelo curso de **React** realizado pela **Udacity** em Outubro de 2018.</p>
            <p>O projeto enfatiza o uso do React e para mais detalhes tecnicos do aplicativo, verifique o seu repositorio.</p>

            <Footer tooltipGit={'header.tooltipGit'} tooltipFacebook={'header.tooltipFacebook'} tooltipLinkedin={'header.tooltipLinkedin'} color={'styles.color'}></Footer>

            <span><IconButton onClick={closeHowWork} tooltip={'tooltipGit'}> <Icon icon={ICONS.CLOSE} color={'color'} /> </IconButton></span>
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