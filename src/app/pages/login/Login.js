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

  const { errorAcess } = props;

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }

  return (
    <div className="root">

        <div className="folder">
          <p class="folder-title">Bem Vindo à Minhas Leituras!</p>
          <p class="folder-intro">Aqui você poderá ter sua biblioteca virtual e realizar tarefas como:</p>
          <p class="folder-topic-1">* Buscar por livros na biblioteca...</p>
          <p class="folder-topic-2">* Adicionar livros em sua prateleira...</p>
          <p class="folder-topic-3">* Gerenciar suas leituras.</p>
        </div>        
        
        <div className="login">
          <FormContainer create={create} logon={login} errorAcess={errorAcess}></FormContainer>
        </div>

    </div >
  )
}

export default Login

Login.propTypes = {

  createUser: PropTypes.func.isRequired,
  logon: PropTypes.func.isRequired,
};