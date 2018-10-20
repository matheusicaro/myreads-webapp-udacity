import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { search } from '../../../api/BooksAPI'
import Search from '../../presentation/search/Search';

class SearchContainer extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      books: ''
    }
  }

  search = () => {
    const { query } = this.state;

    search(query).then(result => {
      if (!result.length > 0) result = false;
      this.setState({ books: result });
    })
  }

  searchQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  searchBooks = (event) => {

    if (event.key === 'Enter') {
      this.search()
    }
  }

  render() {
    const books = (this.state.books) ? (this.state.books) : (false);

    return (
      <Search
        books={books}
        searchQuery={this.searchQuery}
        onKeyPress={this.searchBooks}>
      </Search>

    )
  }
}

export default SearchContainer

