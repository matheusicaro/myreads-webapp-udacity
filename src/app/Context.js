import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    auth: true,
    language: 'pt-BR',
    styleHide: {},
    loading: false
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

  render () {
    return (
      <MyContext.Provider value={{
        state: this.state,
        logon: this.logon,
        changeLanguage: this.changeLanguage,
        hideBackground: this.hideBackground,
        logOut: this.logout
      }}>

        {this.props.children}

      </MyContext.Provider>
    )
  }
}
