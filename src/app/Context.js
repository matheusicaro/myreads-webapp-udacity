import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    auth: true,
    language: '',
  }

  logon = (auth) => {
    if (auth) this.setState({ auth })
  }

  changeLanguage = (e) => {
    this.setState({
      language: e.target.dataset.language
    })

  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        logon: this.logon,
        changeLanguage: this.changeLanguage,
      }}>

        {this.props.children}

      </MyContext.Provider>
    )
  }
}