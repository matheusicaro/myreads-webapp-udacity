import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import HomeContainer from './components/container/home/HomeContainer';
import SearchContainer from './components/container/search/SearchContainer';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <main>
          <Route exact path='/' component={ HomeContainer } />
          <Route exact path='/search-books' component={ SearchContainer }/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
