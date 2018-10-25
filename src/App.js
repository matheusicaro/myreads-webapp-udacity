import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css'

// TODO: É um contaiener e não apresentation
import Header from './components/presentation/header/Header';

import LoginContainer from './components/container/login/LoginContainer'
import HomeContainer from './components/container/home/HomeContainer';
import SearchContainer from './components/container/search/SearchContainer';

import Testes from './code-testes/Testes'

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: false
    }
  }

  logon = (auth) => {

    if(auth) this.setState({ auth })
  }

  render() {
    const { auth } = this.state;

    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            {auth && (
              <main className='app'>

                <header className="home-header">
                  <Header> </Header>
                </header>

                <section>
                  <Route exact path='/' component={HomeContainer} />
                  <Route exact path='/search-books' component={SearchContainer} />
                  <Route exact path='/testes' component={Testes} />
                </section>

              </main>
            )
            }

            {!auth && (
              <Route exact path='/' render={() =>
                <LoginContainer isLogged={this.logon}> </LoginContainer>
              }></Route>
            )
            }
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
