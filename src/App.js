import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css'

// TODO: É um contaiener e não apresentation
import HeaderProfile from './components/presentation/header/HeaderProfile';
import HeaderSearch from './components/presentation/header/HeaderSearch';

import HomeContainer from './components/container/home/HomeContainer';
import SearchContainer from './components/container/search/SearchContainer';

class App extends Component {


  render() {
    return (
      <main className='app'>
      <BrowserRouter>  
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          
          <header className="home-header">
            <HeaderProfile> </HeaderProfile>
            <HeaderSearch > </HeaderSearch>
          </header>

          <section>
            <Route exact path='/' component={ HomeContainer } />
            <Route exact path='/search-books' component={ SearchContainer }/>

          </section>

        </MuiThemeProvider>
      </BrowserRouter>
      </main>
    );
  }
}

export default App;
