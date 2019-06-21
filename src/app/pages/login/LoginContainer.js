/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Login'. All error information
* is passed by this component, which also includes the users
* registered in the state of the component.
*
* TODO: An integration with a database (Firebase) will be implemented in
*       the future for the storage of the registered users and data of the
*       books and shelves.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import Login from './Login'

class LoginContainer extends Component {
  constructor () {
    super()
    this.state = {
      users: [],
      errorAcess: '',
      LoginForm: false,
      HowWork: false
    }
  }

    logon = (user) => {
      const { users } = this.state

      if (users.length > 0) {
        users.forEach(userdb => {
          if (userdb.email === user.email) {
            if (userdb.pass === user.pass) {
              this.props.isLogged(true)
            } else { this.setState({ errorAcess: 'E-mail ou senha inválidos!' }) }
          } else { this.setState({ errorAcess: 'Usuario não encontrado!' }) }
        })
      } else {
        this.setState({ errorAcess: 'Usuario não encontrado!' })
      }
    }

    createUser = (user) => {
      const { users } = this.state
      const logins = []

      if (users.length > 0) {
        users.map(user => logins.push(user.email))
      }

      if (logins.indexOf(user.email) > -1) {
        this.setState({ errorAcess: 'Este e-mail já encontra-se cadastrado!' })
      } else {
        users.push(user)
        this.setState({
          users,
          errorAcess: ''
        })
        window.alert('CADASTRO EFETUADO COM SUCESSO!')
      }
    }

    stopAnimeted = () => {
      setTimeout(() => {
        let element = document.getElementById('welcome')
        element.classList.remove('zoomIn')
      }, 2000)
    }

    openFild = (newFild) => {
      if (this.state[newFild]) { this.setState({ [newFild]: !this.state[newFild] }) } else {
        let currentFild = (newFild === 'LoginForm') ? ('HowWork') : ('LoginForm')
        this.setState({ [newFild]: !this.state[newFild], [currentFild]: false })
      }
    }

    render () {
      const { errorAcess, LoginForm, HowWork } = this.state
      const { language, changeLanguage } = this.props
      return (
        <div>
          <Login
            logon={this.logon}
            createUser={this.createUser}
            stopAnimeted={this.stopAnimeted}
            open={this.openFild}
            errorAcess={errorAcess}
            LoginForm={LoginForm}
            HowWork={HowWork}
            changeLanguage={changeLanguage}
            language={language}
          />
        </div>
      )
    }
}

export default LoginContainer
