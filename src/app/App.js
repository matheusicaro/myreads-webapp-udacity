import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import PagesContainer from './components/PagesContainer'
import LoginContainer from './pages/login/LoginContainer'

import Background from './media/images/default-background.jpg'

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: true,
      language: 'PT',
    }
  }

  logon = (auth) => {

    if (auth) this.setState({ auth })
  }

  changeLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    const { auth, language } = this.state;

    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          {
            auth && (
              <section>
                
                <div style={style.backgroungImage} ></div>
                <Header></Header>
                <PagesContainer></PagesContainer>

              </section>
            )
          }
          {
            !auth && (
              <Route exact path='/' render={() =>
                <LoginContainer isLogged={this.logon}> </LoginContainer>
              }></Route>
            )
          }

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;

const style = {

  backgroungImage: {
    width: '100%',
    height: "100%",
    position: 'fixed',
    opacity: '0.2',
    background: `url(${Background})`,
  }

}