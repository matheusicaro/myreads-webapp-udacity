import React, { Component } from 'react'
import { PATH } from './constants'

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    auth: true,
    language: 'pt-BR',
    styleHide: {},
    loading: false,
    theme: PATH.theme.dark
  }

  logon = (auth) => {
    if (auth) this.setState({ auth })
  }

  changeLanguage = (value) => {
    this.setState({
      language: value
    })
  }

  hideBackground = (value) => {
    (value) ? this.setState({ styleHide: { display: 'none' } }) : this.setState({ styleHide: {} })
  }

  logout = () => {
    this.setState({ auth: false })
  }

  changeTheme = () => {
    const oldTheme = this.state.theme === PATH.theme.dark
    this.setState({ theme: (oldTheme ? PATH.theme.light : PATH.theme.dark) })
  }

  render () {
    return (
      <MyContext.Provider value={{
        state: this.state,
        logon: this.logon,
        changeLanguage: this.changeLanguage,
        hideBackground: this.hideBackground,
        logOut: this.logout,
        changeTheme: this.changeTheme
      }}>

        {this.props.children}

      </MyContext.Provider>
    )
  }
}
