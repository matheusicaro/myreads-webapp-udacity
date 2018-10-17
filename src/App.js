import React, { Component } from 'react';
import Home from './components/Home';

import { get, getAll, update, search } from './api/BooksAPI'




class App extends Component {
  
  constructor(){
    super();
    this.state = { books: '' }
    getAll().then(result => {
      this.setState({
        books: result
      })
    })
  }

  console = () => {

    console.log('books.:', this.state.books)
    this.setState({})  
  }

  render() {

    const { books } = this.state;
    
    return (
      <div>
        <button onClick={ this.console}>butaaaaaaaao</button>
        <br />
        { (books === '') ? 'aguardando ...':<Home books={books}>  </Home> }

      </div>
    );
  }
}

export default App;
