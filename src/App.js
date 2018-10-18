import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home';
import Search from './components/Search';

import { get, getAll, update, search } from './api/BooksAPI'




class App extends Component {

  constructor() {
    super();
    this.state = { books: '' }
    getAll().then(result => {
      this.setState({
        books: result
      })
    })
  }

  console = () => {
    this.setState({})
  }

  search = (value) =>{
    console.log('query book: ', value)
  }
  render() {

    const { books } = this.state;

    return (
      <BrowserRouter>
        <section>

          <button onClick={this.console}>butaaaaaaaao</button>
          <br />

          <Route exact path='/' render={() => (
            (books === '') ? 'aguardando ...' : <Home books={books} >  </Home>
          )} />

          
          <Route exact path='/search-books' render={() =>( 
            <Search search={ this.search }></Search>
          )}/>

        </section>
      </BrowserRouter>

    );
  }
}

export default App;
