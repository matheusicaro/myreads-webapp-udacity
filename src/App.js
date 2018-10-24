import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css'

// TODO: É um contaiener e não apresentation
import Header from './components/presentation/header/Header';

import HomeContainer from './components/container/home/HomeContainer';
import SearchContainer from './components/container/search/SearchContainer';

import Testes from './code-testes/Testes'

class App extends Component {


  render() {
    return (
      <main className='app'>
      <BrowserRouter>  
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          
          <header className="home-header">
            <Header> </Header>
          </header>

          <section>
            <Route exact path='/' component={ HomeContainer } />
            <Route exact path='/search-books' component={ SearchContainer }/>
            <Route exact path='/testes' component={ Testes }/>
          </section>

        </MuiThemeProvider>
      </BrowserRouter>
      </main>
    );
  }
}

export default App;
