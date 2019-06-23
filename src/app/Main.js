import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { merge } from 'lodash'

// Import Context
import { MyContext } from './Context'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Home from '../app/pages/home/HomeContainer'
import Search from '../app/pages/search/SearchContainer'
import Login from './pages/login/LoginContainer'
import User from './pages/user/UserContainer'
import { HeaderContainer as Header } from './components/header'

// Import Languages
import * as translations from './locale'

import './Main.css'

class Main extends Component {
  state = { background: true }

  setBackground = (value) => this.setState({ background: value })

  isAuthorized = ({ changeLanguage, changeTheme, logOut, state, hideBackground }) => {
    const { home, search, header, userProfile } = translations[state.language]

    const homeScreen = () => (
      <Home
        theme={state.theme}
        language={home}
        styleHide={state.styleHide}
        changeStyle={this.setBackground}
        background={this.state.background}
      />
    )
    const searchScreen = () => (
      <Search
        theme={state.theme}
        language={search}
        changeStyle={this.setBackground}
        background={this.state.background}
      />
    )
    const userScreen = () => (
      <User
        theme={state.theme}
        language={userProfile}
        changeStyle={this.setBackground}
        background={this.state.background}
      />
    )

    const none = {}
    const extendBackground = { 'position': 'relative' }

    return (
      <section>

        <div className='background slider' style={this.state.background ? extendBackground : none}>
          <Header
            changeLanguage={changeLanguage}
            logout={logOut}
            language={header}
            background={hideBackground}
            changeTheme={changeTheme}
          />

          <Route exact path='/' render={homeScreen} />
          <Route exact path='/search' render={searchScreen} />
          <Route exact path='/user-profile' render={userScreen} />
        </div>

      </section>
    )
  }

  notAuthorized = ({ logon, changeLanguage, state }) => {
    const { login } = translations[state.language]
    return <Route exact path='/' render={() => <Login isLogged={logon} language={login} changeLanguage={changeLanguage} />} />
  }

  render () {
    const { isDarkTheme } = this.state

    return (
      <MuiThemeProvider muiTheme={isDarkTheme ? getMuiTheme(darkBaseTheme) : getMuiTheme(lightBaseTheme)}>
        <MyContext.Consumer>

          {(context) => (
            (context.state.auth) ? this.isAuthorized(context) : this.notAuthorized(context)
          )}
        </MyContext.Consumer>
      </MuiThemeProvider>
    )
  }
}

export default Main
